import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.scss";

const links = ["home", "projects", "contact"];
const mobileLinks = [...links];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);

  const renderLinks = (isMobile = false) =>
    (isMobile ? mobileLinks : links).map((item) => (
      <li key={`link-${item}`}>
        <a href={`/${item}`} onClick={() => isMobile && handleToggle()}>
          {item}
        </a>
      </li>
    ));

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a className="nav__logo" href="/home">
          knox.<span>dev</span>
        </a>
      </div>
      <ul className="app__navbar-links">{renderLinks()}</ul>
      <div className="app__navbar-menu">
        <HiMenu onClick={handleToggle} />
        {toggle && (
          <motion.div transition={{ duration: 0.3, ease: "easeOut" }}>
            <HiX onClick={handleToggle} />
            <ul>{renderLinks(true)}</ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
