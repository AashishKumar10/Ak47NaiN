import React, { useState } from "react";
import "./Footer.css";

import familyImg from "../assets/Images/Footer/aaa.jpeg";
import logo from "../assets/Images/Logo/Ak47NaiN6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Naam daalo bhai 🙂");
      return;
    }

    if (!phone.trim()) {
      setError("Mobile number daalo bhai 📱");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("10 digit ka sahi number daalo ⚠️");
      return;
    }

    setError("");

    const whatsappNumber = "917568400241";
    const text = `New Contact 
Name: ${name}
Phone: ${phone}
Message: ${message || "No message"}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setName("");
    setPhone("");
    setMessage("");
  };



  return (

    <><div className="Conc">
      CONTACT
    </div><footer className="footer">
        <div className="footer-top">

          <div className="footer-image">
            <img src={familyImg} alt="Family" />
          </div>

          <form className="footer-form" onSubmit={handleSubmit}>
            <div className="stname">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="phone-input">
              <span className="country-code">+91</span>

              <input
                type="text"
                inputMode="numeric"
                placeholder="Mobile Number"
                value={phone}
                maxLength="10"
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  setPhone(value);
                }} />
            </div>

            <div className="stname">
              <textarea
                placeholder="Message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)} />
            </div>

            {error && <p className="form-error">{error}</p>}

            <button className="sendbut" type="submit">SEND MESSAGE</button>
          </form>

        </div>
      </footer>

      <div className="footer-bott">
        <div className="footer-bottom ">

          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="foott">
            FOLLOW MORE UPDATES
          </div>

          <div className="footer-social">
            <a href="https://wa.me/917568400241" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a href="https://www.instagram.com/lovely______nain/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://www.youtube.com/@lovelyNain10" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a href="https://www.facebook.com/aashish.nain.399/?_rdr" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>

        </div>

        <p className="footer-copy">
          AK47 NAIN — Defining the Standard. © 2026
        </p>
      </div>

      <a
        href="https://wa.me/917568400241"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

    </>
  );
}