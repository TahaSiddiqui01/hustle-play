import React from "react";
import "./Sponsor.css";

function Sponsor(props) {
  return (
    <>
      <div className="div-card my-5 d-flex justify-content-start align-items-center sponsorCard">
        <div className="sponsorcardleft">
        <img
          src={props?.elem?.image}
          alt="image"
          className="sponsorCardImage"
        />
        </div>
        <div className="sponsorcard-right">
          <p className="light-heading text-center mb-2">Co-Sponsors</p>
          <p className="gray-color">
            {props?.elem?.text}
          </p>
        </div>
      </div>
    </>
  );
}

export default Sponsor;
