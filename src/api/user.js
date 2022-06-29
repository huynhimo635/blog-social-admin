import axiosClient from './axiosClient'

const authApi = {
  login: (data) => {
    const endpoint = '/user/login'
    return axiosClient.post(endpoint, data)
  },
  refresh: () => {
    const endpoint = '/user/refreshToken'
    return axiosClient.post(endpoint)
  }
}

export default authApi
