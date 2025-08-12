import React from 'react'
import Styles from "./Title.module.css"
function Title({title , head , text}) {
  return (
    <div>
        <h6 className={`text-uppercase position-relative  ${Styles.title}`}>{title}</h6>
        <p className={`display-4 mt-1 fw-bold text-center text-md-start ${Styles.head}`}>{head}</p>
        <p className={`text-center text-md-start my-4 ${Styles.text}`}>{text}</p>
      
    </div>
  )
}

export default Title
