import React from 'react';
import {MDBBtn, MDBProgress, MDBProgressBar} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const cardsLayoutStyle = {
    padding: '0% 25% 0%',
    color: 'whitesmoke'
}

const cardStyle = {
    backgroundColor: '#2d2d2d'
}
const cardBodyStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const progressBarPadding = {
    padding: '0% 15% 0%'
}

const progressBarStyle = {
    borderRadius: '25px'
}

const cardFooterStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Card = ({progress}) => {
    return (
        <>
            <div id="cards-layout" className="row row-cols-1 row-cols-md-3 g-4" style={cardsLayoutStyle}>
                <div className="col">
                    <div className="card h-100" style={cardStyle} >
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top"
                             alt="Skyscrapers"/>
                        <div className="card-body" style={cardBodyStyle}>
                            <h5 className="card-title">Famous Places</h5>
                        </div>
                        <div style={progressBarPadding}>
                            <MDBProgress height='12' style={progressBarStyle}>
                                <MDBProgressBar width={progress * 20} valuemin={0} valuemax={100}>
                                    {progress * 20}%
                                </MDBProgressBar>
                            </MDBProgress>
                        </div>
                        <div style={cardFooterStyle}><p>750/1000</p></div>
                        <div className="card-footer" style={cardFooterStyle}>
                            <Link to="/guess">
                                <MDBBtn rounded color='warning'>PLAY</MDBBtn>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{ backgroundColor: '#2d2d2d'}} >
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top"
                             alt="Los Angeles Skyscrapers"/>
                        <div className="card-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h5 className="card-title">Romania</h5>
                        </div>
                        <div style={{ padding: '0% 15% 0%'}}>
                            <MDBProgress height='12' style={{ borderRadius: '25px' }}>
                                <MDBProgressBar width='25' valuemin={0} valuemax={100}>
                                    25%
                                </MDBProgressBar>
                            </MDBProgress>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p>250/1000</p></div>

                        <div className="card-footer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Link to="/guess">
                                <MDBBtn rounded color='warning'>PLAY</MDBBtn>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{ backgroundColor: '#2d2d2d'}}>
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                             alt="Palm Springs Road"/>
                        <div className="card-body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h5 className="card-title">World</h5>
                        </div>
                        <div style={{ padding: '0% 15% 0%'}}>
                            <MDBProgress height='12' style={{ borderRadius: '25px' }}>
                                <MDBProgressBar width='50' valuemin={0} valuemax={100}>
                                    50%
                                </MDBProgressBar>
                            </MDBProgress>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p>500/1000</p></div>
                        <div className="card-footer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Link to="/guess">
                                <MDBBtn rounded color='warning'>PLAY</MDBBtn>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
