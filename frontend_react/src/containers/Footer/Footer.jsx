import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container__footer">
        <h1 className="footer__title">
          KnoxThe<span>Developer</span>
        </h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="footer__link">
              Works
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/ntapeknoxsiwale"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer">
            <i class="bx bx1- uil-github"></i>
          </a>

          <a
            href="https://www.instagram.com/knox.dev/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer">
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://twitter.com/Ntape_K_Siwale"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer">
            <i class="uil uil-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ntape-knox-siwale"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer">
            <i class="uil uil-linkedin"></i>
          </a>
        </div>
        <span className="footer__copyright">
          &#169; 2022 Knox The Developer. All rigths reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
