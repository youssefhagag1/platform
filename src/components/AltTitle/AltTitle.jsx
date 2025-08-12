import React from 'react'
import Styles from "./AltTitle.module.css"
function AltTitle({title , head}) {
  return (
    <div className={`text-center ${Styles.altTitle}`}>
      <h6 className='text-uppercase'>{title}</h6>
      <p className='display-4 fw-bold position-relative'>{head}</p>
    </div>
  )
}

export default AltTitle
