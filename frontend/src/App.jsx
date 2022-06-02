import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import SignUpForm from "./components/SignUp/SignUpForm";
import SignInForm from "./components/SignInForm";
import StreetViewMap from "./components/StreetViewMap";
import GamePlay from "./components/GamePlay";

const App = () => (
  <Router>
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
  </Router>
);

export default App;
