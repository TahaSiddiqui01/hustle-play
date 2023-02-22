import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  let Navigate = useNavigate();

  swal("Payment Successfull!", "", "success");

  let btn = document.getElementsByClassName("swal-button")[0];

  btn.addEventListener("click", () => {
    Navigate("/");
  });

  return <>{/* <h1>Your payment has been successfull!</h1> */}</>;
}

export default PaymentSuccess;
