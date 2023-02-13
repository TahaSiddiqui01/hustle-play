import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="footer-sec py-5">
        <Container
          style={{
            borderBottom: "1px solid #36383b",
          }}
          className="d-flex footer-top justify-content-between "
        >
          <div>
            <h2 style={{color:"white"}} className="sub-heading my-2">About LPGP Connect</h2>
            <p
              style={{
                width: "87%",
              }}
              className="footerColor para-about"
            >
              LPGP Connect specialise in hosting interactive and engaging
              investor forums in the global private debt and private equity
              community. We work with firms of all sizes and specialisations to
              uncover the latest trends in the industry. Our goal is to bring
              together investors and fund managers to provide unrivalled
              networking experiences. We host sector specific events which aim
              to inform our clients with the latest news and trends through
              peer-led networking conferences.
            </p>
          </div>

          <div>
            <p className="footerColor">
              Email: <br /> <br /> info@lpgconnect.com
            </p>
            <p className="footerColor">
              Phone: <br /> <br /> +44 203 044 2790
            </p>

            <div className="my-5 d-flex">
              <AiFillTwitterCircle className="icons" />
              <AiFillLinkedin className="icons" />
            </div>
          </div>
        </Container>

        <Container className="d-flex flex-wrap justify-content-between footer-bootom my-4 align-items-center">
          <div className="d-flex flex-wrap footer-bootom-left justify-content-center align-items-center">
            <img
              src="https://lpgpconnect.com/wp-content/uploads/2021/11/LPGP2-1-1.png"
              alt=""
            />
            <p className="m-0 mx-3 my-1 normal-text">
              Copyright © 2020 - LPGP Connect
            </p>
          </div>
          <div className="my-1 footer-bootom-right">
            <a
              target="_blank"
              className="link"
              href="https://lpgpconnect.com/terms-conditions/"
            >
              Terms & Conditions
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
