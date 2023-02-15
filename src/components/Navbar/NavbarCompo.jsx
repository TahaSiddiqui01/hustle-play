import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/hutleplaylogo.webp";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Navbar.css";

function NavbarCompo() {
  let location = useLocation();
  let Navigate = useNavigate();
  const {id} = useParams()

  return (
    <>
      <Navbar
        className={`${
          location.pathname === "/" || location.pathname === `/event/${id}`
            ? "home-nav"
            : "nav"
        }`}
        collapseOnSelect
        expand="lg"
      >
        <Link to="/">
          <img id="logo" src={Logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={`${
                location.pathname === "/" || location.pathname === `/event/${id}`
                  ? "home-nav-link"
                  : "nav-link"
              }`}
              onClick={() => Navigate("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${
                location.pathname === "/" || location.pathname === `/event/${id}`
                  ? "home-nav-link"
                  : "nav-link"
              }`}
              onClick={() => Navigate("/all-events")}
            >
              Events
            </Nav.Link>
            <Nav.Link
              className={`${
                location.pathname === "/" || location.pathname === `/event/${id}`
                  ? "home-nav-link"
                  : "nav-link"
              }`}
              onClick={() => Navigate("/gallery")}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              className={`${
                location.pathname === "/" || location.pathname === `/event/${id}`
                  ? "home-nav-link"
                  : "nav-link"
              }`}
              onClick={() => Navigate("/contact")}
            >
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <div className="mx-3 mt-5 home-top-text-container d-flex  align-items-center flex-column">
          <p className="clr-white text-heading">LPGP CONNECT</p>
          <p
            style={{ fontSize: "22px", letterSpacing: "3px" }}
            className="clr-white text-center"
          >
            We specialize in hosting industry leading events in the Global
            Private Debt & Equity Markets. Our conferences brings together
            senior level decision makers to drive the industry forward.{" "}
          </p>
          <button className="nav-btn">View Upcoming Conference</button>
        </div>
      </div> */}
    </>
  );
}

export default NavbarCompo;
