import React from 'react';
import './ContactForm.css';
const ContactForm = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="border col-lg-6 col-12"></div>
          <div className="contactForm border col-lg-6 col-12 ">
            <form>
              <h2>Get in Touch</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type your Message...</span>
              </div>

              <div className="inputBox">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
