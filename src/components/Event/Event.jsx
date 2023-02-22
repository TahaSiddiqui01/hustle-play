import React, { useEffect, useState } from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import "./Event.css";
import EventsTab from "../EventsTab/EventsTab";
import { Container } from "react-bootstrap";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://nofi.pythonanywhere.com";

function Event() {
  const [modalShow, setModalShow] = React.useState(false);
  const [eventDetail, setEventDetail] = useState({});
  const [time, setTime] = useState("");
  const [formattedTime, setFormattedTime] = useState({});
  const [counterData, setCounterData] = useState([]);
  const [isEventExist, setIsEventExist] = useState(true);
  const [sponsor, setSponsor] = useState([]);
  let Navigate = useNavigate();

  const [allEventData, setAllEventData] = useState({});

  const { id } = useParams();

  const fetchData = async () => {
    try {
      let response = await axios.get(`${BASE_URL}/event-detail/${id}`);

      console.log("EventData", response?.data);
      setAllEventData(response?.data);
      let newArr = [];

      for (let key of Object.keys(response?.data?.sponsors)) {
        console.log("aaabbb: ", key);
        newArr.push([key, response?.data?.sponsors[key]]);
      }

      setSponsor(newArr);
      console.log("===> NewArr: ", newArr);

      setTime(response?.data?.event_date);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  if (time) {
    setInterval(() => {
      const remainingTime = getTimeRemaining(time);
      // console.log("remainingTime: ", remainingTime);

      if (
        remainingTime.days < 0 ||
        remainingTime.days < 0 ||
        remainingTime.days < 0 ||
        remainingTime.days < 0
      ) {
        setFormattedTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        setIsEventExist(false);
      } else {
        setFormattedTime({
          days: remainingTime.days,
          hours: remainingTime.hours,
          minutes: remainingTime.minutes,
          seconds: remainingTime.seconds,
        });
      }
    }, 1000);
  }

  const getCounter = async () => {
    try {
      let response = await axios.get(`${BASE_URL}/counter-items/${id}`);
      console.log("Counter: ", response);
      setCounterData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    getCounter();
  }, []);

  return (
    <>
      <div className=" container-fluid  img-div py-4 px-5">
        <NavbarCompo />

        <div className="mx-3  home-top-text-container d-flex  align-items-center flex-column">
          <p className="clr-white text-heading">{allEventData?.title}</p>
          <p
            style={{ fontSize: "22px", letterSpacing: "3px" }}
            className="clr-white text-center text-paragraph"
          >
            {allEventData?.subtitle}{" "}
          </p>
          <button onClick={() => Navigate("/all-events")} className="nav-btn">
            View Upcoming Conference
          </button>
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
            src={allEventData?.main_image}
            alt=""
            height={450}
            width={450}
            style={{ borderRadius: "16px" }}
            className="mx-5 my-2 event-image"
          />

          <div className="d-flex event-detail-right flex-column">
            <h2 className="text-center sub-heading mb-5">
              {allEventData?.title}
            </h2>
            {/* <p className="gray-text">
              LPGP Connect Private Debt New York brings together LPs and GPs
              from the global private credit market to look at the latest
              developments and market trends. Now in its 9
            </p> */}
            <p className="gray-text">{allEventData?.description}</p>

            {isEventExist ? (
              <div className="gray-text-bold text-center my-4">
                Conference will start in
              </div>
            ) : (
              <div className="gray-text-bold text-center my-4">
                Conference timed out
              </div>
            )}

            <div className="d-flex justify-content-center align-items-center">
              <span className="time-bold">
                {formattedTime?.days} <span className="time-light">Days</span>
              </span>
              <span className="time-bold">
                {formattedTime?.hours} <span className="time-light">Hours</span>
              </span>
              <span className="time-bold">
                {formattedTime?.minutes}{" "}
                <span className="time-light">Minutes</span>
              </span>
              <span className="time-bold">
                {formattedTime?.seconds}{" "}
                <span className="time-light">Seconds</span>
              </span>
            </div>
            <button
              onClick={() => Navigate(`/user/${id}`)}
              className="register-btn mx-auto my-5"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      <section className="section-event-two">
        <EventsTab eventData={allEventData} />
      </section>

      <section className="mt-5">
        <div className="d-flex no-parent-2 flex-wrap justify-content-around align-items-center px-5 py-2 no-parent">
          {/* <Container className="d-flex no-parent-2 flex-wrap justify-content-between align-items-center"> */}

          {counterData?.map((elem) => {
            return (
              <div className="event-no-div">
                <span>
                  <CountUp decimal="," end={elem?.counter} duration={2} />+
                </span>
                <span>{elem?.name}</span>
              </div>
            );
          })}

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

      {sponsor?.map((elem, index) => {
        return (
          <>
            <section>
              <Container className="text-center my-5 ">
                <p className="sub-heading my-5">{elem[0]}</p>

                <div className="d-flex justify-content-center align-items-center">
                  {elem[1]?.map((elem) => {
                    return (
                      <div className="section-6-div m-2">
                        <img
                          width={120}
                          src={`https://nofi.pythonanywhere.com/media/${elem?.image}`}
                          alt="partner"
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </Container>
            </section>
          </>
        );
      })}

      {/* <section>
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
      </section> */}

      {/* 
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
      </section> */}

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
