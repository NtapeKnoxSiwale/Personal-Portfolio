import React from "react";
import { Contact, Header, Projects, Services } from "./containers/";

import "./App.scss";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Services />
      <Projects />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
