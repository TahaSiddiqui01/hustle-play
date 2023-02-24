import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarCompo";
import NavbarCompo from "./components/Navbar/NavbarCompo";
import Home from "./components/Home/Home";
import Event from "./components/Event/Event";
import AllEvents from "./components/AllEvents/AllEvents";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Test from "./components/Test/TestCompo";
import CheckOut from "./components/Test/TestCompo";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
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
          <Route path="/map" element={<GoogleMap />}></Route>
          {/* <Route path="/test" element={<Test />}></Route> */}
          {/* <Route path="/test" element={<Test />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
