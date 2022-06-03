import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {MDBBtn} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

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
        </>

    )
}

export default GuessMap;