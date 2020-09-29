const validateRules = {
  'nickname': /^/,
  'phone': /^/,
  'password': /^/,
  'captha': /^/
}


const validate = (type, value, onSuccess, onError) => {
  if(validateRules[type].test(value)){
    onSuccess()
  }else {
    onError()
  }
}

export default validate