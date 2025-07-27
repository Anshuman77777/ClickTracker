import { RefreshCcw } from 'lucide-react'
import React, { useEffect } from 'react'

function Gate() {
    const url="https://youtu.be/B3Z4XGAxJB0?si=mFsVF4r9oxjUIJ6B";
    useEffect(()=>{
        //window.location.href=url;
    })
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <RefreshCcw className='animate-spin m-5'/>
        <h1>Redirecting!</h1>
    </div>
  )
}

export default Gate