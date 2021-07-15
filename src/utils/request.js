import axios from 'axios'
import { baseUrl } from '@/common/config'

/**
 * 全局请求工具
 */
// 统一配置请求
const http = axios.create({
  baseURL: baseUrl,
  responseType: 'json',
  timeout: 30000,
  validateStatus(status) {
    // 200 外的状态码都认定为失败
    return status === 200
  },
})

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

const request = (axios) => {
  return new Promise((resolve, reject) => {
    axios
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          resolve(res.data)
        } else {
          reject(res)
        }
      })
      .catch((error) => {
        reject(error)
      })
      .finally(() => {
        // Toast.clear();
      })
  }).catch((error) => {
    console.log('Request Error:', error)
  })
}

const get = (url, params) => {
  return request(http.get(url, { params }))
}
const post = (url, data) => {
  return request(http.post(url, data, { headers: { 'Content-Type': 'application/json' } }))
}

const put = (url, data) => {
  return request(http.put(url, data, { headers: { 'Content-Type': 'application/json' } }))
}

const del = (url, params) => {
  return request(http.delete(url, { params }))
}

const upload = (url, data) => {
  return request(http.post(url, data, { headers: { 'content-type': 'multipart/form-data' } }))
}

export { get, post, put, del, upload }
