/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {Navbar, Container, Nav, NavLink} from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import {animateBar} from '../helpers/handleResponsiveMenu';


export const NavBar = ({handleContactScroll, handleContactScrollResponsive}) => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container  className={"header__nav"}>
              <Navbar.Brand href="/">
                <h1>REACT JS</h1>
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/eduardogonzalezjasso/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/edwardohazo" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/eduardo.hazo/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                  </div>
                    <button onClick={()=> handleContactScroll()} className="vvd"><span>Let’s Connect</span></button>
                </span>
              </Navbar.Collapse>
            </Container>
            <Container className={"header__nav-ulResponsive"}>
              <NavLink className='header__nav-ul-li-a to-home'
              onClick={(e)=> 
                {
                  handleContactScrollResponsive(
                  e,
                  document.querySelector('.header__nav-ulResponsive'),
                  document.querySelector('.bar-menu__line1'),
                  document.querySelector('.bar-menu__line2'),
                  document.querySelector('.bar-menu__line3')
                  ) 
                }}
              >Home</NavLink>
              <NavLink className='header__nav-ul-li-a to-skills'
              onClick={(e)=> 
                {
                  handleContactScrollResponsive(
                  e,
                  document.querySelector('.header__nav-ulResponsive'),
                  document.querySelector('.bar-menu__line1'),
                  document.querySelector('.bar-menu__line2'),
                  document.querySelector('.bar-menu__line3')
                  ) 
                }}
              >Skills</NavLink>
              <NavLink href={"https://www.linkedin.com/in/eduardogonzalezjasso/"} target="_blank" rel="noopener noreferrer" className='header__nav-ul-li-a'><img src={navIcon1} alt="" /></NavLink>
              <NavLink href={"https://github.com/edwardohazo/"} target="_blank" rel="noopener noreferrer" className='header__nav-ul-li-a'><img src={navIcon2} alt="" /></NavLink>
              <NavLink href={"https://www.instagram.com/eduardo.hazo/"} target="_blank" rel="noopener noreferrer" className='header__nav-ul-li-a'><img src={navIcon3} alt="" /></NavLink>
              <NavLink className='header__nav-ul-li-a to-form' 
              onClick={(e)=> 
                {
                  handleContactScrollResponsive(
                  e,
                  document.querySelector('.header__nav-ulResponsive'),
                  document.querySelector('.bar-menu__line1'),
                  document.querySelector('.bar-menu__line2'),
                  document.querySelector('.bar-menu__line3')
                  ) 
                }}
              >Let`s Connect</NavLink>
            </Container>
            <div className="bars-menu" onClick={(e)=> 
              animateBar(
                e,
                document.querySelector('.header__nav-ulResponsive'),
                document.querySelector('.bar-menu__line1'),
                document.querySelector('.bar-menu__line2'),
                document.querySelector('.bar-menu__line3'),
                )
              }>
              <div className="center-bars">
                  <li className="header__nav-ul-div-li bar-menu__line1">
                  </li>
                  <li className="header__nav-ul-div-li bar-menu__line2">
                  </li>
                  <li className="header__nav-ul-div-li bar-menu__line3">
                  </li>
              </div>
            </div>
          </Navbar>
    )
  }