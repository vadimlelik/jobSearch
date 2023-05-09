import axios from 'axios'



const http = axios.create({
    baseURL: ''
})


const httpService = {
    get: http.get,
    post: http.post,
    path: http.patch
}
export default httpService