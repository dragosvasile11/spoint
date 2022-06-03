import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker, Polyline} from '@react-google-maps/api';
import { useLocation } from 'react-router-dom'
import {MDBBtn} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import haversine from 'haversine-distance'

const containerStyle = {
    width: '60%',
    height: '80vh',
};

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
                        // Draw a line showing the straight distance between the markers
                        <Polyline
                            path={[latLng1, latLng2]}
                            geodesic={true}
                            options={{
                                strokeColor: "#ff2527",
                                strokeOpacity: 2,
                                strokeWeight: 5,
                                icons: [
                                    {
                                        icon: "lineSymbol",
                                        offset: "0",
                                        repeat: "20px"
                                    }
                                ]
                            }}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
            <div style={{backgroundColor: "blue",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <h1>DISTANCE: {Math.round(haversine(latLng1, latLng2) / 1000)} KM</h1>
            </div>

        </div>
    )
}

export default DistanceMap;