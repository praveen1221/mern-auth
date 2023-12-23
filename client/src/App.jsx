import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import SignIn from './pages/signin'
import SingUp from './pages/signup'
import Profile from './pages/Profile'

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SingUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
}
