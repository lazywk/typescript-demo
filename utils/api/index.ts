import axios from "axios";


const handleRequest = (request: any) => request
const handleRequestError = (error: any) => Promise.reject(error)

const handleResponse = (response: any) => response
const handleResponseError = (error: any) => Promise.reject(error)

const api = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000
})

api.interceptors.request.use(
    config => handleRequest(config),
    error => handleRequestError(error)
)

api.interceptors.response.use(
    response => handleResponse(response),
    error => handleResponseError(error)
)

export default api