//获取环境变量
const env = process.env.NODE_ENV 
//定义不同环境下的主机名 
const hosts = {
  'development': 'http://localhost:3000',
  'production': 'http://localhost:3000'
}
//创建根据环境自动选取主机的工具
const useUrl = (hosts, env) => {
  return hosts[env]
}

export default useUrl(hosts, env)