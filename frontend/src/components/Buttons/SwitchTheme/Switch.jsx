import React, {useContext} from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import {ThemeContext} from "../../Contexts/ThemeContext";
import {MaterialUISwitch} from "./ThemeSwitchButton";

const Switch = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <Box style={ boxStyles }>
            <FormControlLabel
                control={<MaterialUISwitch onChange={() => setTheme(theme === "light" ? "dark" : "light")}/>} checked={theme === "dark"}
                label=""
            />
        </Box>
    );
};

const boxStyles = {
    position: "fixed",
    top: "0",
    right: "0",
    margin: "1%" }

export default Switch;
