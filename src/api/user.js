//import request from '@/utils/request'
import requestdev from '@/utils/request-dev'
export function getUsersList() {
  return requestdev({
    url: '/users',
    method: 'get'
   
  })
}
export function getUser(id) {
  return requestdev({
    url: '/user/'+ id,
    method: 'get'
   
  })
}
export function addUser(data) {
  return requestdev({
    url: '/users',
    method: 'post',
    data
  })
}
export function deleteUser(id) {
  return requestdev({
    url: '/user/'+ id,
    method: 'delete',

  })
}

export function changeUser(id,data) {
  return requestdev({
    url: '/user/'+ id,
    method: 'put',
   data
  })
}
export function putUser(data) {
  return requestdev({
    url: '/users',
    method: 'put',
    data
  })
}

export function login(data) {
  return requestdev({
    url: '/auth',
    method: 'post',
    data
  })
}

export function getInfo(id) {
  return requestdev({
    url: '/user/'+ id,
    method: 'get'
  
  })
}

export function logout() {
  return requestdev({
    url: '/auth',
    method: 'post'
  })
}
// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
