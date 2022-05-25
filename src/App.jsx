import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Map from "./components/Map";
import CornerMap from "./components/CornerMap";

const App = () => (
  <Router>
      <Routes>
          <Route path="/" element={
              <>
                  <Header/>

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
          <Route path="/guess" element = {
              <>
                  <div><Map /></div>
                  <div><CornerMap /></div>
              </>

          } />
      </Routes>
  </Router>
);

export default App;
