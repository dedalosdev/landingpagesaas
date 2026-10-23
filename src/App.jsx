import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InfoSection } from './components/InfoSection'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />     
      <Hero />
      <About />
      <InfoSection />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App
