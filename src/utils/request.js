import axios from 'axios'
import errorRes from '@axios/errorRes'

// 创建一个axios实例
class httpService {
    constructor(defaultConfig) {
        this.defaultConfig = defaultConfig;
    }
    // 初始化 axios 实例
    initAxios() {
        const axiosInstance = axios.create(this.defaultConfig)
        this.interceptors(axiosInstance)
        return axiosInstance
    }
    post(url, data, config) {
        const newAxios = this.initAxios()
        //post的基本配置
        const postCfg = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        //将postCfg和config合并
        const configs = Object.assign(postCfg, config)
        //返回一个promise
        return new Promise((resolve, reject) => {
            newAxios.post(url, data, configs).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
    //拦截器
    interceptors(axios) {
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么

            return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            errorRes(error)
            return Promise.reject(error);
        });
    }
}
export default httpService