# 环境切换

## 目的

实际工程当中，请求接口的接口一定是不相同的。比如说开发环境中，我们需要使用到的服务地址是：http://localhost:3000，而生产环境当中使用到的服务地址是: http://localhost:3002。这样子我们在开发完成之后，就需要将代码修改，将开发环境的服务地址改成生产环境的服务地址。

## 封装

- 别人的做法

  ```js
  // 环境的切换
  if (process.env.NODE_ENV == 'development') {    
      axios.defaults.baseURL = 'https://www.baidu.com';} 
  else if (process.env.NODE_ENV == 'debug') {    
      axios.defaults.baseURL = 'https://www.ceshi.com';
  } 
  else if (process.env.NODE_ENV == 'production') {    
      axios.defaults.baseURL = 'https://www.production.com';
  }
  
  作者：愣锤
  链接：https://juejin.im/post/6844903652881072141
  来源：掘金
  ```

- 我的做法

  ```js
  import axios from 'axios'
  const env = process.env.NODE_ENV //个人觉得实际工程这么做有安全问题，不应该让这种环境变量代码放在浏览器跑！！
  const hosts = {
    'development': 'http://localhost:3000',
    'production': 'http://localhost:3000'
  }
  const useUrl = (hosts, env) => {
    return hosts[env]
  }
  axios.defaults.baseURL = useUrl(hosts, env)
  ```

  书写思想：在看了不少他人源代码后，发现很多工程代码很喜欢用函数的方式做事。比如create-react-app，在我暴露webpack配置想要配置less-loader的时候，发现工程上配置的webpack比自己配置过的webpack形式变换了很多，虽然最终输出的是一个结果。我发现工程上的webpack更喜欢使用函数的形式去完成事情，思考了过后发现这么做代码更加灵活。

