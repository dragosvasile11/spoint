import React, {useState, useEffect} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Header from "./components/Pages/LandingPage/Header";
import Footer from "./components/Pages/LandingPage/Footer";
import SignUpForm from "./components/Pages/SignUp/SignUpForm";
import SignInForm from "./components/Pages/SignIn/SignInForm";
import StreetViewMap from "./components/Pages/Maps/PlayPageMaps/StreetViewMap";
import GamePlay from "./components/Pages/ProfilePage/GamePlay";
import {
    backgroundColorStyle,
    darkTheme,
    GlobalStyles,
    lightTheme,
    ThemeContext
} from "./components/Contexts/ThemeContext";
import {ThemeProvider} from "styled-components";
import * as client from "./components/Contexts/Cookies"
import Button from "@mui/material/Button";
import DistanceMap from "./components/Pages/Maps/ResultsPageMap/DistanceMap";
import Content from "./components/Pages/LandingPage/Content";
import Accordion from "./components/Assets/Accordion";
import {Fade} from "react-reveal";
import AppStoresBadges from "./components/Assets/AppStoresBadges";


const App = () => {

    const [theme, setTheme] = useState(client.getCookie("theme") ? client.getCookie("theme") : "light")

    useEffect(() => {
        client.setCookie("theme", theme)
    }, [theme, setTheme])

    //TODO getFromDatabase

    const content = {
        titles:
            ["What is SPoint ?",
            "I have trouble accessing my account.",
            "Is SPoint available on App Store and Google Play ?",
            "What languages is SPoint available in ?",
            "Is SPoint free to play ?"],

         descriptions :
             ["SPoint is a geography game, in which you are dropped somewhere in the world in a street view panorama and your mission is to find clues and guess your location on the world map.",
                "If you've forgot your password, click on \"Already have an account?\" in the upper right corner, and then on \"Forgot your password?\". Enter the email address which is connected to your account, and we'll send you an email with a link to reset your password! Don't forget to check you spam email if it may have gotten caught there. If you are not receiving an email you might have enabled Google/Facebook login. If so, send an email to info@spoint.com and we will help you further. If you've forgotten which email you signed up with, no worries! Contact us at info@spoint.com and we'll help you out!",
                "Yes, SPoint is available as apps on both iOS and Android, and your account gives you access to play in our apps as well.",
                "SPoint is available in 10 different languages. You can select language in the website footer under \"Change language\".",
                "Yes, we offer a free account where you can play SPoint for free and enjoy most of our different game modes. For unlimited play and to unlock additional features, we offer a pro account starting at a monthly cost of $1.99 and with a free 7 day trial."
    ]}

    return (

  <>
      <ThemeContext.Provider value={ { theme, setTheme } }>
          <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
              <GlobalStyles/>
              <Routes>
                  <Route path="/" element={
                      <>
                          <Header/>
                          <Link to={"/gameplay"}><Button type={"button"}>USERPAGE</Button></Link>
                          <Content/>
                          <br/>
                          <Accordion content={content}/>
                          <br/>
                          <AppStoresBadges/>
                          <br/>
                          <Footer />
                          <h1 id={"bottom"}></h1>
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
