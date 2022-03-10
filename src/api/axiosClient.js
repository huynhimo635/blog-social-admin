import axios from 'axios'

// Set up default config for http request here
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACK_END_URL,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

axiosClient.interceptors.request.use(async (config) => {
  //   Handle token here...
  const token = localStorage.getItem('token')
  config.headers = {
    Authorization: `Bearer ${token}`
  }
  return config
})

axiosClient.interceptors.response.use(
  async (response) => {
    return response
  },
  (error) => {
    // Handle errors
    const { response } = error
    throw response
  }
)

export default axiosClient
