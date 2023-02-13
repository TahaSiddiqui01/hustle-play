import React from "react";
import "./SpeakerCard.css";
import ProfileDetail from "../ProfileDetail/ProfileDetail";

function SpeakerCard() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <ProfileDetail show={modalShow} onHide={() => setModalShow(false)} />

      <div className="d-flex flex-wrap justify-content-between align-items-center speaker-card">
        <img
          src="https://lpgpconnect.com/wp-content/uploads/2023/01/image002.png"
          className="speaker-img"
          width={180}
          alt="image"
        />

        <div className="m-2 d-flex h-100 justify-content-between align-items-between flex-column">
          <div>
            <p className="speaker-heading">Tom</p>
            <p className="speaker-heading">Wakeman</p>
            <p className="speaker-light-heading">Finanace Director</p>
            <p className="speaker-heading">Soho Square</p>
            <p className="speaker-heading">Capital -</p>
          </div>
          <button
            variant="primary"
            onClick={() => setModalShow(true)}
            className="spekaer-btn"
          >
            Speaker Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default SpeakerCard;
