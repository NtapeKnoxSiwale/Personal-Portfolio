import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { AppWrap, MotionWrap } from "../../components/wrapper";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
  };
  return (
    <section className="contact section" id="contact">
      <h1 className="section__title">
        I occasionally take on freelance opportunities.
      </h1>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Contact me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                ntape.k.siwale@mail.com
              </span>
              <a
                href="mailto:ntape.k.siwale@gmail.com"
                className="contact__button">
                Email me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+260 963 841980</span>
              <a
                href="https://wa.me/260963841980?text=Hello%2C%20I%20have%20a%20question%20about%20your%20service..."
                className="contact__button">
                Let's chat
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-facebook-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Ntape Knox Siwale</span>
              <a href="https://m.me/ntape.k.siwale" className="contact__button">
                Let's chat
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
            Have an exciting project where you need some help?
          </h3>
          {!isFormSubmitted ? (
            <form className="contact__form" ref={form} onSubmit={sendEmail}>
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Insert your name"
                  required
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                  required
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Project</label>
                <textarea
                  name="project"
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Write your project"
                  required></textarea>
              </div>

              <button className="button button--flex" onClick={sendEmail}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </form>
          ) : (
            <div>
              <h3 className="head-text">Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
