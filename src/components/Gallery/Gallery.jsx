import React, {useState} from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import "./Gallery.css";
import Footer from "../Footer/Footer";
import { FiSearch } from "react-icons/fi";
import ImageViewer from "../ImageViewer/ImageViewer";

function Gallery() {
  const [modalShow, setModalShow] = React.useState({modal:false, image:""});
  const [image, setImage] = useState("")

  return (
    <>
      <NavbarCompo />

      <ImageViewer
        show={modalShow.modal}
        img={modalShow.image}
        onHide={() => setModalShow({...modalShow, modal:false})}
      />

      <div style={{ padding: "2px 2rem 4rem 2rem" }} className="gallery-back">
        <p
          style={{ color: "white" }}
          className="sub-heading text-center gallery-heading"
        >
          Gallery
        </p>
        <div className="d-flex gallery-img-parent align-items-center flex-wrap">
          <div className="gallery-image-container m-2 my_card">
            <img
              className="my_card_img"
              src="https://lpgpconnect.com/wp-content/uploads/2022/11/PRIVATE-EQUITY-NETWORK-CONFERENCE.png"
              alt="image"
            />
            <div
              variant="primary"
              onClick={() =>{ setModalShow({modal:true, image:"https://lpgpconnect.com/wp-content/uploads/2022/11/PRIVATE-EQUITY-NETWORK-CONFERENCE.png"}) }}
              className="icon-div"
            >
              <FiSearch className="gallery-search" />
            </div>
          </div>
          <div className="gallery-image-container m-2 my_card">
            <img
              className="my_card_img"
              src="https://lpgpconnect.com/wp-content/uploads/2022/11/PRIVATE-EQUITY-NETWORK-CONFERENCE.png"
              alt="image"
            />
            <div
              variant="primary"
              onClick={() =>{ setModalShow({modal:true, image:"https://lpgpconnect.com/wp-content/uploads/2022/11/PRIVATE-EQUITY-NETWORK-CONFERENCE.png"}) }}
              className="icon-div"
            >
              <FiSearch className="gallery-search" />
            </div>
          </div>
        </div>
      </div>

      <section className="section-no-8">
        <Footer />
      </section>
    </>
  );
}

export default Gallery;
