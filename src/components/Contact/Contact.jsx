import React from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import "./Contact.css";

function Contact() {
  return (
    <>
      <NavbarCompo />
      <div className="d-flex justify-content-around contact-container align-items-center">
        <div
          style={{ width: "35%", minWidth: "250px" }}
          className="align-self-start contact-left-p contact-child"
        >
          <p className="sub-heading my-5">Reach us at:</p>
          <div className="contact-left">
            <div className="contact-detail">
              <img
                width={45}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/letter.png"
                alt=""
                className="m-5"
              />
              <div>
                <span className="text-bold">
                  Email: <br />
                </span>
                <span className="text-bold-large">info@lpgpconnect.com</span>
              </div>
            </div>
            <div className="contact-detail">
              <img
                width={45}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/phone-call.png"
                alt=""
                className="m-5"
              />
              <div>
                <span className="text-bold">
                  Phone: <br />
                </span>
                <span className="text-bold-large">+44 203 044 2790</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "35%", minWidth: "250px" }}
          className="d-flex justify-content-center flex-column contact-child"
        >
          <label className="contact-label" htmlFor="nam">
            Full Name (required)
          </label>
          <input className="contact-input" type="text" />
          <label className="contact-label" htmlFor="nam">
            Emal (required)
          </label>
          <input className="contact-input" type="text" />
          <label className="contact-label" htmlFor="nam">
            Company (required)
          </label>
          <input className="contact-input" type="text" />
          <label className="contact-label" htmlFor="nam">
            Contact (required)
          </label>
          <input className="contact-input" type="text" />
          <label className="contact-label" htmlFor="nam">
            Your Message (required)
          </label>
          <textarea
            name="Message"
            id=""
            className="contact-textarea"
            cols="30"
            rows="10"
          ></textarea>
          <button style={{width:"fit-content"}} className="addToCartBtn mt-4">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
