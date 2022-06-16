import React, {useState, useEffect} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Header from "./components/Pages/LandingPage/Header";
import Footer from "./components/Pages/LandingPage/Footer";
import SignUpForm from "./components/Pages/SignUp/SignUpForm";
import SignInForm from "./components/Pages/SignIn/SignInForm";
import StreetViewMap from "./components/Pages/Maps/PlayPageMaps/StreetViewMap";
import GamePlay from "./components/Pages/ProfilePage/GamePlay";
import {darkTheme, GlobalStyles, lightTheme, ThemeContext} from "./components/Contexts/ThemeContext";
import {ThemeProvider} from "styled-components";
import * as client from "./components/Contexts/Cookies"
import Button from "@mui/material/Button";
import DistanceMap from "./components/Pages/Maps/ResultsPageMap/DistanceMap";
import { progressAtom } from "./components/Pages/Maps/ResultsPageMap/DistanceMap";
import {useAtom} from "jotai";

let count = 0;
const App = () => {
    const [progress1, setProgress1] = useAtom(progressAtom);
    const [theme, setTheme] = useState(client.getCookie("theme") ? client.getCookie("theme") : "light")

    useEffect(() => {
        client.setCookie("theme", theme)
    }, [theme, setTheme])

    const progressURL = 'http://localhost:8080/api/progress/1';
    const [progress, setProgress] = useState(null);

    useEffect( () => {
        async function fetchData() {
            await fetch(progressURL)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setProgress(data);
                    console.log(data + "in app")
                })
        }
        fetchData();
    }, [progressURL])

    if (progress) {
        if (count === 0) {
            setProgress1(progress.famousPlaceStage)
            count++;
        }

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
                                  <h1>{progress1} -check progress</h1>
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
                                  <StreetViewMap />
                          } />
                          <Route path="/gameplay" element = {
                              <>
                                  <GamePlay progress={progress1}/>
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
        )
    }
};

export default App;
