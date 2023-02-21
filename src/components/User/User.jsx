import React, { useState, useEffect } from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import "./User.css";
import Tilty from "react-tilty";
import { useParams } from "react-router-dom";
import axios from "axios";
const BASE_URL = "http://nofi.pythonanywhere.com";
// import Stripe from "stripe";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

function User() {
  const [sessionId, setSessionId] = useState("");


  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    contact: "",
    NoOfPersons: "",
  });

  const { id } = useParams();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let obj = {
        name: inputData?.name,
        email: inputData?.email,
        contact: parseInt(inputData?.contact),
        number_of_persons: parseInt(inputData?.NoOfPersons),
      };
      let response = await axios.post(`${BASE_URL}/payment/${id}?t=12`, obj);
      console.log("Response from backend Striped: ", response);
      setSessionId(response?.data?.sessionId);
      if (response?.data?.sessionId) {
        // handleClick();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <NavbarCompo />

      <div style={{ height: "90vh" }} className="d-flex align-items-center">
        <form
          onSubmit={handleSubmit}
          style={{ transform: "translateZ(30px)" }}
          className="user-form mx-auto  d-flex justify-content-center align-items-center flex-column"
        >
          <label className="align-self-start user-label">Name</label>
          <input
            onChange={handleChange}
            name="name"
            className="user-input"
            type="text"
          />
          <label className="align-self-start user-label">Email</label>
          <input
            onChange={handleChange}
            name="email"
            className="user-input"
            type="email"
          />
          <label className="align-self-start user-label">Contact</label>
          <input
            onChange={handleChange}
            name="contact"
            className="user-input"
            type="text"
          />
          <label className="align-self-start user-label">No. of persons</label>
          <input
            onChange={handleChange}
            name="NoOfPersons"
            className="user-input"
            type="number"
          />
          <button className="user-btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default User;
