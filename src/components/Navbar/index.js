import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav,NavLogo,NavbarContainer,MobileIcon,NavLinks,NavItem,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        SNOUSSI Consulting.
                    </NavLogo>
                    <MobileIcon><FaBars/></MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='home'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Discover</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
                <NavBtn>
                        <NavBtnLink to='signin'>
                            Sign in
                        </NavBtnLink>
                </NavBtn>
            </Nav>
            
        </div>
    )
}

export default Navbar;
