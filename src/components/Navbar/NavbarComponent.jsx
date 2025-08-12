import React, { useEffect, useRef, useState } from 'react';
import { Image, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/images/logo.png.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Styles from "./Navbar.module.css";
import { NavLink, useLocation } from 'react-router-dom'
import banner from "../../assets/images/banner_bg.webp"

function NavbarComponent() {
  const location = useLocation();
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleNavbarPosition = () => { 
    if (window.scrollY > 100) {
      if (!isScrolled) {
        setIsScrolled(true);
        setIsVisible(true);
      }
    } else {
      if (isScrolled) {
        setIsScrolled(false);
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarPosition);
    return () => {
      window.removeEventListener("scroll", handleNavbarPosition);
    };
  }, [isScrolled]);

  let isLoged = true;
  const navbarStyles = ({ isActive }) => ({
    color: isActive ? "#ee390f" : "#0c2e60",
    fontWeight: isActive ? "500" : "normal",
  });
const isTeacherRoute = location.pathname.startsWith('/teacher/');
  return (
    <div>
      {
        !isTeacherRoute &&
        <Image src={banner} className='position-absolute end-0' />
      }
      <Navbar 
        expand="lg" 
        className={`py-3  w-100 ${Styles.navbar} ${!isScrolled ? Styles.visible : Styles.hidden}`}
      >
        <Container>
          <Image src={logo} alt="logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4 fs-5">
              <NavLink to="/" style={navbarStyles} className={Styles.navLink}>
                Home
              </NavLink>
              <NavLink to="/courses" style={navbarStyles} className={Styles.navLink}>
                Courses
              </NavLink>
            </Nav>
            {isLoged && (
              <div>
                <FontAwesomeIcon icon={faUser} className={Styles.profileIcon} />
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Navbar 
        expand="lg" 
        ref={navRef} 
        className={`py-3 fixed-top w-100 ${Styles.navbar} ${Styles.fixedNavbar} ${isVisible ? Styles.visible : Styles.hidden}`}
      >
        <Container>
          <Image src={logo} alt="logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4 fs-5">
              <NavLink to="/" style={navbarStyles} className={Styles.navLink}>
                Home
              </NavLink>
              <NavLink to="/courses" style={navbarStyles} className={Styles.navLink}>
                Courses
              </NavLink>
            </Nav>
            {isLoged && (
              <div>
                <FontAwesomeIcon icon={faUser} className={Styles.profileIcon} />
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;