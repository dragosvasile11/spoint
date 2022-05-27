import React, {useState}  from 'react';
import ReactStreetview from "react-streetview";
import {MDBBtn} from "mdb-react-ui-kit";
import Modal from "./Modal";
import SunglassesButton from "./SunglassesButton";


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
    const [sunGlassesOn, setSunGlassesOn] = useState(false)

    const sunglassesOnClick = () => {
        setSunGlassesOn(!sunGlassesOn)
    }

    const streetViewPanoramaOptions = {
        position: {lat: 44.439004, lng: 26.112520},
        pov: {heading: 100, pitch: 0},
        zoom: 1,
        zoomControl: true,
        addressControl: false,
        fullscreenControl: false,
    };
    return (
        <>
            <div style={{
                width: '100vw',
                height: '100vh',
                filter: 'invert(1)' + (sunGlassesOn ? "brightness(0.7)" : ""),
            }}>
                <ReactStreetview
                    apiKey={googleMapsApiKey}
                    streetViewPanoramaOptions={streetViewPanoramaOptions}
                />
            </div>
            <div style={BUTTON_WRAPPER_STYLES} className="hover-button">
                <MDBBtn rounded color='warning' onClick={() => setIsOpen(true)}>Give it a Guess!</MDBBtn>
            </div>
            <div>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}> modal </Modal>
            </div>
            <SunglassesButton onClick={sunglassesOnClick}/>
        </>

    )
};

export default StreetViewMap;
