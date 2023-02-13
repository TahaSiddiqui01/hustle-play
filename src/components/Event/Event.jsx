import React, { useEffect, useState } from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import "./Event.css";
import EventsTab from "../EventsTab/EventsTab";
import { Container } from "react-bootstrap";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function Event() {
  const [modalShow, setModalShow] = React.useState(false);
  const { id } = useParams();

  return (
    <>
      <div className=" container-fluid  img-div py-4 px-5">
        <NavbarCompo />

        <div className="mx-3  home-top-text-container d-flex  align-items-center flex-column">
          <p className="clr-white text-heading">LPGP CONNECT</p>
          <p
            style={{ fontSize: "22px", letterSpacing: "3px" }}
            className="clr-white text-center text-paragraph"
          >
            We specialize in hosting industry leading events in the Global
            Private Debt & Equity Markets. Our conferences brings together
            senior level decision makers to drive the industry forward.{" "}
          </p>
          <button className="nav-btn">View Upcoming Conference</button>
        </div>
      </div>

      <section className="event-section-one">
        <div
          style={{
            padding: "88px 8px",
          }}
          className="d-flex flex-wrap justify-content-center"
        >
          <img
            src="https://lpgpconnect.com/wp-content/uploads/2021/11/5.png"
            alt=""
            className="mx-5 my-2 event-image"
          />

          <div className="d-flex event-detail-right flex-column">
            <h2 className="text-center sub-heading mb-5">
              9th Annual Private Debt New York
            </h2>
            <p className="gray-text">
              LPGP Connect Private Debt New York brings together LPs and GPs
              from the global private credit market to look at the latest
              developments and market trends. Now in its 9
            </p>
            <p className="gray-text">
              The conference agenda has been designed to give investors an in
              depth look at the most up to date issues and concerns for
              investment groups who currently invest in the asset class and
              those that are looking to learn more and navigate the many
              opportunities on offer.
            </p>
            <div className="gray-text-bold text-center my-4">
              Conference will sart in
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <span className="time-bold">
                109 <span className="time-light">Days</span>
              </span>
              <span className="time-bold">
                20 <span className="time-light">Hours</span>
              </span>
              <span className="time-bold">
                13 <span className="time-light">Minutes</span>
              </span>
              <span className="time-bold">
                16 <span className="time-light">Seconds</span>
              </span>
            </div>
            <button className="register-btn mx-auto my-5">Register Now</button>
          </div>
        </div>
      </section>

      <section className="section-event-two">
        <EventsTab />
      </section>

      <section className="mt-5">
        <div className="d-flex no-parent-2 flex-wrap justify-content-around align-items-center px-5 py-2 no-parent">
          {/* <Container className="d-flex no-parent-2 flex-wrap justify-content-between align-items-center"> */}
          <div className="event-no-div">
            <span>3,000+</span>
            <span>Atendees</span>
          </div>
          <div className="event-no-div">
            <span>400+</span>
            <span>Speakers</span>
          </div>
          <div className="event-no-div">
            <span>15+</span>
            <span>Events</span>
          </div>
          <div className="event-no-div">
            <span>1</span>
            <span>Organiser</span>
          </div>
          {/* </Container> */}
        </div>
      </section>

      <section className="home_section_four">
        <div className="container d-flex flex-wrap justify-content-between align-items-center ">
          <div
            style={{ maxWidth: "40%", width: "100%" }}
            className="home_sec4_text_div"
          >
            <p className="section-4-heading">Sponsorship Opportunities</p>
            <p className="section-4-text">
              LPGP Connect conferences offer ample of opportunities for sponsors
              to speak, brand placement, exhibit and set up pre-arranged
              meetings to drive their businesses forward. Our sponsorship
              opportunities are designed to be tailor made to the client’s needs
              as we aim to help educate their target audience on key industry
              issues and up to date solutions. If you want to discuss how we can
              help you with brand awareness, lead generation, 1-2-1 meetings,
              client dinners and many more options please contact: <br /> <br />{" "}
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
              LPGP Connect speakers are populated almost entirely by individuals
              and organisations recommended to us or in recognition of their
              work within their respected field of investment. Speaking
              opportunities at our conferences provide the platform to showcase
              your expertise to a senior level peer group, build your
              professional reputation and gain new business connections. Our
              conferences are for a carefully targeted senior level audience, if
              you are interested in speaking please contact: <br /> <br />{" "}
              Kamran Tamimi <br />
              kt@lpgpconnect.com <br /> +44 203 044 2790
            </p>
          </div>
        </div>
      </section>

      <section>
        <Container className="text-center my-5 ">
          <p className="sub-heading my-5">Co-Sponsors</p>

          <div className="d-flex justify-content-center align-items-center">
            <div className="section-6-div m-2">
              <img
                src={
                  "https://lpgpconnect.com/wp-content/uploads/2021/11/Juniper-Square.jpg"
                }
                alt="partner"
              ></img>
            </div>

            <div className="section-6-div m-2">
              <img
                src={
                  "https://lpgpconnect.com/wp-content/uploads/2021/11/alantra.jpg"
                }
                alt="partner"
              ></img>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <p className="sub-heading text-center my-5">Exhibitors</p>

          <div className="d-flex justify-content-center align-items-center">
            <div className="section-6-div m-2">
              <img
                src={
                  "https://lpgpconnect.com/wp-content/uploads/2021/11/raven.jpg"
                }
                alt="partner"
              ></img>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <p className="sub-heading text-center my-5">Data Partner</p>

          <div className="d-flex justify-content-center align-items-center">
            <div className="section-6-div m-2">
              <img
                src={
                  "https://lpgpconnect.com/wp-content/uploads/2022/03/Clifford-Chance.png"
                }
                alt="partner"
              ></img>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-no-7">
        <Testimonials />
      </section>

      <section className="section-no-8">
        <Footer />
      </section>
    </>
  );
}

export default Event;
