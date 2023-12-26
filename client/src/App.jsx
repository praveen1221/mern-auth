import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import SignIn from './pages/Signin'
import Profile from './pages/Profile'
import Header from './components/Header'
import SignUp from './pages/Signup'

export default function App() {
  return <BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
}
