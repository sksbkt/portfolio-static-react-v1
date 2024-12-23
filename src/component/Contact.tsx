import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export default function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  interface statusProps {
    message: string;
    success: boolean;
  }
  const [formDetails, setFormDetails] =
    useState<typeof formInitialDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState<statusProps>({
    message: "",
    success: true,
  });

  interface responseProps {
    code?: number;
    message?: string;
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setButtonText("sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("send");
    let result: responseProps = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: result.message! });
    } else {
      setStatus({
        success: false,
        message: "something went wrong, please try again",
      });
    }
  }

  function onFormUpdate(category: string, value: string) {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  }

  return (
    <section
      className="contact"
      id="contact"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={contactImg}
              alt="Contact us"
            />
          </Col>
          <Col
            md={4}
            className="px-5"
          >
            <h2>In touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col
                  sm={6}
                  className="px-1"
                >
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col
                  sm={6}
                  className="px-1"
                >
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col
                  sm={6}
                  className="px-1"
                >
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col
                  sm={6}
                  className="px-1"
                >
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col className="px-1">
                  <textarea
                    value={formDetails.message}
                    rows={6}
                    placeholder="message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message ? (
                  <Col>
                    <p className={!status.success ? "danger" : "success"}>
                      {status.message}
                    </p>
                  </Col>
                ) : null}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
