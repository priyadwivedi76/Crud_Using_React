import axios from 'axios'

const instance=axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export default instance;

export const getMethod=()=>{
    return instance.get('/posts')
}