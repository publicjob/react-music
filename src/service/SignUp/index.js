import axios from 'axios'
import qs from 'qs'
import baseURL from 'service/baseURL'
import API from './api'

class SignUp {
  constructor() {
    this.$http = axios.create({
      baseURL: baseURL
    })
    this.dataMethodsDefaults = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [function (data) {
        return qs.stringify(data)
      }]
    }
  }
  validatePhoneRegistered(phone) {
    return this.$http.get(API.validatePhoneRegistered, {
      params: { phone }
    })
  }
  sendCaptcha(phone) {
    return this.$http.get(API.sendCaptcha, {
      params: { phone }
    })
  }
  validateCaptcha(phone, captcha) {
    return this.$http.get(API.validateCaptcha, {
      params: {
        phone,
        captcha
      }
    })
  }
  register(nickname, phone, password, captcha) {
    return this.$http.get(API.register, {
      params: {
        nickname,
        phone,
        password,
        captcha
      }
    })
  }
}

export default new SignUp()