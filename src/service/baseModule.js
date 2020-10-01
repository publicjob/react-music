import axios from 'axios'
import baseURL from 'service/baseURL'

class BaseModule {
  constructor() {
    this.$http = axios.create({
      baseURL: baseURL
    })
  }
  //启用请求拦截器
  useRequestInterceptors(callback) {
    this.$http.interceptors.request.use(config => {
      config = callback(config)
      return config
    })
  }
  //启用响应拦截器
  useResponseInterceptors(callback) {
    this.$http.interceptors.response.use(response => {
      response = callback(response)
      return response
    })
  }
  //通用的统一的get请求
  $get({ url, params }) {
    return new Promise((resolve, reject) => {
      this.$http({
        method: 'get',
        url: url,
        params: params
      }).then(response => resolve(response)).catch(error => reject(error))
    })
  }
  //通用的统一的post请求
  $post({ url, data }) {
    const normalizeData = (data) => {
      
    }
    return new Promise((resolve, reject) => {
      this.$http({
        method: 'post',
        url: url,
        data: data
      })
    })
  }
  //通用的统一的put请求
  $put() {

  }
  //通用的统一的delete请求
  $delete() {

  }
}

export default BaseModule