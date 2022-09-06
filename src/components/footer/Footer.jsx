import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#top" className="footer__logo">
          AUSTIN SONG
        </a>
        <ul className="permalinks">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; ABC</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
