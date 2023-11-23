import React from 'react';
import Nav from "./Nav";
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Nav/>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Please reach out to us through the following means:
        </p>
        <ul>
          <li>Email: contact@carrental.com</li>
          <li>Phone: 91+6300206976</li>
          <li>Address: VIT AP, Amaravati, Andhra</li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;