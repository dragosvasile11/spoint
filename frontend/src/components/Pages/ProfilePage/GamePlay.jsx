import React from 'react';
import Card from "../../Assets/Card";
import NavBar from "./NavBar";

const GamePlay = ({progress}) => {

    return (
        <div style={componentsStyle}>
            <NavBar />
            <h2 style={textAlignment}><b><i>Start your <p style={{ color: "#FFA900", display: "inline"}}>SPoint</p> journey here !</i></b></h2>
            <Card progress={progress}/>
        </div>
    );
};

const componentsStyle = {
    backgroundImage: "url(/b.png)",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
}

const textAlignment = {
    textAlign: "center",
    padding: "0.5%"
}
export default GamePlay;
