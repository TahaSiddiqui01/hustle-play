import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarCompo";
import NavbarCompo from "./components/Navbar/NavbarCompo";
import Home from "./components/Home/Home.jsx";
import Event from "./components/Event/Event.jsx";
import AllEvents from "./components/AllEvents/AllEvents.jsx";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Test from "./components/Test/TestCompo";
import CheckOut from "./components/Test/TestCompo";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess.jsx";
import GoogleMap from "./components/GoogleMap/GoogleMap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        {/* <NavbarCompo/> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/event/:id" element={<Event />}></Route>
          <Route path="/all-events" element={<AllEvents />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
          <Route path="/success" element={<PaymentSuccess />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
