import React, { useState } from 'react'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Seed from './components/Seed'


function App() {
  const [land, setLanding] = useState(true)
  return (
    <div className='absolute bg-black text-white w-full h-screen '>
      <Nav />
      <Landing />
      <Seed />
      <Footer />
    </div>
  )
}

export default App