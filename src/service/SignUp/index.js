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
  //检测手机号是否已经注册
  validatePhoneRegistered(phone) {
    return this.$http.get(API.validatePhoneRegistered, {
      params: { phone }
    })
  }
  //向指定手机号发送验证码
  sendCaptcha(phone) {
    return this.$http.get(API.sendCaptcha, {
      params: { phone }
    })
  }
  //对输入验证码进行校验
  validateCaptcha(phone, captcha) {
    return this.$http.get(API.validateCaptcha, {
      params: {
        phone,
        captcha
      }
    })
  }
  //发送用户填写的注册信息进行注册
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