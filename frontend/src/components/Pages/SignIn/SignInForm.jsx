import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {ThemeContext} from "../../Contexts/ThemeContext";
import Switch from "../../Buttons/SwitchTheme/Switch";
import {getCookie, getCookieObject, setCookie} from "../../Contexts/Cookies";
import {useNavigate} from "react-router"
import AlertPopUp from "../../Assets/AlertPopUp";
import Slide from "@mui/material/Slide";
import {apiPost} from "../../../dataHandler";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/src/components/Pages/About">
                Spoint
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function SignInSide() {

    const handleAlertClose = () => {
        setAlertProps({ ...alertProps, openAlert: false });
    };

    const [hasErrors, setHasErrors] = useState({
        username: false,
        password: false})
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [alertProps, setAlertProps] = useState({
        openAlert: false,
        handleAlertClose,
        Transition: Slide,
        message: "Email or password incorrect",
        duration: 2000,
        vertical: 'bottom',
        horizontal: 'right'
    });

    const navigate = useNavigate()

    const validate = () => {
        let temp = {}

        temp.username = !(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(username);
        temp.password = password === "";
        setHasErrors(temp)

        return temp
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser({
            username,
            password
        });
    }

    function setUpLogin(token) {
        if(token) {
            token["username"] = username
            setCookie("loginToken", token)
            // props.setCurrentUser(username);
            navigate("../gameplay");
        }
        // else {
        //     setError("Failed to log in.")
        // }
    }

    async function loginUser(loginData) {
        return apiPost("http://localhost:8080/authenticate",loginData)
            .then(r => {
                setUpLogin(r)
            });

    }


    const { theme, setTheme } = useContext(ThemeContext)

    const muiTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    return (
        <ThemeProvider theme={muiTheme}>
            <AlertPopUp props={alertProps}/>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random/?nature)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Switch/>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Email Address"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                color="warning"
                                onChange={(event) => {
                                    setUsername(event.target.value)
                                    let temp = hasErrors
                                    temp.username = (event.target.value === "")
                                    setHasErrors(temp)
                                }}
                                error={hasErrors.username}
                                helperText={hasErrors.username ? "Field is required" : ""}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                color="warning"
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                    let temp = hasErrors
                                    temp.password = (event.target.value === "")
                                    setHasErrors(temp)
                                }}
                                error={hasErrors.password}
                                helperText={hasErrors.password ? "Field is required" : ""}
                            />
                            <FormControlLabel
                                control={<Checkbox value={true} color="warning" />}
                                label="Remember me" name="rememberMe"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color="warning"
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/src/components/Pages" variant="body2" color="#ED6C02">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signUp-form" variant="body2" color="#ED6C02">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
