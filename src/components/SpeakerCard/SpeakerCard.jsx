import React from "react";
import "./SpeakerCard.css";
import ProfileDetail from "../ProfileDetail/ProfileDetail";

function SpeakerCard(props) {
  const [modalShow, setModalShow] = React.useState({mode:false, text:""});

  return (
    <>
      <ProfileDetail show={modalShow.mode} text={modalShow?.text} onHide={() => setModalShow({...modalShow, mode:false})} />

      <div className="d-flex flex-wrap justify-content-between align-items-center speaker-card">
        <img
          src={props?.elem?.image}
          className="speaker-img"
          width={180}
          alt="image"
        />

        <div className="m-2 d-flex h-100 justify-content-between align-items-between flex-column">
          <div>
            <p className="speaker-heading my-2">{props?.elem?.name}</p>
            {/* <p className="speaker-heading">Wakeman</p> */}
            <p className="speaker-light-heading my-2">{props?.elem?.designation}</p>
            <p className="speaker-heading my-2">{props?.elem?.company_name}</p>
            {/* <p className="speaker-heading">Capital -</p> */}
          </div>
          <button
            variant="primary"
            onClick={() => setModalShow({...modalShow,mode:true, text:props?.elem?.speaker_intro})}
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
