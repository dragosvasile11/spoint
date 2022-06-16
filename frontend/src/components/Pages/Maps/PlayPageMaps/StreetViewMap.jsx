import React, {useState}  from 'react';
import ReactStreetview from "react-streetview";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import Modal from "../Modal";
import SunglassesButton from "../../../Buttons/SunglassesButton";
import {LoadScript} from "@react-google-maps/api";
import GuessMap from "../ResultsPageMap/TestMap";
import {progressAtom} from "../ResultsPageMap/DistanceMap";
import {useAtom} from "jotai";
import {Link} from "react-router-dom";


const buttonWrapperStyles = {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    marginTop: '-95vh',
    marginLeft: '90%'
}

const sunGlassesButtonStyles = {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    marginTop: '-10vh',
    marginLeft: '1%'
}

const mapStyles = {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
    marginTop: '-47vh',
    marginLeft: '68%'
}

const StreetViewMap = () => {
    const [progress1] = useAtom(progressAtom);
    const googleMapsApiKey = '';
    const [isOpen, setIsOpen] = useState(false)
    const [sunGlassesOn, setSunGlassesOn] = useState(false)

    const locationURL = `http://localhost:8080/api/locations/${progress1 + 1}`;
    const [location, setLocation] = useState(null);

    useEffect( () => {
        console.log("ads")
        async function fetchData() {
            await fetch(locationURL)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setLocation(data);
                    console.log(data);
                })
        }
        fetchData();
    }, [locationURL])

    const sunglassesOnClick = () => {
        setSunGlassesOn(!sunGlassesOn)
    }

    const sunGlassesSwitchStyles = {
        width: '100vw',
        height: '100vh',
        filter: 'invert(1)' + (sunGlassesOn ? "brightness(0.7)" : ""),
    }

    if(location) {
        const streetViewPanoramaOptions = {
            position: {lat: location.lat, lng: location.lng},
            pov: {heading: 100, pitch: 0},
            zoom: 1,
            zoomControl: true,
            addressControl: false,
            fullscreenControl: false,
        };

        return (
            <>
                <div style={sunGlassesSwitchStyles}>
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <ReactStreetview
                            apiKey={googleMapsApiKey}
                            streetViewPanoramaOptions={streetViewPanoramaOptions}
                        />
                    </LoadScript>

                </div>
                <div style={buttonWrapperStyles} className="hover-button">
                    <Link to="/gameplay">
                        <MDBBtn rounded color='warning' onClick={() => setIsOpen(true)} >Close game!</MDBBtn>
                    </Link>

                </div>
                <div style={mapStyles}>
                    <GuessMap coords={streetViewPanoramaOptions.position} />
                </div>
                <div>
                    <Modal open={isOpen} position={streetViewPanoramaOptions.position} onClose={() => setIsOpen(false)}> modal </Modal>
                </div>
                <SunglassesButton onClick={sunglassesOnClick}/>
                <div style={sunGlassesButtonStyles}>
                    <MDBIcon icon="map-marked-alt" size="3x" color="warning" />
                </div>
            </>
        )
    }

};

export default StreetViewMap;
