import React, {useContext} from 'react';
import background from "../../../images/background.jpg";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom"
import {MDBBtn} from "mdb-react-ui-kit";
import {ThemeContext} from "../../Contexts/ThemeContext";
import Switch from "../../Buttons/SwitchTheme/Switch";
import {Fade} from "react-reveal";
import CoverFlow3D from "../../Assets/coverFlow3D/CoverFlow3D";
import ScrollUpDownButton from "../../Buttons/ScrollUpDownButton";


const Header = () => {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
                    <Switch/>
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler ps-0"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarExample01"
                            aria-controls="navbarExample01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon d-flex justify-content-start align-items-center">
                              <i className="fas fa-bars"/>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" aria-current="page" style={{ width: "110px", height: "110px"}} to="/"><img src={logo} alt="Logo" style={{maxWidth: "100%", height: "auto"}}/></Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav flex-row" style={{ marginTop: "1%"}}>
                                <li className="nav-item">
                                    <Link className="nav-link pe-2" to="/signIn-form">
                                        <MDBBtn rounded color='warning'>
                                            ALREADY HAVE AN ACCOUNT?
                                        </MDBBtn>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div
                    id="intro"
                    className="bg-image"
                    style={{ backgroundImage: `url(${background})`, height: '100vh' }}
                >
                    <div className="mask text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                        <div className="container d-flex align-items-center text-center h-75" style={{ justifyContent: "center" }}>
                            <div>
                                <Fade right>
                                    <h1 className="mb-5" ><i>DISCOVER THE WORLD!</i></h1>
                                </Fade>
                                <Fade left>
                                    <i>
                                        <h4>
                                            Find clues and guess where you are in the world.
                                            <p>Join million other players worldwide.</p>
                                        </h4>
                                    </i>
                                </Fade>
                                <Fade bottom>
                                    <Link to="/signUp-form">
                                        <MDBBtn rounded color='warning' size={"lg"} style={{ marginTop: "1%" }}>
                                            <i>PLAY NOW FOR FREE</i>
                                        </MDBBtn>
                                    </Link>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <Fade bottom>
                        <div style={coverFlowPosition}>
                            <CoverFlow3D/>
                        </div>
                    </Fade>
                    <ScrollUpDownButton/>
                </div>
            </header>
        </>
    );
};

const coverFlowPosition = {
    position: "relative",
    top: "65%"
}

export default Header;
