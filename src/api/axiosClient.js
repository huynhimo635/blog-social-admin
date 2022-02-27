import axios from 'axios'

// Set up default config for http request here
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json'
    }
})

axiosClient.interceptors.request.use(async(config) => {
    // Handle token here...
    return config
})

axiosClient.interceptors.response.use(
    async(response) => {
        if (response && response.data) return response.data
        return response
    },
    (error) => {
        // Handle errors
        throw error
    }
)

export const getApi = (url, ...config) => {
    axiosClient.get(url, config || null)
}

export const postApi = (url, data, ...config) => {
    axiosClient.post(url, data, config || null)
}

export default axiosClient