import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import Header from "./components/Pages/LandingPage/Header";
import Footer from "./components/Pages/LandingPage/Footer";
import Card from "./components/Assets/Card";
import SignUpForm from "./components/Pages/SignUp/SignUpForm";
import SignInForm from "./components/Pages/SignIn/SignInForm";
import StreetViewMap from "./components/Pages/MapPage/StreetViewMap";
import GamePlay from "./components/Pages/ProfilePage/GamePlay";
import {darkTheme, GlobalStyles, lightTheme, ThemeContext} from "./components/Contexts/ThemeContext";
import React, {useEffect, useState} from "react";
import {ThemeProvider} from "styled-components";
import * as client from "./components/Contexts/Cookies"
import Button from "@mui/material/Button";

const App = () => {

    const [theme, setTheme] = useState(client.getCookie("theme") ? client.getCookie("theme") : "light")

    useEffect(() => {
        client.setCookie("theme", theme)
    }, [theme, setTheme])

    return (

  <Router>
      <ThemeContext.Provider value={ { theme, setTheme } }>
          <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
              <GlobalStyles/>
              <Routes>
                  <Route path="/" element={
                      <>
                          <Header/>
                          <p>Checking</p>
                          <p>Checking</p>
                          <Link to={"/gameplay"}><Button type={"button"}>USERPAGE</Button></Link>
                          <p>Checking</p>
                          <Card/>
                          <div>
                            <p>Checking</p>
                              <p>Checking</p>
                              <p>Checking</p>
                              <p>Checking</p>
                              <p>Checking</p>
                              <p>Checking</p>
                              <p>Checking</p>
                          </div>
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
                          <StreetViewMap />
                  } />
                  <Route path="/gameplay" element = {
                      <>
                      <GamePlay />
                      </>
                  } />
              </Routes>
          </ThemeProvider>
      </ThemeContext.Provider>
  </Router>
)};

export default App;
