import React, { useEffect, useState } from 'react'
import UrlCard from '../Components/UrlCard'
import { getUrl } from '../apis/url';
import { useAuth } from '../contexts/AuthContext';
//import demourls from '../assets/demourls.json'
function AllUrls() {
  const {id}=useAuth().user;
  const [urls,setUrls]=useState([]);
  const refresh=async()=>{
    
    const temp=await getUrl(id,localStorage.getItem("token"));
    console.log("temp "+temp);
    setUrls(temp);
    
  }
  useEffect(() => {
    refresh();
  }, [])
  
    return (
        <div className='w-full grid grid-cols-3 p-4 gap-2 overflow-auto'>
          {urls&&urls.map((data)=>(
            <UrlCard UrlName={data.name} Date={data.createdAt} id={data.id}/>
          ))}
        </div>

    )
}

export default AllUrls