import { useState,useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BookingDetail from './components/BookingDetail';

axios.defaults.baseURL = "https://travel-nodejs.vercel.app"

function App() {
  const [accessCode, setAccessCode] = useState(sessionStorage.getItem('accessCode') || '');

  const handleLogin = (code) => {
    setAccessCode(code);
  };


  // just to wake server
  const TestApi = async()=>{

    try{
      await axios.get("https://travel-nodejs.vercel.app/test");
    }catch(err){
      console.log("err", err)
    }

  }

  useEffect(() => {
    TestApi()
  }, [])
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/sign_in" element={accessCode ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={!accessCode ? <Navigate to="/sign_in" /> : <Dashboard accessCode={accessCode} setAccessCode={setAccessCode} />} />
          <Route path="/booking/:id" element={!accessCode ? <Navigate to="/sign_in" /> : <BookingDetail accessCode={accessCode} setAccessCode={setAccessCode} />} />
          <Route index element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
