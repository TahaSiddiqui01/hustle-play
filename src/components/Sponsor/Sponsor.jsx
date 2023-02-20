import React, { useEffect, useState } from "react";
import "./Sponsor.css";
import { HiDatabase } from "react-icons/hi";

function Sponsor(props) {
  const [filterdData, setFilterdData] = useState([]);
  const [filteredSponsor, setFilteredSponsor] = useState([]);

  useEffect(() => {
    console.log("Sponsor Data: ", props?.elem);

    let data = [];

    for (let key in props?.elem) {
      data.push([key, props?.elem[key]]);
    }

    setFilteredSponsor(data);
  }, [props]);

  // filterData();
  return (
    <>
      {filteredSponsor?.map((elem) => {
        return (
          <div className="my-4">
            <p className="light-heading text-center mb-2">{elem[0]}</p>
            {elem[1]?.map((child) => {
              return (
                <div className="div-card my-2 d-flex justify-content-start align-items-center sponsorCard">
                  <div className="sponsorcardleft">
                    <img
                      src={`http://nofi.pythonanywhere.com/media/${child.image}`}
                      alt="image"
                      className="sponsorCardImage"
                    />
                  </div>
                  <div className="sponsorcard-right">
                    <p className="gray-color">
                      {child.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default Sponsor;
