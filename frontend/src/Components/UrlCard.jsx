import React from 'react'
import { generateGradientFromString } from '../util/colors'
import { Link } from 'react-router-dom'
function UrlCard({UrlName,Date,id}) {
    const gradient=generateGradientFromString(UrlName)
  return (
    <Link to={`/url/${id}`}>
   <div className="card  text-primary-content w-full h-full bg-gradient-to-r from-blue-600 to-blue-900">
  <div className="card-body cursor-pointer shadow-2xl">
    <h2 className="card-title">{UrlName}</h2>
    <p>{Date}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</Link>
  )
}

export default UrlCard