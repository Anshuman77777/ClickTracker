import { Laptop, Smartphone } from 'lucide-react'
import Piechart from '../Components/Piechart';
import Linechart from '../Components/Linechart';
import React from 'react'
import Share from '../Components/Share';
const RefSpread = [
  { name: "linkedin", value: 30 },
  { name: "instagram", value: 10 },
  { name: "reddit", value: 38 },
  {name:"yahoo",value:10}
];

function UrlInfo() {
  return (
    <div className="w-full h-full flex flex-col p-5 overflow-y-auto">
      <div className="w-full flex gap-2 p-1 min-h-[200px]">
        {/* Left Section */}
        <section className="flex flex-col card rounded-2xl w-2/5 bg-gradient-to-r from-blue-600 to-blue-900 text-white h-full p-4 justify-around">
          <h1 className="text-xl font-bold">Name: ThunderStruck</h1>
          <a
            href="https://www.youtube.com/watch?v=v2AC41dglnM&list=RDs_s-sXX4Kt4&index=6"
            className="link underline text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Destination
          </a>
          <h2 className="text-sm">
            Link: <code>/gate/0113?ref=x</code> <br />
            x = instagram, linkedin, etc...
          </h2>
        </section>

        {/* Right Section */}
        <section className="w-3/5 h-full text-center flex flex-col gap-4 justify-center items-center">
          <h1 className="text-xl font-semibold">TOTAL CLICKS: 78</h1>
          <div className="bg-gradient-to-r h-full flex justify-around items-center from-blue-600 to-blue-900 w-full rounded-2xl p-4 text-white text-lg">
            <div className="flex items-center gap-2">
              <Smartphone />: 50
            </div>
            <div className="flex items-center gap-2">
              <Laptop />: 28
            </div>
          </div>
        </section>
       
      </div>
       <section className='w-full flex p-5 items-center justify-center'>
        
        <Linechart/>
        </section>
         <section className='w-full flex p-5 items-center justify-center'>
        <div><Piechart data={RefSpread}/></div>
        <Share/>
        
        </section>
        
    </div>
  );
}

export default UrlInfo