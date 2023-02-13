import React from "react";
import "./Sponsor.css";

function Sponsor() {
  return (
    <>
      <div className="div-card my-5 d-flex justify-content-between align-items-center sponsorCard">
        <div className="sponsorcardleft">
        <img
          src="https://lpgpconnect.com/wp-content/uploads/2023/01/signal-Capital.png"
          alt="image"
          className="sponsorCardImage"
        />
        </div>
        <div>
          <p className="light-heading text-center mb-2">Co-Sponsors</p>
          <p className="gray-color">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            atque aliquid maiores facilis ducimus illo assumenda dolorem
            consequatur, ab dolorum iure vel reiciendis cupiditate, tempora odit
            commodi recusandae. Inventore, nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta id, quia expedita, tenetur dolores laborum quos exercitationem quibusdam, culpa nostrum dolorum enim eveniet ad? Sapiente, sit nesciunt! Impedit, a quo.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sponsor;
