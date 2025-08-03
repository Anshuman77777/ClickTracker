import { Laptop, Smartphone } from 'lucide-react'
import Piechart from '../Components/Piechart';
import Linechart from '../Components/Linechart';
import React from 'react'
import Share from '../Components/Share';
import { useParams } from 'react-router-dom';
import UrlInfoCard from '../Components/UrlInfoCard';
import UrlInfoDevice from '../Components/UrlInfoDevice';


function UrlInfo() {
  const {id}= useParams();
  return (
    <div className="w-full h-full flex flex-col p-5 overflow-y-auto">
      <div className="w-full flex gap-2 p-1 min-h-[200px]">
        {/* Left Section */}
        <UrlInfoCard/>

        {/* Right Section */}
        <UrlInfoDevice id={id}/>
       
      </div>
       <section className='w-full flex p-5 items-center justify-center'>
        
        <Linechart id={id}/>
        </section>
         <section className='w-full flex p-5 items-center justify-center'>
        <div><Piechart id={id}/></div>
        <Share id={id}/>
        
        </section>
        
    </div>
  );
}

export default UrlInfo