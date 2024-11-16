import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "/src/assets/img/logo_dark.png";
import linkedin from "../assets/img/nav-icon1.svg";
import github from "../assets/img/nav-icon4.svg";
import SocialIcon from "./SocialIcon";
export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    //? like this we are removing event lister when the component gets unmounted
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function linkClass(link: string) {
    if (activeLink === link) {
      return "active navbar-link";
    } else {
      return "navbar-link";
    }
  }

  function onUpdateActiveLink(value: string) {
    setActiveLink(value);
  }

  function moveToAnchor(ref: string) {
    const element = document.getElementById(ref);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => onUpdateActiveLink("home")}
        >
          <img
            src={logo}
            className="logo"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={linkClass("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={linkClass("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={linkClass("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <SocialIcon
                href="https://www.linkedin.com/in/ali-khoshbakht/"
                title="Linkedin"
                icon={linkedin}
              />
              <SocialIcon
                href="https://github.com/sksbkt"
                title="Github"
                icon={github}
              />
            </div>
            <Button
              className="vvd"
              onClick={() => {
                moveToAnchor("contact");
              }}
            >
              <span>Lets connect</span>
            </Button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
