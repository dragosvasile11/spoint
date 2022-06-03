import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import StreetViewMap from "./components/StreetViewMap";
import GamePlay from "./components/GamePlay";
import DistanceMap from "./components/DistanceMap";
import {atom} from "jotai";
import TestMap from "./components/TestMap";
import GoogleMapComponent from "./components/GoogleMapComponent";
import {MapContext} from "@react-google-maps/api";

const App = () => (
        <Routes>
            <Route path="/" element={
                <>
                    <Header/>
                    <p>Checking</p>
                    <p>Checking</p>
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
                    <Footer/>
                    <a id="bottom">SOME TEXT HERE</a>
                </>
            }/>
            <Route path="/signUp-form" element={
                <>
                    <SignUpForm/>
                </>
            }/>
            <Route path="/signIn-form" element={
                <>
                    <SignInForm/>
                </>
            }/>
            <Route path="/about" element={
                <>
                    <h1>ABOUT PAGE</h1>
                </>
            }/>
            <Route path="/guess" element={
                <StreetViewMap/>
            }/>
            <Route path="/gameplay" element={
                <>
                    <GamePlay/>
                </>
            }/>
            <Route path="/distance" element={
                <>
                    <DistanceMap />
                </>

            }/>
        </Routes>


    );


export default App;
