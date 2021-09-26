import requestdev from '@/utils/request-dev'

export function getProgramProcess() {
    return requestdev({
        url: '/programProcess',
        method: 'get'        
    })
}

export function getComponents() {
    return requestdev({
        url: '/comOverview',
        method: 'get'        
    })
}

export function getProjectsNoAuth(){
    return requestdev({
        url:'/getProjectsNoAuth',
        method:'get'
    })
}
export function getProcessAlert() {
    return requestdev({
        url: '/processAlert',
        method: 'get'        
    })
}

export function componentEfficiency() {
    return requestdev({
        url: '/componentEfficiency',
        method: 'get'        
    })
}

export function getProgramAlert() {
    return requestdev({
        url: '/programAlert',
        method: 'get'        
    })
}

export function getProcess(id) {
    return requestdev({
        url: '/getDashBoardProcess/'+id,
        method: 'get'        
    })
}
export function getComponentTime() {
    return requestdev({
        url: '/componentTime',
        method: 'get'        
    })
}
export function getMainData(){
    return requestdev({
      url:'/pieDataList',
      method:'get'
    })
}
export function getMaintanData(){
    return requestdev({
      url:'/alterDataList',
      method:'get'
    })
}

export function getPieData(){
    return requestdev({
      url:'/pieDataList',
      method:'get'
    })
}