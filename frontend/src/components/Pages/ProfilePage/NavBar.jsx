import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';



export default function NavBar( { navMenu, theme } ) {

    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' style={theme} bgColor={ theme.palette.mode === "dark" ? "dark" : "warning" }>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <h4 style={{color: "white"}}>SPOINT <div style={{ display: "inline", color: theme.palette.mode === "dark" ? "#FFA900" : "black"}}>|</div></h4>
                    </MDBNavbarBrand>
                    {navMenu}
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNav(!showNav)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNav} navbar id='navbarColor02'>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}
