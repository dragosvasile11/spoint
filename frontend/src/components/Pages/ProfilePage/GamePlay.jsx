import React from 'react';
import Card from "../../Assets/Card";
import NavBar from "./NavBar";

const componentsStyle = {
    backgroundColor: '#383333'
}

const GamePlay = () => {
    return (
        <div style={componentsStyle}>
            <NavBar />
            <Card />
        </div>
    );
};

export default GamePlay;
