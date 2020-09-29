import axios from 'axios'
const env = process.env.NODE_ENV
const hosts = {
  'development': 'http://localhost:3000',
  'production': 'http://localhost:3000'
}
const useUrl = (hosts, env) => {
  return hosts[env]
}

axios.defaults.baseURL = useUrl(hosts, env)
axios.interceptors.request.use(config => {
})

axios.interceptors.response.use(response => {

})