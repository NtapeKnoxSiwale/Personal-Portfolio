import { motion } from "framer-motion";
import React from "react";
import Data from "./Data";
import "./Header.scss";
import Social from "./Social";

const Header = () => {
  return (
    <section className="home section" id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
