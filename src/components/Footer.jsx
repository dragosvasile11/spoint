import Link from "@mui/material/Link";
import ScrollUpDownButton from "./ScrollUpDownButton";


const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark text-center text-white fixed-bottom" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', height: '13vh'}} >
                <div id="footer-container" className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button"
                        ><i className="fab fa-facebook-f"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button"
                        ><i className="fab fa-twitter"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.ro/" role="button"
                        ><i className="fab fa-google"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button"
                        ><i className="fab fa-instagram"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/" role="button"
                        ><i className="fab fa-linkedin-in"/></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-dragosvasile11" role="button"
                        ><i className="fab fa-github"/></a>
                        <ScrollUpDownButton/>
                        <div className="text-center p-3">
                            © 2022 Copyright:
                            <Link className="text-warning" href="/about"> Spoint</Link>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    );
};

export default Footer;
