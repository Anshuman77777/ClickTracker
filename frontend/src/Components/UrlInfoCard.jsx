import React from 'react'
import { useLocation } from 'react-router-dom';

function UrlInfoCard({id}) {
  const location = useLocation();
  const body = location.state || {};
  console.log(body);
  return (
    <section className="flex flex-col card rounded-2xl w-2/5 bg-gradient-to-r from-blue-600 to-blue-900 text-white h-full p-4 justify-around">
          <h1 className="text-xl font-bold">Name: {body.name}</h1>
          <a
            href={body.originalUrl}
            className="link underline text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Destination
          </a>
          <h2 className="text-sm">
            Link: <code>{window.location.origin}/gate/body.id?ref=x</code> <br />
            x = instagram, linkedin, etc...
          </h2>
        </section>
  )
}

export default UrlInfoCard