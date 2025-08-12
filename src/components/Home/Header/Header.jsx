import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Styles from "./Header.module.css"
import headerImage from "../../../assets/images/headerStudent.webp"
import PrimaryBtn from "../../CustomBtns/PrimaryBtn/PrimaryBtn"
import SecondaryBtn from '../../CustomBtns/SecondaryBtn/SecondaryBtn'
function Header() {
  return (
    <header >
      <Container>
        <Row className='align-items-center gy-3 text-center text-lg-start'>
            <Col xs={12} lg={6} className={`order-last order-lg-first ${Styles.info}`}>
                <p className='text-uppercase fw-bold mb-0 '>Every child yearns to learn</p>
                <p className='display-2 fw-bold'>
                    Making Your Childs World Better
                </p>
                <p>
                    Replenish seasons may male hath fruit beast were seas
                     saw you arrie said man beast whales his void unto last session for bite.
                     Set have great you'll male grass yielding yielding man
                </p>
                <div className='d-flex justify-content-center justify-content-lg-start gap-4'>
                  <PrimaryBtn text = {"courses"} url = {""}/>
                  <SecondaryBtn text = {"courses"} url = {""}/>
                </div>
            </Col>
            <Col xs={12} lg={6}>
                <Image src={headerImage} className={Styles.student} fluid/>
            </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
