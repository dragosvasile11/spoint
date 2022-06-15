import React, {useState, useEffect} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Header from "./components/Pages/LandingPage/Header";
import Footer from "./components/Pages/LandingPage/Footer";
import Card from "./components/Assets/Card";
import SignUpForm from "./components/Pages/SignUp/SignUpForm";
import SignInForm from "./components/Pages/SignIn/SignInForm";
import StreetViewMap from "./components/Pages/Maps/PlayPageMaps/StreetViewMap";
import GamePlay from "./components/Pages/ProfilePage/GamePlay";
import {darkTheme, GlobalStyles, lightTheme, ThemeContext} from "./components/Contexts/ThemeContext";
import {ThemeProvider} from "styled-components";
import * as client from "./components/Contexts/Cookies"
import Button from "@mui/material/Button";
import DistanceMap from "./components/Pages/Maps/ResultsPageMap/DistanceMap";


const App = () => {

    const [theme, setTheme] = useState(client.getCookie("theme") ? client.getCookie("theme") : "light")

    useEffect(() => {
        client.setCookie("theme", theme)
    }, [theme, setTheme])

    const progressURL = 'http://localhost:8080/api/progress/2';
    const [progress, setProgress] = useState(null);

    useEffect( () => {
        async function fetchData1() {
            await fetch(progressURL)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setProgress(data);
                })
        }
        fetchData1();
    }, [progressURL])


    const locationURL = `http://localhost:8080/api/locations/${progress + 1}`;
    const [location, setLocation] = useState(null);

    useEffect( () => {
        async function fetchData() {
            await fetch(locationURL)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setLocation(data);
                })
        }
        fetchData();
    }, [locationURL])

    return (

  <>
      <ThemeContext.Provider value={ { theme, setTheme } }>
          <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
              <GlobalStyles/>
              <Routes>
                  <Route path="/" element={
                      <>
                          <Header/>

                          <div><Link to={"/gameplay"}><Button type={"button"}>USERPAGE</Button></Link></div>
                          {/*<Card />*/}
                          <h1>adsdas</h1>
                          <h1>adsdas</h1>
                          <h1>adsdas</h1>
                          <h1>adsdas</h1>
                          <Footer />
                          <a id="bottom">SOME TEXT HERE</a>
                      </>
                  } />
                  <Route path="/signUp-form" element={
                      <>
                          <SignUpForm/>
                      </>
                  } />
                  <Route path="/signIn-form" element={
                      <>
                          <SignInForm/>
                      </>
                  } />
                  <Route path="/about" element={
                      <>
                          <h1>ABOUT PAGE</h1>
                      </>
                  } />
                  <Route path="/guess" element = {
                          <StreetViewMap location={location}/>
                  } />
                  <Route path="/gameplay" element = {
                      <>
                      <GamePlay progress={progress}/>
                      </>
                  } />
                  <Route path="/distance" element={
                      <>
                          <DistanceMap />
                      </>

                  }/>
              </Routes>
          </ThemeProvider>
      </ThemeContext.Provider>
  </>
)};

export default App;
