import { Laptop, Smartphone } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { groupByDevice } from '../apis/click-event';

function UrlInfoDevice({id}) {
  const [smartphone,setSmartphone]=useState(0);
  const [laptop,setLaptop]=useState(0);
  const init=async()=>
  {
  const response= await groupByDevice(id,localStorage.getItem('token'));
  var phone=0,lap=0;
  response.map((body)=>{
    if(body.device=='Mobile'||body.device=='Tablet')phone+=body.people;
    else lap+=body.people;
  })
  setSmartphone(phone);
  setLaptop(lap);
 // console.log(response);
  }
  useEffect(() => {
    init();
  
  }, [])
  
  return (
    <section className="w-3/5 h-full text-center flex flex-col gap-4 justify-center items-center">
          <h1 className="text-xl font-semibold">TOTAL CLICKS: {smartphone+laptop}</h1>
          <div className="bg-gradient-to-r h-full flex justify-around items-center from-blue-600 to-blue-900 w-full rounded-2xl p-4 text-white text-lg">
            <div className="flex items-center gap-2">
              <Smartphone />: {smartphone}
            </div>
            <div className="flex items-center gap-2">
              <Laptop />: {laptop}
            </div>
          </div>
        </section>
  )
}

export default UrlInfoDevice