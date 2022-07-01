import React, {useContext} from 'react';
import UsersTable from "./components/UsersTable";
import NavBar from "../ProfilePage/NavBar";
import AdminMenu from "./components/AdminMenu"
import Switch from "../../Buttons/SwitchTheme/Switch";
import SpointCopyright from "../../Assets/SpointCopyright";
import {ThemeContext} from "../../Contexts/ThemeContext";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";

const Dashboard = () => {

    const { theme } = useContext(ThemeContext)

    const muiTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    return (
        <div style={{height: "100vh"}}>
            <ThemeProvider theme={muiTheme}>
                <NavBar navMenu={<AdminMenu />} theme={muiTheme}/>
                <div style={tablePosition}>
                    <UsersTable theme={muiTheme}/>
                </div>
                <Switch/>
            </ThemeProvider>
        </div>
    )
}

const tablePosition = {
    width: "70%",
    position: "relative",
    margin: "auto",
    top: "10vh",
}

export default Dashboard;
