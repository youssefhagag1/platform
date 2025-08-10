import React, { useEffect, useRef } from 'react';
import { Image, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/images/logo.png.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Styles from "./Navbar.module.css";
import {NavLink } from 'react-router-dom'

function NavbarComponent() {
  const navRef = useRef(null);

  const handleNavbarPosition = () => {
    if (window.scrollY > 100) {
      navRef.current.classList.add(Styles.navbarScrolled);
    } else {
      navRef.current.classList.remove(Styles.navbarScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarPosition);
    return () => {
      window.removeEventListener("scroll", handleNavbarPosition);
    };
  }, []);

  let isLoged = true;
const navbarStyles = ({ isActive }) => ({
  color: isActive ? "#ee390f" : "#0c2e60",
  fontWeight: isActive ? "500" : "normal",
});


  return (
    <Navbar expand="lg" ref={navRef} className={`py-3 z-3  w-100 ${Styles.navbar}`}>
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
  );
}

export default NavbarComponent;
