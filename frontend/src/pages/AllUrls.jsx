import React from 'react'
import UrlCard from '../Components/UrlCard'
import demourls from '../assets/demourls.json'
function AllUrls() {
    return (
        <div className='w-full grid grid-cols-3 p-4 gap-2 overflow-auto'>
          {demourls.map((data)=>(
            <UrlCard UrlName={data.name} Date={data.created_at} id={data.id}/>
          ))}
        </div>

    )
}

export default AllUrls