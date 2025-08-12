import React from 'react'
import Styles from "./PrimaryBtn.module.css";
import { useNavigate } from 'react-router-dom';
function PrimaryBtn({text , url , width}) {
  const navigate = useNavigate();
  return (
    <button 
    className={`d-block ${width && width} rounded-pill border-0 position-relative text-capitalize text-white ${Styles.primaryBtn}`}
    onClick={_ => navigate(url)}
    >
      {text}
    </button>
  )
}

export default PrimaryBtn
