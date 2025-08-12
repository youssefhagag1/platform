import React from 'react'
import Styles from "./Features.module.css"
import { Container } from 'react-bootstrap'
import PrimaryBtn from "../../CustomBtns/PrimaryBtn/PrimaryBtn"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
function Features() {
  return (
    <Container className={Styles.features} >
      <div className={Styles.boxes}>
        <div  className={`text-center text-md-start ${Styles.feat}`}>
                <h2 className='display-5 fw-bold mb-4'>Awesome Feature</h2>
                <p className='mb-4'>Set have great you male grass yielding an yielding first their you're have called the abundantly fruit were man</p>
                <div className='d-flex justify-content-center justify-content-md-start'>
                    <PrimaryBtn text = {"Read More"} url = {""} />
                </div>
        </div>
        <div  className={Styles.box}>
                <div className={Styles.icon}>
                <FontAwesomeIcon icon={faClone}/>
            </div>
            <h3>Better Future</h3>
            <p>Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
        </div>
        <div  className={Styles.box}>
                <div className={Styles.icon}>
                <FontAwesomeIcon icon={faPen}/>
            </div>
            <h3>Better Future</h3>
            <p>Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
        </div>
        <div  className={Styles.box}>
                <div className={Styles.icon}>
                <FontAwesomeIcon icon={faLightbulb}/>
            </div>
            <h3>Better Future</h3>
            <p>Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
        </div>

      </div>
    </Container>
  )
}

export default Features
