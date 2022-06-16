import React from 'react';
import Card from "../../Assets/Card";
import NavBar from "./NavBar";

const componentsStyle = {
    backgroundColor: '#383333'
}

const GamePlay = ({progress}) => {
    return (
        <div style={componentsStyle}>
            <NavBar />
            <Card progress={progress}/>
        </div>
    );
};

export default GamePlay;
