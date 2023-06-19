import { Col, Container, Navbar, Row } from "react-bootstrap";
import MailChimpForm from "./MailchimpForm";
// import logo from "../assets/img/logo.svg"
import logo from "/src/assets/img/logo_dark.png"
import linkedin from "../assets/img/nav-icon1.svg";
import facebook from "../assets/img/nav-icon2.svg";
import instagram from "../assets/img/nav-icon3.svg";
export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailChimpForm />
                    <Col sm={6}>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={linkedin} alt="linkedIn" /></a>
                            <a href=""><img src={facebook} alt="facebook" /></a>
                            <a href=""><img src={instagram} alt="instagram" /></a>
                        </div>
                        <Container className="row align-items-center">
                            <Col sm={1} className="align-top">
                                <img src={logo} alt='logo' className="copyRightsLogo d-inline-block align-top" />
                            </Col>
                            <Col sm={6} className="align-top">
                                <p>
                                    Copyright <a className="" href="/" >
                                        Quantic machines
                                    </a> 2023.All rights reserved
                                </p>
                            </Col>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </footer >);
}
