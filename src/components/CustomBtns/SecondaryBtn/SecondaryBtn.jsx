import React from 'react'
import Styles from "./SecondaryBtn.module.css"
import { useNavigate } from 'react-router-dom'
function SecondaryBtn({text , url}) {
  const navigate = useNavigate();
  return (
    <button 
    className={`d-block rounded-pill position-relative text-capitalize ${Styles.secondaryBtn}`}
    onClick={_ => navigate(url)}
    >
      {text}
    </button>
  )
}

export default SecondaryBtn
