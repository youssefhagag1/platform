import React from 'react'
import Styles from "./Our.module.css"
function Our({title}) {
  return (
    <>
      <h3 className={`position-relative text-capitalize ${Styles.title}`}>{title}</h3>
    </>
  )
}

export default Our
