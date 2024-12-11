import React from 'react'
import Navbar from './componants/Navbar'
import Home from './componants/Home'
import About from './componants/About'
import Projects from './componants/Projects'
import Experience from './componants/Experience'
import Footer from './componants/footer'
import Contact from './componants/Contact'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App
