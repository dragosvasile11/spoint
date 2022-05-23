import React from 'react';

const Card = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{ padding: '5% 25% 5%', color: 'whitesmoke'}}>
                <div className="col" >
                    <div className="card h-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2d'}} >
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top"
                             alt="Skyscrapers"/>
                        <div className="card-body" >
                            <h5 className="card-title">Famous Places</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top"
                             alt="Los Angeles Skyscrapers"/>
                        <div className="card-body" >
                            <h5 className="card-title">Romania</h5>
                        </div>
                        <div >

                        <div className="card-footer" >

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                             alt="Palm Springs Road"/>
                        <div className="card-body">
                            <h5 className="card-title">World</h5>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
