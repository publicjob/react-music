import axios from 'axios'
import baseURL from 'service/baseURL'

class BaseModule {
  constructor() {
    this.$http = axios.create({
      baseURL: baseURL
    })
  }
  //对axios实例启用请求拦截器
  useRequestInterceptors(handleConfig) {
    this.$http.interceptors.request.use(config => {
      config = handleConfig(config)
      return config
    })
  }
  //对axios实例启用响应拦截器
  useResponseInterceptors(handleResponse) {
    this.$http.interceptors.response.use(response => {
      response = handleResponse(response)
      return response
    })
  }
  //暴露所有业务使用的post方法，统一使用$get为业务功能的get网络请求
  $get({ url, params }) {
    return new Promise((resolve, reject) => {
      this.$http({
        method: 'get',
        url: url,
        params: params
      }).then(response => resolve(response)).catch(error => reject(error))
    })
  }
  //暴露所有业务使用的post方法，统一使用$post为业务功能的post网络请求
  $post({ url, data }) {
    return new Promise((resolve, reject) => {
      this.$http({
        method: 'post',
        url: url,
        data: data
      }).then(response => resolve(response)).catch(error => reject(error))
    })
  }
}

export default BaseModule