const env = process.env.NODE_ENV
const hosts = {
  'development': 'http://localhost:3000',
  'production': 'http://localhost:3000'
}
const useUrl = (hosts, env) => {
  return hosts[env]
}

export default useUrl(hosts, env)