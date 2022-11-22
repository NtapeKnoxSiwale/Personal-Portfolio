import React from "react";
import { About, Contact, Footer, Header, Work } from "./containers/";

import "./App.scss";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
