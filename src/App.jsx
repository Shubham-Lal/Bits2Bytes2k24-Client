import './App.css'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import { Home, About, Crew, Events, Contact, Gallery, Signup } from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='events' element={<Events />} />
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
