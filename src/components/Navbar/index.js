import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    ExternalLink 
} from './NavbarElements';

import Resume from '../../documents/AnastasiiaPirusResume.pdf'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#F4C095'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="hero" onClick={toggleHome}>
                        A.Pirus
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth='true' duration={500} spy={true} exact = "true" offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects" smooth='true' duration={500} spy={true} exact = "true" offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="tools" smooth='true' duration={500} spy={true} exact = "true" offset={-80}>Tools</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contacts" smooth='true' duration={500} spy={true} exact = "true" offset={-80}>Contact Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <ExternalLink href="https://medium.com/@a.pirus" target="_blank" rel="noopener noreferrer">Blogs</ExternalLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={Resume} target="_blank" download exact = "true">Download CV</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar