import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { strings } from "../Utils/helper";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx px-5 position-relative">
              {/* //? we are using this technique to move scroll to a more reasonable position */}

              <div
                className="position-absolute"
                style={{ transform: "translateY(-20vh)" }}
                id="skills"
              ></div>
              <h2>Skills</h2>
              <p>{strings.skills_desc}</p>
              <Carousel
                className="skill-slider"
                autoPlay={false}
                autoPlaySpeed={5000}
                responsive={responsive}
                pauseOnHover={true}
                infinite={true}
                afterChange={(s, z) => {}}
              >
                <ProgressCircle
                  percentage={95}
                  title="Web development"
                />
                <ProgressCircle
                  percentage={95}
                  title="Web design"
                />
                <ProgressCircle
                  percentage={95}
                  title="UX/UI"
                />

                {/* <div className="item">
                <img src={meter1} alt="image" />
                <h5>Mobile app development</h5>
              </div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt={colorSharp}
      />
    </section>
  );
}

interface progressCircleProps {
  percentage: number;
  title: string;
}

function ProgressCircle({ percentage, title }: progressCircleProps) {
  return (
    <div
      className="item"
      // date-tooltip={title}
      title={title}
    >
      <CircularProgressbar
        styles={{
          root: {
            width: "50%",
            margin: "0 auto 15px auto",
          },
          path: {
            stroke: "#833397",
            transform: "rotate(45deg)",
            transformOrigin: "center center",
          },
          trail: {
            stroke: "transparent",
          },
          text: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
        strokeWidth={11}
        background={false}
        counterClockwise={true}
        circleRatio={0.95}
        value={percentage}
        text={`${percentage}%`}
      />
      <h5>{title}</h5>
    </div>
  );
}
