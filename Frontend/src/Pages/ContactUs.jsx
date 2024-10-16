import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/ContactUs.css'

function ContactUsPage() {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_31z3lcq', 'template_9vx8mob', form.current, {
        publicKey: 'cN2aLMJvxPlGYyCcb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='contactus-body'>
    <form ref={form} onSubmit={sendEmail}>
        <h1>Contact Us</h1>
    <div >
      <label>Name</label>
      <input className="contactus-field" type="text" name="user_name" />
      <label>Email</label>
      <input className="contactus-field" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="contactus-field" name="message" />
      </div>
      <div >
      <input className='contactus-submit' type="submit" value="Send" />
      </div>
    </form>
    </div>
  );
}

export default ContactUsPage;
