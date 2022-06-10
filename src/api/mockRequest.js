//二次封装axios
import axios from 'axios'
import nprogress from 'nprogress'
//引入nprogress样式
import "nprogress/nprogress.css"
//利用axios对象的方法create,创建axios实例
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    baseURL: "/mock",
    //请求超时时间
    timeout: 5000
})
//请求拦截器
requests.interceptors.request.use((config) => {
    //config配置对象有个重要属性headers
    nprogress.start()
    return config
})
//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
}
)

export default requests