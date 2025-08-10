import { useState } from 'react'
import './App.css'
import  Nav  from './components/Navbar/NavbarComponent'
import Home from './components/Home/Home'
import { Routes , Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
      </Routes>
    </>
  )
}

export default App
