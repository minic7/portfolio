import "./FormStyles.css"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2cqqful', 'template_yn9gw7g', form.current, {
        publicKey: 'IoRZ6ryF-Lyo1ILeB',
      })
      .then(
        () => {
          console.log('SUCCESS!Message Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="form">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" className="btn"/>
    </form>
      
    </div>
  )
}

export default Form
