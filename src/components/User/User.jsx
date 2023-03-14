import React, { useState, useEffect } from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import "./User.css";
import Tilty from "react-tilty";
import axios from "axios";
const BASE_URL =
  "http://ec2-52-198-151-181.ap-northeast-1.compute.amazonaws.com";
// const BASE_URL = "http://nofi.pythonanywhere.com";
// import Stripe from "stripe";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

function User() {
  const { id } = useParams();
  const [eventdata, setEventdata] = useState({});

  const fetchData = async () => {
    try {
      let response = await axios.get(`${BASE_URL}/event-detail/${id}`);

      console.log("EventData2 on the other page: ", response?.data);
      setEventdata(response?.data);
      // setAllEventData(response?.data);
      let newArr = [];

      for (let key of Object.keys(response?.data?.sponsors)) {
        console.log("aaabbb: ", key);
        newArr.push([key, response?.data?.sponsors[key]]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [sessionId, setSessionId] = useState("");

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    contact: "",
    NoOfPersons: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (
        !inputData?.name ||
        !inputData?.email ||
        !inputData?.contact ||
        !inputData?.NoOfPersons
      ) {
        return swal("No fields can't be empty", "", "error");
      }

      let obj = {
        name: inputData?.name,
        email: inputData?.email,
        contact: parseInt(inputData?.contact),
        number_of_persons: parseInt(inputData?.NoOfPersons),
      };
      let response = await axios.post(
        `${BASE_URL}/payment/${id}?t=${
          eventdata?.event_price * parseInt(inputData?.NoOfPersons)
        }`,
        obj
      );
      console.log("Response from backend Striped: ", response);
      setSessionId(response?.data?.sessionId);
      if (response?.data?.stripe_url) {
        window.location = response?.data?.stripe_url;
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
          <p className="small-sub-heading">{eventdata?.title}</p>

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
