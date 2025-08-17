// App.jsx
import React from 'react'
import './App.css'
import Nav from './components/Navbar/NavbarComponent'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Courses from './components/Courses/Courses'
import Teacher from './components/Teacher/Teacher'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import ScrollToTop from './components/Scroll to Top/ScrollToTop'
import Profile from './components/Profile/Profile'
import Spiner from './components/Spiner/Spiner'
import Contact from './components/Contact/Contact'

const CourseDetails = React.lazy(() => import('./components/courseDetails/courseDetails'))

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/teacher/:id" element={<Teacher />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/courses/:id"
          element={
            <React.Suspense fallback={<Spiner/>}>
              <CourseDetails />
            </React.Suspense>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
