import React, {useState}  from 'react';
import ReactStreetview from "react-streetview";
import {MDBBtn} from "mdb-react-ui-kit";
import Modal from "./Modal";


const BUTTON_WRAPPER_STYLES = {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    marginTop: '-95vh',
    marginLeft: '90%'
}

const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
}

const StreetViewMap = () => {
    const googleMapsApiKey = '';
    const [isOpen, setIsOpen] = useState(false)

    const streetViewPanoramaOptions = {
        position: {lat: 44.439004, lng: 26.112520},
        pov: {heading: 100, pitch: 0},
        zoom: 1,
        zoomControl: true,
        addressControl: false,
        fullscreenControl: false
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
                <MDBBtn rounded color='warning' onClick={() => setIsOpen(true)}>Give it a Guess!</MDBBtn>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}> modal </Modal>
            </div>
        </>

    )
};

export default StreetViewMap;
