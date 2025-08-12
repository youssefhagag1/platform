import { useState } from 'react'
import './App.css'
import  Nav  from './components/Navbar/NavbarComponent'
import Home from './components/Home/Home'
import { Routes , Route } from 'react-router-dom'
import Courses from './components/Courses/Courses'
import CourseDetails from './components/courseDetails/courseDetails'
import Teacher from './components/Teacher/Teacher'
function App() {

  return (
    <>
      <Nav/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/teacher/:id" element={<Teacher/>}/>
  <Route path="/courses" element={<Courses/>}/>
  <Route path="/courses/:id" element={<CourseDetails/>}/>
</Routes>
    </>
  )
}

export default App
