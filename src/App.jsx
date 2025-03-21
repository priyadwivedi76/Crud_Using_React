import { getMethod } from "./utils/PostApi";
import React, { useEffect } from "react"
function App() {
  console.log(getMethod());

  const getData=async()=>{
    const res=await getMethod();
    console.log(res.data);
  }

  useEffect(()=>{
    getData();
  },[])


  return (
    <>
    <h1>Hey</h1>
    </>
  )
}

export default App
