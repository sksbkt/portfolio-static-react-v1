import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.svg"
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
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={linkedin} alt="linkedIn" /></a>
                            <a href=""><img src={facebook} alt="facebook" /></a>
                            <a href=""><img src={instagram} alt="instagram" /></a>
                        </div>
                        <p>Copyright 2022.All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>);
}
