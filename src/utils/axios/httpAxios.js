//导入封装拦截器
import httpService from '@utils/request'
const envInfo = import.meta.env
//创建axios请求网络配置
const httpConfig = {
    // 请求超时时间
    timeout: 50000,
    baseURL: envInfo.VITE_APP_BASE_API,

}

// 创建实例
const http = new httpService(httpConfig)
export default http