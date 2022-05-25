import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom"

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import LoginForm from "../src/components/LoginForm";

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
              </>
          } />
          <Route path="/login-form" element={
              <>
                  <Header/>
                  <LoginForm/>
              </>
          } />
      </Routes>
  </Router>
);

export default App;
