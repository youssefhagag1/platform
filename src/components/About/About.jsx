import React from 'react'
import Styles from "./About.module.css"
import Features from '../Features/Features'
import AboutUs from '../AboutUs/AboutUs'
import Tesimonials from '../Tesimonials/Tesimonials'
function About() {
  return (
    <div>
      <Features />
      <AboutUs/>
      <Tesimonials/>
    </div>
  )
}

export default About
