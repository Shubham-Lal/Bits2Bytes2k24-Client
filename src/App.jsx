import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Splash from './Components/Splash'
import Navbar from './Components/Navbar'
import SpecificEvent from './pages/specEvent'
import { Home, About, Crew, Events, Contact, Gallery, Signup } from './pages'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 2000)
  }, [])

  return showSplash ? (
    <Splash />
  ) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='events' element={<Events />} />
        <Route path='events/:type' element={<SpecificEvent />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='crew' element={<Crew />} />
        <Route path='signup' element={<Signup />} />
        <Route path='gallery' element={<Gallery />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  )
}
