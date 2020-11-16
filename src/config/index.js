// 一些全局的config配置
const config = {
  // 生产环境
  'production': {
    baseURL: 'http://127.0.0.1:9091/',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: 'http://127.0.0.1:1234/',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'http://XXXX:9091/test/',
    authBaseURL: ''
  }
}
console.log(process.env.NODE_ENV)
export default config[process.env.NODE_ENV]
