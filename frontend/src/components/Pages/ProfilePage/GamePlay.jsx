import React from 'react';
import Card from "../../Assets/Card";
import NavBar from "./NavBar";
import Switch from "../../Buttons/SwitchTheme/Switch";

const GamePlay = ({progress}) => {

    return (
        <div style={componentsStyle}>
            <NavBar />
            <h2 style={textAlignment}><b><i>Start your <p style={{ color: "#FFA900", display: "inline"}}>SPoint</p> journey here !</i></b></h2>
            <Card progress={progress}/>
            <Switch/>
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
    padding: "3%"
}
export default GamePlay;
