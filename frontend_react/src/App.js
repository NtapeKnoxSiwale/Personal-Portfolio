import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import { Footer, Navbar } from "./components";
import { Contact, Home, Projects } from "./Pages/";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
