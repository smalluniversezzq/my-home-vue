import axios from 'axios';
import {baseURL } from '@/api/index.js'
class HttpRequest {
  constructor (baseUrl = baseURL){
    // 相当于
    // baseUrl= baseUrl|| baseURL
    this.baseUrl = baseUrl
    this.queue = {}
  }
  gitInsideConfig(){
    const congif = {
      baseUrl:this.baseUrl,
      headers:{
        //
      }
    }
    return congif
  }
  request (options){
    const instance = axios.created()
    options = Object.assign(this.gitInsideConfig(), options)
    return instance(options)
  }
}
export default HttpRequest
