import React from 'react'
import Styles from './Spiner.module.css';
function Spiner() {
  return (
<div className='vh-100 d-flex align-items-center justify-content-center'><span className={Styles.loader}></span></div>
  )
}

export default Spiner
