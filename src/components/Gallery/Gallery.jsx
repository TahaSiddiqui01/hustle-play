import React, { useEffect, useState } from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import "./Gallery.css";
import Footer from "../Footer/Footer";
import { FiSearch } from "react-icons/fi";
import ImageViewer from "../ImageViewer/ImageViewer";
import axios from "axios";
const BASE_URL = "http://nofi.pythonanywhere.com";

function Gallery() {
  const [modalShow, setModalShow] = React.useState({ modal: false, image: "" });
  const [image, setImage] = useState("");

  const [gallerData, setgallerData] = useState([]);

  // Following fuction is used to get the data from the gallery:

  const getGalleryData = async () => {
    try {
      let response = await axios.get(`${BASE_URL}/gallery-list/`);

      console.log("This is the gallery response: ", response?.data);
      setgallerData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGalleryData();
  }, []);

  return (
    <>
      <NavbarCompo />

      <ImageViewer
        show={modalShow.modal}
        img={modalShow.image}
        onHide={() => setModalShow({ ...modalShow, modal: false })}
      />

      <div style={{ padding: "2px 2rem 4rem 2rem" }} className="gallery-back">
        <p
          style={{ color: "white" }}
          className="sub-heading text-center gallery-heading"
        >
          Gallery
        </p>

        {gallerData?.map((elem) => {
          return (
            <>
              <div className="d-flex gallery-img-parent align-items-center flex-wrap">
                <div className="gallery-image-container m-2 my_card">
                  <img
                    className="my_card_img"
                    src={elem.Image}
                    alt="image"
                  />
                  <div
                    variant="primary"
                    onClick={() => {
                      setModalShow({
                        modal: true,
                        image:elem.Image,
                      });
                    }}
                    className="icon-div"
                  >
                    <FiSearch className="gallery-search" />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <section className="section-no-8">
        <Footer />
      </section>
    </>
  );
}

export default Gallery;
