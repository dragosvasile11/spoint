import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'


const DistanceMap = () => {
    const location = useLocation()
    const { from } = location.state
    const [clicks, setClicks] = React.useState([]);

    const latLng1 = {lat: from.streetViewLat, lng: from.streetViewLng}
    return (
        <>
        </>
    )
}

export default DistanceMap;