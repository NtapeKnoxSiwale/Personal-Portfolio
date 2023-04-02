import { motion } from "framer-motion";
import React from "react";
import "./Home.scss";
import Social from "./Social";
import Services from "../Services/Services";

const Home = () => {
  return (
    <section className="home section" id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <div className="home__data">
              <h1 className="home__title">
                Ntapechela <span>Knox</span> Siwale
              </h1>
              <h3 className="home__subtitle">
                Software Developer <span>|</span> UI/UX Designer <span>|</span>{" "}
                Data Scientist
              </h3>
              <p className="home__description">
                I'm an independent creative developer with a passion for
                building dynamic digital experiences. From custom web and mobile
                apps to data-driven analyses and beautiful user interfaces, I
                have the skills and expertise to bring your vision to life. With
                a focus on innovation, creativity, and user-centered design,
                I'll work closely with you to create solutions that meet your
                unique needs and exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <Services />
    </section>
  );
};

export default Home;
