import React, {useContext} from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import {ThemeContext} from "./Contexts/ThemeContext";
import {MaterialUISwitch} from "./ThemeSwitchButton";

const Switch = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <Box style={{margin: "1%"}}>
            <FormControlLabel
                control={<MaterialUISwitch onChange={() => setTheme(theme === "light" ? "dark" : "light")}/>} checked={theme === "dark"}
                label={theme === "dark" ? "DARK MODE" : "LIGHT MODE"}
            />
        </Box>
    );
};

export default Switch;
