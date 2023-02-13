import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Venue.css";

function Venue() {
  return (
    <>
      <div className="d-flex justify-content-centera align-items-center flex-column my-5">
        <HiLocationMarker className="location-icon my-2" />
        <p className=" my-2" style={{fontWeight:"bold"}}>The Londoner Hotel</p>
        <p style={{fontSize:"17px"}} className="text-center my-2">38 Leicester Square, London, WC2H 7DX.</p>
      </div>

      <div class="wpb_map_wraper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.5917145785875!2d-0.13056983559767693!3d51.50985069415658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605490157e0e3%3A0xd97f513bf2127b73!2sThe%20Londoner%20Hotel!5e0!3m2!1sen!2sae!4v1674124807688!5m2!1sen!2sae"
          width="600"
          height="450"
          // style="border: 0px; pointer-events: none;"
          style={{ border: "0px", pointerEvents: "none", width: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Venue;
