import axios from "axios";


const handleRequest = (request: any) => request
const handleRequestError = (error: any) => Promise.reject(error)

const handleResponse = (response: any) => response
const handleResponseError = (error: any) => Promise.reject(error)

const api = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000
})

api.interceptors.request.use(handleRequest, handleRequestError)

api.interceptors.response.use(handleResponse, handleResponseError)

export default api