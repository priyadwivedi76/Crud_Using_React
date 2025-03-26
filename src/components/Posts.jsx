import React, { useEffect } from 'react'
import { getMethod } from '../utils/PostApi';
import { useState } from 'react';
const Posts = () => {
    const [Data, setData] = useState([])

    const getMethodData=async()=>{
        const res=await getMethod();
        console.log(res.data);
        setData(res.data);
    }

    useEffect(()=>{
        getMethodData();
    },[])


  return (
    <>
    <section className='section-container'>
        <ol className='lists mx-auto mt-10'>
            {Data.map((data)=>{
                const {id,title,body}=data;
                return (
                    <li key={id} className='bg-slate-700 h-[30vh] w-[60vh] p-2 flex text-white flex-col justify-between rounded-lg hover:bg-slate-600 hover:scale-105 transition ease-in-ease-out duration-150'>
                        <h2 className='font-semibold'>Title:{title}</h2>
                        <p>{body}</p>
                        <div className='flex items-center justify-start'>
                            <button className='Edit'>Edit</button>
                            <button className='Delete'>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ol>
    </section>
    </>
  )
}

export default Posts