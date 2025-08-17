import React from 'react'
import Styles from './Contact.module.css'
import { Container  , Row , Col } from 'react-bootstrap'
import PrimaryBtn from '../CustomBtns/PrimaryBtn/PrimaryBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMessage } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function Contact() {
  return (
    <div className={`position-relative z-3 my-5 ${Styles.contact}`}>
      <Container >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27285.739831178387!2d29.992259200000003!3d31.256243449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5daf7e9a729d9%3A0xc9ad8f098e20fb47!2sMontaza%201%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1755448969891!5m2!1sen!2seg"
          width="100%"
          height="500"
          style={{ border: 0 , marginBottom : '60px'}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h2 className='mb-4'>Get in Touch</h2>
        <Row className="g-5">
            <Col lg={9}>
            <form action="">
                <textarea name='message' placeholder='Enter Message' className='w-100 p-3 rounded' rows={6}></textarea>
                <div className='d-flex gap-3 flex-wrap flex-md-nowrap mt-4'>
                    <input type="text" name='text' placeholder='Enter your name' className=' d-block w-100 p-3 rounded'/>
                    <input type="email" name='email' placeholder='Enter email address' className='d-block w-100 p-3 rounded'/>
                </div>
                <input type="text" name="subject" placeholder='Enter Subject' className='w-100 mt-4 p-3 rounded' />
                <div className='mt-4'>
                    <PrimaryBtn text="Send Message"/>
                </div>
            </form>
            </Col>
            <Col lg={3} className={Styles.info}>
                <div className='d-flex gap-3 align-items-start mb-4'>
                    <FontAwesomeIcon icon={faHome} size='2x'/>
                    <div>
                        <h5>Alex, Miami.</h5>
                        <p>Rosemead, CA 91770</p>
                    </div>
                </div>
                <div className='d-flex gap-3 align-items-start mb-4'>
                    <FontAwesomeIcon icon={faPhone} size='2x'/>
                    <div>
                        <h5>00 (440) 9865 562</h5>
                        <p>Mon to Fri 9am to 6pm</p>
                    </div>
                </div>
                <div className='d-flex gap-3 align-items-start'>
                    <FontAwesomeIcon icon={faMessage} size='2x'/>
                    <div>
                        <h5>support@hagag.com</h5>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact

