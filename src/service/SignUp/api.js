//定义SignUp注册模块的请求API
const API = {
  validatePhoneRegistered: '/cellphone/existence/check', //检测手机号是否已经注册
  sendCaptcha: '/captcha/sent',//向指定手机号发送验证码
  validateCaptcha: '/captcha/verify',//对输入验证码进行校验
  register: '/register/cellphone',//发送用户填写的注册信息进行注册
}

export default API