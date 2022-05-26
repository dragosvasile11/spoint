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
}

export default GoogleApiWrapper({
    apiKey: ''
})(GoogleMap);