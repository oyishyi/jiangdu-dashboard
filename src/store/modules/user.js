import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken,getUser,setUser,removeUser } from '@/utils/auth'
import { resetRouter, scynRoutes } from '@/router'
import Router from '@/router'


const getDefaultState = () => {
    return {
        token: getToken(),
        roles: "",
        name: '',
        username: getUser(),
        avatar: '',
        menus: '', // 新增
    }
}
console.log(scynRoutes.admin)
const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_MENUS: (state, menus) => {
        state.menus = menus
    },
    SET_USERNAME: (state, username) => {
        state.username = username

    }
}

const actions = { // user login
    login({
        commit
    }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
                const { access_token } = response
                commit('SET_TOKEN', access_token)
                commit('SET_USERNAME', username)
                setToken(access_token)
                setUser(username)
                console.log('get token')
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    getDyRouters(roles) {
        var menus = []
        var obj = JSON.parse(JSON.stringify(scynRoutes))
        roles.forEach(element => {
            menus.push(obj[element])
        });
        //menus.push(scynRoutes['warehouse'])
        return menus;
    },

    // get user info
    getInfo(
        { commit, state }
    ) {
        return new Promise((resolve, reject) => {
            getInfo(state.username).then(response => {
                const data = response
                if (!data) {
                    return reject('Verification failed, please Login again.')
                }
                const { username, avatar, u_authority,u_status } = data
                // if(u_status == 0){
                
                //     Router.push({name: 'changepw'});
                //     // Router.push({
                //     //     name: 'changepw'
                //     // })
                   
                // }

               

                var roles = u_authority.split(",");
                // 模拟请求数据
                const menus = actions.getDyRouters(roles);

                // 如果需要404 页面，请在此处添加
                menus.push({
                    path: '/404',
                    component: '404',
                    hidden: true
                }, {
                    path: '*',
                    redirect: '/404',
                    hidden: true
                })
                commit('SET_NAME', username)
                commit('SET_AVATAR', avatar)
                commit('SET_ROLES', roles)
                commit('SET_MENUS', menus) // 触发vuex SET_MENUS 保存路由表到vuex
                
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // user logout
    logout(
        { commit, state }
    ) {
        return new Promise((resolve, reject) => {
           // logout(state.token).then(() => {
                removeToken() // must remove  token  first
                resetRouter()
                commit('RESET_STATE')
                resolve()
           // }).catch(error => {
               // reject(error)
            //})
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            removeToken() // must remove  token  first
            removeUser()
            commit('RESET_STATE')
            resolve()
        })
    }
}

export default { namespaced: true, state, mutations, actions }
