import axiosClient from './axiosClient'

export const getApi = (endpoint, ...config) => {
  return axiosClient.get(endpoint, config || null)
}

export const postApi = (endpoint, data, ...config) => {
  return axiosClient.post(endpoint, data, config || null)
}
