import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark text-center text-white fixed-bottom" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} >
                <div className="container p-4 pb-0" >
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i className="fab fa-facebook-f"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i className="fab fa-twitter"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i className="fab fa-google"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i className="fab fa-instagram"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i className="fab fa-linkedin-in"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"
                        ><i className="fab fa-github"/></a>
                    </section>
                </div>
                <div className="text-center p-3" >
                    © 2022 Copyright:
                    <a className="text-white"> Spoint</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
