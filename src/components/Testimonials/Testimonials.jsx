import React from "react";
import { Container } from "react-bootstrap";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function Testimonials() {
  return (
    <>
      <Container
        fluid
        className="testimonials d-flex justify-content-center align-items-center flex-column mt-5"
      >
        <h2 style={{ color: "white" }} className="sub-heading my-5">
          What others say about our 2021 events
        </h2>
        <img
          className="testimonials-image"
          src="https://lpgpconnect.com/wp-content/uploads/2021/11/gq.png"
          alt=""
        />

        <Swiper
          pagination={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <p className="testimonials-text">
              “The LPGP Connect Conferences have been really good for meeting
              people and staying up to date with new trends.”
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <p className="testimonials-text">
              “I have enjoyed being able to get back to in-person networking at
              The LPGP Connect Conferences and re-connect back in person and all
              of the discussions have been thoroughly interesting and well
              thought out.”
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="testimonials-text">
              “The LPGP Connect are quality events and are my must-go event. The
              contents, the team, the speakers, the seniority level, the
              discussions provided great over view of trends issues, and
              opportunities that lie ahead of us. ”
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="testimonials-text">
              “Great networking and such interesting topics, really enjoyed it!”
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}

export default Testimonials;
