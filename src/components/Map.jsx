import React, {useState}  from 'react';
import ReactStreetview from "react-streetview";
import {MDBBtn} from "mdb-react-ui-kit";
import Modal from "./Modal";


const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}


const Map = () => {
    const googleMapsApiKey = '';
    const [isOpen, setIsOpen] = useState(false)

    const streetViewPanoramaOptions = {
        position: {lat: 44.439004, lng: 26.112520},
        pov: {heading: 100, pitch: 0},
        zoom: 1
    };
    return (
        <div style={{
            width: '800px',
            height: '400px',
            backgroundColor: '#eeeeee'
        }}>
            <ReactStreetview
                apiKey={googleMapsApiKey}
                streetViewPanoramaOptions={streetViewPanoramaOptions}
            />
        </div>
    )
};

export default Map;
