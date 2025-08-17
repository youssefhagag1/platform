import React from 'react'
import Styles from "./Advance.module.css"
import advanceImg from "../../../assets/images/advance_feature_img.webp"
import { Container, Image, Row , Col } from 'react-bootstrap'
import Title from "../../Title/Title"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faKaaba } from '@fortawesome/free-solid-svg-icons'
import { useManualIntersection } from "../../../Hooks/useManualIntersection";

function Advance() {
      const [ref, isIntersecting] = useManualIntersection(100);
    
  return (
    <div className={`overflow-hidden ${Styles.advance}`}>
        <Container >
      <Row className='align-items-center  g-5'>
        <Col 
        md={7}
         ref={ref}
        className={`${isIntersecting ? "intersected" : ""} left `} 
        >
            <Title 
                title="Advance feature"
                head="Our Advance Educator Learning System"
                text="Fifth saying upon divide divide rule for deep their female all hath brind mid Days and beast greater grass signs abundantly have greater also use over face earth days years under brought moveth she star"
            />
            <div className={`d-flex flex-wrap flex-md-nowrap  gap-3 text-center text-md-start  ${Styles.info}`}>
                <div>
                    <div className='mx-auto mx-md-0'>
                        <FontAwesomeIcon icon={faCopy}/>
                    </div>
                    <span className='d-block my-3'>Learn Anywhere</span>
                    <p>There earth face earth behold she star so made void two given and also our</p>
                </div>
                <div>
                    <div className='mx-auto mx-md-0'>
                        <FontAwesomeIcon icon={faKaaba}/>
                    </div>
                    <span className='d-block my-3'>Expert Teacher</span>
                    <p>There earth face earth behold she star so made void two given and also our</p>
                </div>
            </div>
        </Col>
        <Col md={5}
        
        ref={ref}
        className={`${isIntersecting ? "intersected" : ""} right `} >
            <Image src={advanceImg} fluid />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Advance
