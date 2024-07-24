import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Splash from './Components/Splash'
import Navbar from './Components/Navbar'
import SpecificEvent from './pages/specEvent'
import { Home, About, Crew, Events, Contact, Gallery, Signup } from './pages'

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fade, setFade] = useState('fade-in');

  useEffect(() => {
    const timer1 = setTimeout(() => setFade('fade-out'), 3000);
    const timer2 = setTimeout(() => setShowSplash(false), 3500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  }, [])

  return showSplash ? (
    <div className={fade}>
      <Splash />
    </div>
  ) : (
    <div className='fade-in'>
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
    </div>
  )
}
