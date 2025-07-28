
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './Components/Navbar'
import AllUrls from './pages/AllUrls'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import UrlInfo from './pages/UrlInfo'
import Gate from './pages/Gate'
import CreateUrl from './pages/CreateUrl'
import { useAuth } from './contexts/AuthContext'
import PrivateRoute from './util/PrivateRoute'
function App() {
 const {isLoggedIn}=useAuth();
  //data-theme="light"
  return (

    <div className='w-full h-full flex flex-col items-center '>
      
        {isLoggedIn&&<Navbar />}
      <Routes>
        {/* Public */}
        <Route path="/signup" element={isLoggedIn?<Navigate to="/"/>:<Signup />} />
        <Route path="/login" element={isLoggedIn?<Navigate to="/"/>:<Login />} />
        <Route path="/gate/:id" element={<Gate />} />

        {/* General Users */}
        <Route path="/" element={<PrivateRoute><AllUrls /></PrivateRoute>} />
        <Route path="/url/:id" element={<PrivateRoute><UrlInfo /></PrivateRoute>} />
        <Route path="/create" element={<PrivateRoute><CreateUrl /></PrivateRoute>} />
        {/* Admin */}
        
      </Routes>
    </div>

  )
}

export default App
