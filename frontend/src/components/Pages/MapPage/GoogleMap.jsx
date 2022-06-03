import React, {Component} from "react";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [
            ]
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(t, map, coord) {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        this.setState(() => {
            return {
                markers: [
                    {
                        title: "",
                        name: "",
                        position: { lat, lng }
                    }
                ]
            };
        });
    }

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    style={{ width: "100%", height: "100%"}}
                    className={"map"}
                    zoom={1.7}
                    disableDefaultUI={true}
                    zoomControl={true}
                    initialCenter={
                        {
                            lat: 0,
                            lng: 0
                        }
                    }
                    onClick={this.onClick}
                >
                    {this.state.markers.map((marker, index) => (
                        <Marker
                            key={index}
                            title={marker.title}
                            name={marker.name}
                            position={marker.position}
                        />
                    ))}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(GoogleMap);