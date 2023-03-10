import React, { useEffect, useState } from "react";
import NavbarCompo from "../Navbar/NavbarCompo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import { clientsData } from "../Data/ClientsData";
import { Pagination } from "swiper";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";

const BASE_URL = "http://ec2-52-198-151-181.ap-northeast-1.compute.amazonaws.com/";
// const BASE_URL = "https://b564-39-37-167-10.in.ngrok.io/";

function AllEvents() {
  const [allEvents, setAllEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [list, setList] = React.useState(clientsData);

  const getEvent = async () => {
    try {
      let response = await axios.get(`${BASE_URL}`);

      console.log("response from event: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const getAllEvents = () => {
    try {
      fetch("http://ec2-52-198-151-181.ap-northeast-1.compute.amazonaws.com")
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

  return (
    <>
      <NavbarCompo />
      <h1 className="sub-heading text-center my-5">
        Upcoming 2023 Conferences
      </h1>

      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <DotLoader color="rgb(91, 220, 187)" />
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <Container className="my-5 d-flex justify-content-center flex-wrap allEventsContainer">
            {allEvents.map((elem) => {
              return (
                <div className="">
                  <Cards elem={elem} />;
                </div>
              );
            })}
          </Container>
        </div>
      )}

      <section className="section-no-8">
        <Footer />
      </section>
    </>
  );
}

export default AllEvents;
