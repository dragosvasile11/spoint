import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Map from "./components/Map";

const App = () => (
  <Router>
      <Routes>
          <Route path="/" element={
              <>
                  <Header/>
                  <p>Checking</p>
                  <p>Checking</p>
                  <p>Checking</p>
                  <Map />
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
      </Routes>
  </Router>
);

export default App;
