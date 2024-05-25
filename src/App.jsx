import React from 'react'
import './App.css'
import Header from './components/Header' 
import Hero from './components/Hero'
import NewArrival from './components/NewArrival'
import PicSection from './components/PicSection'
import Featured from './components/Featured'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrival />
      <PicSection />
      <Featured />
      <Footer />
    </div>
  )
}

export default App