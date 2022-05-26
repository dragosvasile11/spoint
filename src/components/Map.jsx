import React, {useState}  from 'react';
import ReactStreetview from "react-streetview";
import {MDBBtn} from "mdb-react-ui-kit";
import Modal from "./Modal";


const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}

const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
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
        <>
            <div style={{
                width: '100vw',
                height: '100vh',
            }}>
                <ReactStreetview
                    apiKey={googleMapsApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                />
            </div>
            <div style={BUTTON_WRAPPER_STYLES}>
                <MDBBtn rounded color='warning' onClick={() => setIsOpen(true)}>Guess</MDBBtn>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}> modal </Modal>

            </div>


        </>

    )
};

export default Map;
