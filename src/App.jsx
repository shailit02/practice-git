import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login  from './pages/Login.jsx'
import  About  from './pages/About.jsx'
import  Home  from './pages/Home.jsx'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/about' element={ <About/>} />
        <Route path='/home' element={ <Home/>} />
        <Route path='/login' element={ <Login/>} />
      </Routes>
    </>
  )
}

export default App
