import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './Footer.jsx'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Features from './Features.jsx'
import Whychoose from './Whychoose.jsx'
import About from './About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <About/>
    <Features/>
    <Whychoose/>
    <Footer/>
  </StrictMode>,
)
