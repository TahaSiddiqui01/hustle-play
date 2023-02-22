import React, { useState, useRef, useEffect } from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import "../Navbar/Navbar.css";
import { Card, Container } from "react-bootstrap";
import "./Home.css";
import Cards from "../Cards/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import CountUp from "react-countup";
import { Particles } from "react-tsparticles";

SwiperCore.use([Autoplay]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { clientsData } from "../Data/ClientsData";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useInterval } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";

const BASE_URL = "http://nofi.pythonanywhere.com";

// const particlesConfig = {
//   fpsLimit: 60,
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//     color: {
//       value: "#343a4",
//     },
//     shape: {
//       type: "circle",
//       stroke: {
//         width: 0,
//         color: "#000000",
//       },
//       polygon: {
//         nb_sides: 5,
//       },
//       image: {
//         src: "img/github.svg",
//         width: 100,
//         height: 100,
//       },
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         opacity_min: 0.1,
//         sync: false,
//       },
//     },
//     size: {
//       value: 5,
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 0.1,
//         sync: false,
//       },
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#343a4",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 6,
//       direction: "none",
//       random: false,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: false,
//       },
//       onclick: {
//         enable: false,
//       },
//       resize: true,
//     },
//   },
//   detectRetina: true,
// };

function Home() {
  const handleMouseMove = (e) => {
    // console.log(e.target)
    let availableSpan = document.getElementsByClassName("custom_particles");

    for (let span of availableSpan) {
      span.style.display = "block";
    }

    // if (availableSpan.length <= 10) {
    //   let randNo = Math.random() * 100;
    //   let span = document.createElement("span");
    //   span.className = "custom_particles";
    //   span.style.top = `${e.clientY - randNo}px`;
    //   span.style.left = `${e.clientX - randNo}px`;
    //   document.body.appendChild(span);
    // }
  };
  const [list, setList] = useState(clientsData);
  const [isLoading, setIsLoading] = useState(true);
  let Navigate = useNavigate();
  const [allEvents, setAllEvents] = useState([]);

  const changeShape = () => {
    const generateRandomNo = () => {
      return Math.floor(Math.random() * (80 - 20) + 20);
    };

    let radius1 = generateRandomNo();
    let radius2 = generateRandomNo();
    let radius3 = generateRandomNo();
    let radius4 = generateRandomNo();
    let radius5 = generateRandomNo();
    let radius6 = generateRandomNo();
    let radius7 = generateRandomNo();
    let radius8 = generateRandomNo();

    let blob = document.getElementById("blob");

    if (blob) {
      blob.style.borderRadius = `${radius1}% ${radius2}% ${radius3}% ${radius4}% / ${radius5}% ${radius6}% ${radius7}% ${radius8}% `;
      blob.style.transform = `skew(${Math.random() * 10}deg, ${
        Math.random() * 10
      }deg)`;
    }
  };

  setInterval(() => {
    changeShape();
  }, 3000);

  const getAllEvents = () => {
    try {
      fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAllEvents(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  const disableSpans = () => {
    let availableSpan = document.getElementsByClassName("custom_particles");

    for (let span of availableSpan) {
      span.style.display = "none";
    }
  };

  return (
    <>
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <ScaleLoader
            color="#1e73be"
            cssOverride={{}}
            height={45}
            loading
            margin={3}
            speedMultiplier={1}
            width={8}
          />
        </div>
      ) : (
        <>
          <div
            onMouseMove={handleMouseMove}
            onMouseOut={disableSpans}
            className=" container-fluid  img-div py-4 px-5"
          >
            <NavbarCompo />

            <div className="particles">
              <span className="custom_particles custom_particles-1"></span>
              <span className="custom_particles custom_particles-2"></span>
              <span className="custom_particles custom_particles-3"></span>
              <span className="custom_particles custom_particles-4"></span>
              <span className="custom_particles custom_particles-5"></span>
            </div>

            <div
              style={{ zIndex: "-1" }}
              className="mx-3  home-top-text-container d-flex  align-items-center flex-column"
            >
              <p className="clr-white text-heading">LPGP CONNECT</p>
              <p
                style={{ fontSize: "22px", letterSpacing: "3px" }}
                className="clr-white text-center text-paragraph"
              >
                We specialize in hosting industry leading events in the Global
                Private Debt & Equity Markets. Our conferences brings together
                senior level decision makers to drive the industry forward.{" "}
              </p>
              <button
                onClick={() => Navigate("/all-events")}
                className="nav-btn"
              >
                View Upcoming Conference
              </button>
            </div>

            <div id="blob"></div>
          </div>

          {/* <div
            style={{ border: "1px solid black", height: "300px" }}
            className="App"
            onMouseMove={handleMouseMove}
          > */}
          {/* <Particles
              options={particlesConfig}
              init={(particles) => (particlesRef.current = particles)}
            /> */}

          {/* <span className="custom_particles custom_particles-1"></span>
            <span className="custom_particles custom_particles-2"></span>
            <span className="custom_particles custom_particles-3"></span>
            <span className="custom_particles custom_particles-4"></span>
            <span className="custom_particles custom_particles-5"></span>
          </div> */}

          <div className="d-flex justify-content-center">
            <Container className="my-5 ">
              <h2 className="sub-heading my-5">Upcoming 2023 Conferences</h2>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 180,
                  },
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 180,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 80,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: -40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {allEvents.map((elem, index) => {
                  return (
                    <SwiperSlide>
                      <Cards index={index} elem={elem} />;
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="text-center">
                <button
                  className="view-all-btn"
                  onClick={() => Navigate("/all-events")}
                >
                  View All Conferences
                </button>
              </div>
            </Container>
          </div>

          <div className="d-flex no-parent-2 flex-wrap justify-content-around align-items-center px-5 py-2 no-parent">
            {/* <Container className="d-flex no-parent-2 flex-wrap justify-content-between align-items-center"> */}
            <div className="event-no-div">
              <span>
                <CountUp decimal="," end={100} duration={2} />+
              </span>
              <span>Atendees</span>
            </div>
            <div className="event-no-div">
              <span>
                <CountUp decimal="," end={200} duration={2} />+
              </span>
              <span>Speakers</span>
            </div>
            <div className="event-no-div">
              <span>
                {" "}
                <CountUp decimal="," end={300} duration={2} /> +
              </span>
              <span>Events</span>
            </div>
            <div className="event-no-div">
              <span>
                <CountUp decimal="," end={400} duration={2} /> +
              </span>
              <span>Organiser</span>
            </div>
            {/* </Container> */}
          </div>

          <section className="home_section_four">
            <div className="container d-flex flex-wrap justify-content-between align-items-center ">
              <div
                style={{ maxWidth: "40%", width: "100%" }}
                className="home_sec4_text_div"
              >
                <p className="section-4-heading">Sponsorship Opportunities</p>
                <p className="section-4-text">
                  LPGP Connect conferences offer ample of opportunities for
                  sponsors to speak, brand placement, exhibit and set up
                  pre-arranged meetings to drive their businesses forward. Our
                  sponsorship opportunities are designed to be tailor made to
                  the client’s needs as we aim to help educate their target
                  audience on key industry issues and up to date solutions. If
                  you want to discuss how we can help you with brand awareness,
                  lead generation, 1-2-1 meetings, client dinners and many more
                  options please contact: <br /> <br />{" "}
                  <span style={{ fontWeight: "bold" }}>Martin Ryan</span> <br />
                  mr@lpgpconnect.com <br /> +44 203 044 2790
                </p>
              </div>
              <div
                style={{ maxWidth: "40%", width: "100%" }}
                className="home_sec4_text_div"
              >
                <p className="section-4-heading">Speaker Opportunities</p>
                <p className="section-4-text">
                  LPGP Connect speakers are populated almost entirely by
                  individuals and organisations recommended to us or in
                  recognition of their work within their respected field of
                  investment. Speaking opportunities at our conferences provide
                  the platform to showcase your expertise to a senior level peer
                  group, build your professional reputation and gain new
                  business connections. Our conferences are for a carefully
                  targeted senior level audience, if you are interested in
                  speaking please contact: <br /> <br /> Kamran Tamimi <br />
                  kt@lpgpconnect.com <br /> +44 203 044 2790
                </p>
              </div>
            </div>
          </section>

          <section
            className="section-no-5 m-auto row"
            style={{ width: "100%" }}
          >
            <div className="section-image col-md-3 p-0 ">
              <img
                style={{ width: "100%" }}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/1-3.jpg"
                alt="gallery-image"
              />
            </div>
            <div className="section-image col-md-3 p-0 ">
              <img
                style={{ width: "100%" }}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/4-1.jpg"
                alt="gallery-image"
              />
            </div>
            <div className="section-image col-md-3 p-0 ">
              <img
                style={{ width: "100%" }}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/5-1.jpg"
                alt="gallery-image"
              />
            </div>
            <div className="section-image col-md-3 p-0 ">
              <img
                style={{ width: "100%" }}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/3-1.jpg"
                alt="gallery-image"
              />
            </div>
            <div className="section-image col-md-3 p-0 ">
              <img
                style={{ width: "100%" }}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/6-1.jpg"
                alt="gallery-image"
              />
            </div>
            <div className="section-image col-md-3 p-0 ">
              <img
                style={{ width: "100%" }}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/2-1.jpg"
                alt="gallery-image"
              />
            </div>
            <div className="section-image section-image-slast col-md-3 p-0 ">
              <img
                style={{ width: "100%" }}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/PHOTO-2021-11-12-13-05-47-3.jpg"
                alt="gallery-image"
              />
            </div>
            <div className="section-image section-image-last col-md-3 p-0 ">
              <img
                style={{ width: "100%" }}
                src="https://lpgpconnect.com/wp-content/uploads/2021/11/image010.png"
                alt="gallery-image"
              />
            </div>
          </section>

          <section className="section-no-6 ">
            <Container>
              <h2 className="text-center sub-heading my-5">
                Clients we worked with
              </h2>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 180,
                  },
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 180,
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 80,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: -40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination]}
                className="my-5 mySwiper"
              >
                <div>
                  {list?.map((elem) => {
                    return (
                      <SwiperSlide>
                        <div className="section-6-div">
                          <img src={elem} alt="partner"></img>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </Container>
          </section>

          <section className="section-no-7">
            <Testimonials />
          </section>

          <section className="section-no-8">
            <Footer />
          </section>
        </>
      )}
    </>
  );
}

export default Home;
