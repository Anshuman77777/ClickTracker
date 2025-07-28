import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const nav = useNavigate();
  const {logout} = useAuth();
  const handleSignout = ()=>{
    const confirm= window.confirm("Logout?")
    if(confirm)
    {
      logout();
    }
  }
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className=''><Link to='/create'>Create New Url</Link></li>
        <li className='text-red-400 link' onClick={handleSignout}>Signout</li>
        
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to='/' className="btn btn-ghost text-xl">Click Tracker</Link>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
    </>
  )
}

export default Navbar