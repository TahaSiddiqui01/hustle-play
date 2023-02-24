import React from "react";

function GoogleMap(props) {
  return (
    <>
      <iframe
        width="600"
        height="450"
        style={{ border: "0px" }}
        loading="lazy"
        allowfullscreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC6DmdzyagP97ONyCdgXZJf2vXNAYixIbQ
    &q=${props?.location}`}
      ></iframe>
    </>
  );
}

export default GoogleMap;
