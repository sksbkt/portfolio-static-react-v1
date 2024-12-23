import { Col, Container, Row } from "react-bootstrap";
import logo from "/src/assets/img/logo_dark.png";
import linkedin from "../assets/img/nav-icon1.svg";
import github from "../assets/img/nav-icon4.svg";
import SocialIcon from "./SocialIcon";
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* <MailChimpForm /> */}
          <Col sm={6}></Col>
          <Col
            sm={6}
            className="text-center text-sm-end align-items-end pt-3"
          >
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
            <Container className="row align-items-center mt-5 justify-content-end">
              <Col
                sm={2}
                className="align-top"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="copyRightsLogo d-inline-block align-top"
                />
              </Col>
              <Col
                sm={6}
                className="align-top"
              >
                <p>
                  Copyright{" "}
                  <a
                    className=""
                    href="/"
                  >
                    Quantic machines
                  </a>{" "}
                  2023.All rights reserved
                </p>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
