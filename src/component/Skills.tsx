import { Col, Container, Row } from "react-bootstrap";

import colorSharp from "../assets/img/color-sharp.png";
import { strings } from "../Utils/helper";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  useState } from "react";
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
};
const skillsSet = {
  React: {
    title: "React",
    proficiency: 95,
  },
  NextJs: {
    title: "NextJs",
    proficiency: 95,
  },
  Javascript: {
    title: "Javascript",
    proficiency: 90,
  },
  Typescript: {
    title: "Typescript",
    proficiency: 90,
  },
};
export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(1);
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

              <MultiCarousel
                // autoPlay={true}
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                beforeChange={(prev, { currentSlide, deviceType }) => {
                  if (deviceType === "desktop") {
                    setActiveIndex(
                      (prev + 1) % Object.values(skillsSet).length
                    );
                  }
                }}
                className=""
                // containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {Object.values(skillsSet).map((skill, index) => {
                  return (
                    <ProgressCircle
                      percentage={skill.proficiency}
                      title={skill.title}
                      key={index}
                      active={activeIndex === index}
                    />
                  );
                })}
              </MultiCarousel>
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
  active: boolean;
}

function ProgressCircle({ percentage, title, active }: progressCircleProps) {
  return (
    <div className="item-container">
      <div
        className="item"
        style={{
          scale: `${active ? 1 : 0.7}`,

          transition: "all 0.3s",
        }}
      >
        <CircularProgressbar
          styles={{
            root: {
              width: "30%",
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
          circleRatio={percentage / 100}
          value={percentage}
          text={`${percentage}%`}
        />
        <h5>{title}</h5>
      </div>
    </div>
  );
}
