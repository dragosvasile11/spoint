import React from 'react';
import ReactStreetview from "react-streetview";

const Map = () => {
    const googleMapsApiKey = '';

    const streetViewPanoramaOptions = {
        position: {lat: 44.439004, lng: 26.112520},
        pov: {heading: 100, pitch: 0},
        zoom: 1
    };
    return (
        <div style={{ padding: '5% 25% 5%' }}>
            <div style={{
                width: '880px',
                height: '495px',
                backgroundColor: '#eeeeee'
            }}>
                <ReactStreetview
                    apiKey={googleMapsApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                />
            </div>
        </div>

    );
};

export default Map;
