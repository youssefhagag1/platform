import React from 'react'
import Styles from "./AboutUs.module.css"
import { Container, Image , Row , Col } from 'react-bootstrap'
import learningImage from "../../assets/images/learning_img.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faPenRuler } from '@fortawesome/free-solid-svg-icons'
import PrimaryBtn from "../CustomBtns/PrimaryBtn/PrimaryBtn"
import Title from '../Title/Title'
import { useManualIntersection } from "../../Hooks/useManualIntersection";

function AboutUs() {
    const [ref, isIntersecting] = useManualIntersection(100);
  
  return (
    <Container fluid className='overflow-hidden'>
      <Row className='align-items-center'>
        <Col md={6}
        ref={ref}
        className={`${isIntersecting ? "intersected" : ""} left order-md-first order-last`} 
        >
            <Image src={learningImage} alt='i image' fluid/>
        </Col>
      <Col md = {6}
       ref={ref}
        className={`${isIntersecting ? "intersected" : ""} right  order-md-last order-first ${Styles.about}`} 
        >
        <Title 
         title="About Us"
         head = "Learning with Love and Laughter"
         text = "Fifth saying upon divide divide rule for deep their female all hath brind Days and beast greater grasssigns abundantly have greater also days years under brought moveth"
         />
        <div className={`d-flex gap-2 align-items-baseline justify-content-center justify-content-md-start ${Styles.info}`}>
            <FontAwesomeIcon icon={faPenToSquare}/>
            <p>Him lights given i heaven second yielding seas gathered wear</p>
        </div>
        <div className={`d-flex gap-2 align-items-baseline  justify-content-center justify-content-md-start ${Styles.info}`}>
            <FontAwesomeIcon icon={faPenRuler}/>
            <p>Fly female them whales fly them day deep given night.</p>
        </div >
                <div className='d-flex justify-content-center justify-content-md-start mt-4'>
                    <PrimaryBtn text = {"Read More"} url = {"/about"} />
                </div>
      </Col>
      </Row>
    </Container>
  )
}

export default AboutUs
