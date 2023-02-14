import React, { useEffect } from "react";
import "./Cards.css";
import HustleImage from "../../assets/hustle-image.jfif";
import {useNavigate} from "react-router-dom";

function Cards(props) {

  const Navigate = useNavigate()


  useEffect(() => {
  
    console.log(props?.elem)
  
  }, [])
  

  return (
    <>
      <div className="card-container mx-2 my-5">
        <div className="card-head">
          <img className="card-img" style={{height:"200px"}} src={props?.elem?.main_image} alt="image" />
          <button className="image-badg-btn">{props?.elem?.event_date?.split("T")[0]}</button>
        </div>
        <p className="small-sub-heading">9th Annual Private Debt London</p>
        <p style={{ color: "gray" }}>
          {props?.elem?.description}
        </p>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <button style={{backgroundColor:"#03aad6"}} onClick={()=>Navigate(`/event/${props?.elem?.id}`)} className="card-body-btn">View Event</button>
          <button style={{backgroundColor:"#303030"}} className="card-body-btn">Register</button>
        </div>
      </div>
    </>
  );
}

export default Cards;
