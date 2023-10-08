import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { strings } from "../Utils/helper";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return <section className="skill" >
    <Container>
      <Row>
        <Col>
          <div className="skill-bx px-5 position-relative">
            {/* //? we are using this technique to move scroll to a more reasonable position */}

            <div className="position-absolute" style={{ transform: 'translateY(-20vh)' }} id="skills"></div>
            <h2>Skills</h2>
            <p>{strings.skills_desc}</p>
            <Carousel
              className="skill-slider"
              autoPlay={true}
              autoPlaySpeed={5000}
              responsive={responsive}
              pauseOnHover={true}
              infinite={true}
              afterChange={(s, z) => { }}
            >
              <div className="item">
                <img src={meter1} alt="image" />
                <h5>Web development</h5>
              </div>
              <div className="item">
                <img src={meter2} alt="image" />
                <h5>Web design</h5>
              </div>
              <div className="item">
                <img src={meter3} alt="image" />
                <h5>UX/UI</h5>
              </div>
              {/* <div className="item">
                <img src={meter1} alt="image" />
                <h5>Mobile app development</h5>
              </div> */}
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
    <img className="background-image-left" src={colorSharp} alt={colorSharp} />
  </section >;
}
