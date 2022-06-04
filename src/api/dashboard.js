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

