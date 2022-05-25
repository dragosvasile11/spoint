import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import LoginForm from "../src/components/LoginForm";
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
          <Route path="/login-form" element={
              <>
                  <LoginForm/>
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
