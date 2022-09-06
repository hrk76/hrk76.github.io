import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3xmr0zo",
      "template_s6y57xm",
      form.current,
      "ZlypzQmdsBKYN31VO"
    );
    e.target.reset();
    alert("Message sent!");
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>austinsong56@gmail.com</h5>
            <a href="mailto:austinsong56@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <BsTelephone className="contact__option-icon" />
            <h4>Phone #</h4>
            <h5>(909)767-1108</h5>
            <a href="tel:909-767-1108">Call now</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
