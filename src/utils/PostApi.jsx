import axios from 'axios'

const instance=axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export default instance;

export const getMethod=()=>{
    return instance.get('/posts')
}

export const deleteMethod=(id)=>{
    return instance.delete(`/posts/${id}`)
}

export const postData=(posts)=>{
    return instance.post('/posts',posts)
}

export const updatedData=(post,id)=>{
    return instance.put(`/posts/${id}`,post)
}