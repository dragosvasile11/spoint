import React from 'react';
import background from "../images/background.jpg";
import logo from "../images/logo.png";
import { Link } from "react-router-dom"
import {MDBBtn} from "mdb-react-ui-kit";

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
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
                                    <Link className="nav-link" aria-current="page" to="http://localhost:3000"><img src={logo} alt="Logo" /></Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav flex-row">
                                <li className="nav-item">
                                    <Link className="nav-link pe-2" to="http://localhost:3000">
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
                        <div className="container d-flex align-items-center text-center h-100">
                            <div>
                                <h1 className="mb-5">SPOT THE POINT!</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae
                                    laboriosam numquam expedita ullam saepe ipsam, deserunt provident corporis,
                                    sit non accusamus maxime, magni nulla quasi iste ipsa architecto? Autem!
                                </p>
                                <Link to="http://localhost:3000/login-form">
                                    <MDBBtn rounded color='warning'>
                                        PLAY NOW FOR FREE
                                    </MDBBtn>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
