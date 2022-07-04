import axiosClient from './axiosClient'
import { ENTITY } from '../utils/constant'

const entity = ENTITY.comment

const commentApi = {
  getAll: () => {
    const endpoint = `/${entity}`
    return axiosClient.get(endpoint)
  },
  get: (id) => {
    const endpoint = `/${entity}/${id}`
    return axiosClient.get(endpoint)
  },
  add: (data) => {
    const endpoint = `/${entity}`
    return axiosClient.post(endpoint, data)
  },
  update: (id, data) => {
    const endpoint = `/${entity}/${id}`
    return axiosClient.put(endpoint, data)
  },
  delete: (id) => {
    const endpoint = `/${entity}/${id}`
    return axiosClient.delete(endpoint)
  }
}

export default commentApi
