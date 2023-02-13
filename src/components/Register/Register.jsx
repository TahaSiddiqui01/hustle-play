import React, { useEffect, useState } from "react";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsPinterest } from "react-icons/bs";
import "./Register.css";
import { Table } from "react-bootstrap";
import axios from "axios";

function Register() {
  const [specificEventState, setSpecificEventState] = useState({});
  const specificEvent = async () => {
    try {
      let response = await axios.get(
        `http://nofi.pythonanywhere.com/event-detail/${id}`
      );

      console.log("This is response: ", response?.data);
      setSpecificEventState(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    specificEvent();
  }, []);

  return (
    <>
      <div className="d-flex register-container justify-content-between ">
        <img
          src="https://lpgpconnect.com/wp-content/uploads/2022/10/Registration-15.png"
          alt=""
          className="m-4"
          style={{ height: "50%" }}
        />
        <div className="m-2">
          <p className="sub-heading ">Operational Fund Summit Luxembourg</p>
          <p className="price black-bold-text my-3">£1,495.00 - £2,595.00</p>
          <p className="semi-light-bold my-4">Delegate Pass</p>
          <p style={{ fontSize: "17px" }} className="my-2">
            Limited Partners
          </p>
          <p className="event-detail">
            {specificEventState?.event_register_text}
          </p>
          <p className="event-detail my-2">
            General Partners / Service Providers
          </p>

          <Table hover size="sm" className="my-4 table-responsive">
            <tbody className="table-body">
              <tr>
                <td>
                  <button>increment</button>
                </td>
                <td>
                  <a
                    className="anchor-tag"
                    href="https://lpgpconnect.com/product/operational-fund-summit-luxembourg-general-partners/"
                  >
                    Operational Fund Summit Luxembourg - General Partners
                  </a>
                </td>
                <td>
                  {" "}
                  <span>£1,495.00</span>
                </td>
              </tr>
            </tbody>
          </Table>

          <button className="addToCartBtn mb-5">Add to cart</button>
          <span className="gray-color my-2">Category: Europe 2023</span>
          <span
            style={{ fontWeight: "bold", display: "block" }}
            className="mt-4 mb-2"
          >
            Share this product
          </span>
          <div className="d-flex">
            <div className="shareBrand">
              <AiOutlineTwitter />
            </div>
            <div className="shareBrand">
              <BsFacebook />
            </div>
            <div className="shareBrand">
              <BsPinterest />
            </div>
            <div className="shareBrand">
              <BsLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
