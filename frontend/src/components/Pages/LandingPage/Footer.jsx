import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';
import ScrollUpDownButton from "../../Buttons/ScrollUpDownButton";
import Link from "@mui/material/Link";

const footerStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: '15vh',
    display: "inline-block",
    width: "100%"
}

export default function App() {
    return (
        <MDBFooter className='bg-dark text-center text-white' style={footerStyles}>
            <MDBContainer id="footer-container" className='p-4 pb-0'>
                <section className='mb-4'>
                    <a className='btn btn-outline-light btn-floating m-1' href='src/components/Pages/LandingPage/Footer#' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='src/components/Pages/LandingPage/Footer#' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='src/components/Pages/LandingPage/Footer#' role='button'>
                        <MDBIcon fab icon='google' />
                    </a>
                    <a className='btn btn-outline-light btn-floating m-1' href='src/components/Pages/LandingPage/Footer#' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='src/components/Pages/LandingPage/Footer#' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-dragosvasile11' role='button'>
                        <MDBIcon fab icon='github' />
                    </a>
                    <div className='text-center p-3'>
                        © {new Date().getFullYear()} Copyright:
                        <Link className="text-warning" href="/src/components/Pages/About">
                            Spoint
                        </Link>
                    </div>
                </section>
            </MDBContainer>
        </MDBFooter>
    );
}
