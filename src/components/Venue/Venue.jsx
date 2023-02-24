import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Venue.css";
import { GoogleMap } from "@react-google-maps/api";

function Venue(props) {
  return (
    <>
      <div className="d-flex justify-content-centera align-items-center flex-column my-5">
        <HiLocationMarker className="location-icon my-2" />
        <p className=" my-2" style={{ fontWeight: "bold" }}>
          {props?.locationHeader}
        </p>
        <p style={{ fontSize: "17px" }} className="text-center my-2">
          {props?.locationDetail}
        </p>
      </div>
      {/* 
      <div class="wpb_map_wraper">
        <GoogleMap location={props?.locationDetail?.split(" ")?.join("+")} />
      </div> */}

      <div className="wpb_map_wraper">
        <iframe
          width="600"
          height="450"
          style={{ border: "0px", width:"100%" }}
          loading="lazy"
          allowfullscreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC6DmdzyagP97ONyCdgXZJf2vXNAYixIbQ
    &q=${props?.locationDetail?.split(" ")?.join("+")}`}
        ></iframe>
      </div>
    </>
  );
}

export default Venue;
