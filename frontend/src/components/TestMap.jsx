import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {MDBBtn} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const containerStyle = {
    width: '500px',
    height: '400px',
};

const center = {
    lat: 0,
    lng: 0
};


const GuessMap = ({coords}) => {
    const [clicks, setClicks] = React.useState([]);
    const [isClicked, setIsClicked] = useState(false)
    const streetViewLat = coords.lat;
    const streetViewLng = coords.lng;
    const first = clicks[0];

    const onClick = (e) => {
        let lat = e.latLng.lat();
        let lng = e.latLng.lng();
        setClicks([{lat, lng}]);
    };

    return (
        <>
            <LoadScript googleMapsApiKey={""}>
                <GoogleMap
                    options={{disableDefaultUI: true}}
                    mapContainerStyle={containerStyle}
                    className={"map"}
                    zoom={1}
                    defaultOptions={{mapTypeControl: true}}
                    center={center}
                    onClick={onClick}
                >
                    {clicks.map((latLng, i) => (<Marker key={i} position={latLng} />))}
                </GoogleMap>
            </LoadScript>
            <Link to="/distance" state={{ from: {streetViewLat, streetViewLng, first}}}>
                <MDBBtn rounded color='warning' onClick={() => setIsClicked(true)}>Click to send Marker!</MDBBtn>
            </Link>
        </>

    )
}

export default GuessMap;