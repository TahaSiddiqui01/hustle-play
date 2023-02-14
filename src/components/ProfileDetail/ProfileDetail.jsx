import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProfileDetail(props) {


  useEffect(() => {
    
    console.log("This is props: ", props)

  }, [])
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p style={{ fontWeight: "400px", color: "gray" }}>{props?.text}</p>

        {/* <p style={{ fontWeight: "400px", color: "gray" }}>
          Amany leads the ThinCats team from the London office, overseeing the
          growth and development of the business.
        </p>

        <p style={{ fontWeight: "400px", color: "gray" }}>
          Prior to joining ThinCats, Amany was CEO of The Northview Group, a UK
          mortgage lender and servicer with more than £10 billion in balance
          sheet and serviced assets. Through a combination of acquisitions and
          the leveraging of unique data sets and sophisticated analytics Amany
          drove significant customer growth and satisfaction.
        </p>

        <p style={{ fontWeight: "400px", color: "gray" }}>
          She previously led and built two highly successful mortgage, consumer
          and small business servicing and analytics businesses, Acenden and AMA
          Decision Advisers Limited. Amany has over 30 years financial markets
          experience and started her career as a fixed income banker.
        </p> */}
      </Modal.Body>
    </Modal>
  );
}

export default ProfileDetail;
