import { useState } from 'react'

import './App.css'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
function App() {
 

  return (
    <div className='flex flex-col h-screen'>
    <Nav/>
    <Main/>

  <Footer/>

    </div>
  )
}

export default App
