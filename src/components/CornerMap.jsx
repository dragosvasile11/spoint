import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class CornerMap extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={1.8}
                style={mapStyles}
                disableDefaultUI={true}
                initialCenter={
                    {
                        lat: -1.2884,
                        lng: 36.8233
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(CornerMap);