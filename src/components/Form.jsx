import React, { useEffect } from 'react'
import { postData } from '../utils/PostApi'
import { useState } from 'react'
const Form = ({data,setData,setUpdatedPost,updatedPost}) => {
    const [post, setpost] = useState({
        title:"",
        body:"",
    })

    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setpost((prev)=>{
            return {...prev,[name]:value}
        })
    }

    const addPostData=async()=>{
        const res=await postData(post);
        if(res.status===201){
            setData([...data,res.data])
            setpost({title:'',body:''})
        }
        console.log("res",res)
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        addPostData();
    }

    const isEmpty=Object.keys(updatedPost).length === 0;

    useEffect(()=>{
        updatedPost && setpost({
            title:updatedPost.title || "",
            body:updatedPost.body || ""
        })
    },[updatedPost])
  return (
   <>
   <form className='flex items-center justify-center gap-10 py-4' onSubmit={handleFormSubmit}>
    <input type="text" name='title' onChange={handleChange} value={post.title} placeholder='Title' className='h-10 w-56 border bg-white outline-none text-gray-500 px-2 font-semibold rounded-md' />
    <input type="text" name='body' onChange={handleChange} placeholder='Body' value={post.body} className='h-10 w-56 border outline-none bg-white text-gray-500 px-2 font-semibold rounded-md'/>
    <button type='submit' value={isEmpty ? 'Add' : 'Edit'} className='bg-cyan-500 px-10 rounded-md hover:text-white py-2'>{isEmpty ? 'Add':'Edit'}</button>
   </form>
   </>
  )
}

export default Form