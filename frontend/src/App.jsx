
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './Components/Navbar'
import AllUrls from './pages/AllUrls'
import { Route, Router, Routes } from 'react-router-dom'
import UrlInfo from './pages/UrlInfo'
import Gate from './pages/Gate'

function App() {
 
//data-theme="light"
  return (
  
    <div  className='w-full h-full flex flex-col items-center '>
      <Navbar/>
       <Routes>
      <Route path="/" element={<AllUrls/> } />
      <Route path="/signup" element={<Signup/> } />
      <Route path="/login" element={<Login/> } />
      <Route path="/url/:id" element={<UrlInfo/> } />\
      <Route path="/gate/:id" element={<Gate/> } />
     </Routes>
    </div>
    
  )
}

export default App
