import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import ApiService from "../api";

function Test() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // Handle real-time validation errors from the CardElement.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit} className="stripe-form">
        <div className="form-row">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-input"
            id="email"
            name="name"
            type="email"
            placeholder="jenny.rosen@example.com"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <label for="card-element">Credit or debit card</label>
          <CardElement id="card-element" onChange={handleChange} />
          <div className="card-errors" role="alert">
            {error}
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Submit Payment
        </button>
      </form>
    </Elements>
  );
}

export default Test;

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function CheckOut() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? <Message message={message} /> : <Test />;
// }
