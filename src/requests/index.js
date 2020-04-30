import axios from 'axios'
import {message} from 'antd'

const isDev = process.env.NODE_ENV ==='development'

const service = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/250632' : ''
})

service.interceptors.request.use((config) => {
    config.data = Object.assign({},config.data,{
        // authToken:window.localStorage.getItem('authToken')
        authToken:'huangsheng'
    })
    return config
})

service.interceptors.response.use((resp)=>{
    // console.log(resp)
    if(resp.data.code === 200) {
        return resp.data.data
    }else{
        //处理错误
        message.error('Somthing is worng')
    }
})

export const getArticles = (offset = 0, limited = 0) => {
    // console.log('zhixingle')
    return service.post('/api/v1/articList',{
        offset,
        limited
    })
}

export const deleteArticleById = (id) => {
    // console.log('zhixingle')
    return service.post(`/api/v1/articDelete/${id}`)
}

