import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import {MDBBtn} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const DistanceMap = () => {
    const location = useLocation()
    const { from } = location.state
    const [clicks, setClicks] = React.useState([]);

    const latLng1 = {lat: from.streetViewLat, lng: from.streetViewLng}
    const latLng2 = {lat: from.first.lat, lng: from.first.lng}
    return (
        <>
        </>
    )
}

export default DistanceMap;