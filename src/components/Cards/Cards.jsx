import React, { useEffect, useState } from "react";
import "./Cards.css";
import HustleImage from "../../assets/hustle-image.jfif";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  const Navigate = useNavigate();
  const [color, setColor] = useState("");
  const [tagDate, setTagDate] = useState("");

  useEffect(() => {
    // console.log(props?.elem?.event_date, "<==== Props Data");
    let dt = new Date(props?.elem?.event_date);
    dt.getDate();

    let colorArr = [
      "rgb(255 219 76)",
      "rgb(128 189 75)",
      "rgb(129 91 197)",
      "rgb(200 26 64)",
      "hsl(193deg 94% 46%)",
      "rgb(4 129 244)",
      "rgb(91 220 187)",
      "rgb(233 128 50)",
    ];

    setColor(colorArr[Math.floor(Math.random() * 7)]);

    console.log(color);
  }, []);

  // Today I will play Hollow Knight and make one for mobile game and then laung it:
  // I will decide the product on which i would be working

  return (
    <>
      <div className="card-container mx-2 my-5">
        <div className="card-head">
          <img
            className="card-img"
            style={{ height: "200px" }}
            src={props?.elem?.main_image}
            alt="image"
          />
          <button style={{ background: color }} className="image-badg-btn">
            {props?.elem?.event_date?.split("T")[0]}
          </button>
        </div>
        <p className="small-sub-heading">9th Annual Private Debt London</p>
        <p style={{ color: "gray" }}>{props?.elem?.description}</p>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <button
            style={{ backgroundColor: color, color:'white' }}
            onClick={() => Navigate(`/event/${props?.elem?.id}`)}
            className="card-body-btn"
          >
            View Event
          </button>
          <button
            style={{ backgroundColor: "#303030", color:'white' }}
            onClick={() => Navigate(`/event/${props?.elem?.id}`)}
            className="card-body-btn"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
