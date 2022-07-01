import React, {useState} from 'react';
import Card from "../../Assets/Card";
import NavBar from "./NavBar";
import Switch from "../../Buttons/SwitchTheme/Switch";
import LeagueDrawer from "../../Assets/LeagueDrawer";
import AccountMenu from "./AccountMenu";

const GamePlay = ({progress}) => {

    const[drawerOpen, setDrawerOpen] = useState(false)

    // const toggleDrawer = () => {
    //     setDrawerOpen(!drawerOpen)
    // }

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

        // setDrawerOpen({ ...drawerOpen, [anchor]: open });
    // };

    return (
        <div style={componentsStyle}>
            <NavBar navMenu={<AccountMenu/>}/>
            {/*<LeagueDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer}/>*/}
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
