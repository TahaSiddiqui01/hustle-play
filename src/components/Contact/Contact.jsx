import React, { useState } from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import "./Contact.css";
import axios from "axios";
const BASE_URL = "http://ec2-52-198-151-181.ap-northeast-1.compute.amazonaws.com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    company: "",
    cell: "",
    message: "",
  });

  // following function is used to post message or in sort used for contact:

  const contactUs = async () => {
    try {
      if (
        contactData?.full_name === "" ||
        contactData?.email === "" ||
        contactData?.company === "" ||
        contactData?.cell === "" ||
        contactData?.message === ""
      ) {
        toast.error("No filed can't be empty", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }

      let response = await axios.post(`${BASE_URL}/create-contact/`, {
        full_name: contactData?.full_name,
        email: contactData?.email,
        company: contactData?.company,
        cell: contactData?.cell,
        message: contactData?.message,
      });

      console.log("Response from contact api: ", response);

      toast("Message send successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setContactData({
        full_name: "",
        email: "",
        company: "",
        cell: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleOnChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

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
          <input
            className="contact-input"
            type="text"
            onChange={handleOnChange}
            name="full_name"
            value={contactData?.full_name}
          />
          <label className="contact-label" htmlFor="nam">
            Email (required)
          </label>
          <input
            className="contact-input"
            type="text"
            onChange={handleOnChange}
            name="email"
            value={contactData?.email}
          />
          <label className="contact-label" htmlFor="nam">
            Company (required)
          </label>
          <input
            className="contact-input"
            type="text"
            onChange={handleOnChange}
            name="company"
            value={contactData?.company}
          />
          <label className="contact-label" htmlFor="nam">
            Contact (required)
          </label>
          <input
            className="contact-input"
            type="text"
            onChange={handleOnChange}
            name="cell"
            value={contactData?.cell}
          />
          <label className="contact-label" htmlFor="nam">
            Your Message (required)
          </label>
          <textarea
            name="message"
            id=""
            className="contact-textarea"
            cols="30"
            rows="10"
            onChange={handleOnChange}
            value={contactData?.message}
          ></textarea>
          <button
            style={{ width: "fit-content" }}
            className="addToCartBtn mt-4"
            onClick={contactUs}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
