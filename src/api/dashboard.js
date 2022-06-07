import requestdev from '@/utils/request-dev'

export function getReportOverview() {
    return requestdev({
        url: '/api/reporting',
        method: 'get'        
    })
}
export function getReportData(id) {
    return requestdev({
        url: '/api/reporting/portraits/'+id,
        method: 'get'        
    })
}
export function getDefaultReportData() {
    return requestdev({
        url: '/api/reporting/portraits',
        method: 'get'        
    })
}
export function getLastEntry(){
    return requestdev({
        url:"api/reporting/getLastEntries?days=30",
        method:'get'
    })
}
export function getService(){
    return requestdev({
        url:"/api/universe/allService",
        method:'get'
    })
}
