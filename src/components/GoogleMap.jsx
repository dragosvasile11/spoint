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
}

export default GoogleApiWrapper({
    apiKey: ''
})(GoogleMap);