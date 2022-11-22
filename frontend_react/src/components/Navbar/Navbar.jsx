import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a className="nav__logo" href="index.html">
          KnoxThe<span>Developer</span>
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div animate transition={{ duration: 300, ease: "easeOut" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
