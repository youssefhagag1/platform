import React from 'react';
import Styles from "./Footer.module.css";
import logo from "../../assets/images/logo2.webp";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart  } from '@fortawesome/free-regular-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';


function Footer() { // Changed to uppercase component name
    const location =  useLocation();
    if(location.pathname === "/register" || location.pathname === "/login") return;
  return (
    <footer className={Styles.footer}> {/* Added className for styling */}
      <Container>
        <Row className='justify-content-between g-4 pb-4'>
          <Col md={4}>
            <Image src={logo} alt='company logo'  fluid /> {/* Added fluid prop */}
            <div className='mt-4 col-md-9 '>
              <p >But when shot real her. Chamber her one visite removal six sending himself boys scot exquisite existend an</p>
              <p>But when shot real her hamber her</p>
            </div>
          </Col>
          <Col md={4}>
            <h2 className='mb-4'>Newsletter</h2>
            <p className='col-md-9'>Stay updated with our latest trends Seed heaven so said place winged over given forth fruit.</p>
            <ul className={`list-unstyled d-flex gap-4 ${Styles.socialList}`}> {/* Added className for styling */}
              <li>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a> {/* Fixed icon name */}
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a> {/* Fixed icon name */}
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h2 className='mb-4'>Contact us</h2>
            <div className={Styles.contactItem}> {/* Added className for styling */}
              <span>Address</span>
              <p className='w-75'>Hath of it fly signs bear be one blessed after</p>
            </div>
            <div className={Styles.contactItem}>
              <span>Phone </span>
              <p> +2 36 265 (8060)</p>
            </div>
            <div className={Styles.contactItem}>
              <span>Email</span>
              <p> info@colorlib.com</p>
            </div>
          </Col>
        </Row>
        <div className={`border-top p-4 text-center ${Styles.copyright}`}> {/* Added className for styling */}
          Copyright ©2025 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by <span className={Styles.name}>Hagag</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;