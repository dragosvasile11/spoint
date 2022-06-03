import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker, Polyline} from '@react-google-maps/api';
import { useLocation } from 'react-router-dom'
import {MDBBtn} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import haversine from 'haversine-distance'

const DistanceMap = () => {
    const location = useLocation()
    const { from } = location.state
    const [clicks, setClicks] = React.useState([]);

    const latLng1 = {lat: from.streetViewLat, lng: from.streetViewLng}
    const latLng2 = {lat: from.first.lat, lng: from.first.lng}
    return (
        <div >
            <div style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <LoadScript googleMapsApiKey={""}>
                    <GoogleMap
                        options={{disableDefaultUI: true}}
                        mapContainerStyle={containerStyle}
                        className={"map"}
                        zoom={2.4}
                        defaultOptions={{mapTypeControl: false}}
                        center={latLng1}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        {/*{clicks.map((latLng, i) => (<Marker key={i} position={latLng} />))}*/}
                        <Marker key={0} position={latLng1} />
                        <Marker key={1} position={latLng2} />
                    </GoogleMap>
                </LoadScript>
            </div>

        </div>
    )
}

export default DistanceMap;