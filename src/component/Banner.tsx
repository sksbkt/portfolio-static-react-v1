
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css'
import TrackVisibility from 'react-on-screen'

// useEffect(() => {

// }, []);

export default function Banner() {
    const [loopNum, setLoopNum] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const period: number = 2000;
    const toRotate = ['Ali Khoshbakht', 'a Web developer', 'a Web designer', 'a Mobile app developer', 'a UX/UI designer',]

    async function tick() {
        let i: number = loopNum % toRotate.length;

        let fullText: string = toRotate[i];
        let updateText: string = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);
        if (isDeleting) {


            // setDelta(preDelta => preDelta / 2);
            setDelta(100 - Math.random() * 80);
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(2000);
            // setIsDeleting(true);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            // setLoopNum(loopNum === toRotate.length - 1 ? 0 : loopNum + 1);
            setLoopNum(loopNum + 1);
            setDelta(200 - Math.random() * 100);
        }

    }

    useEffect(() => {
        let ticker = setInterval(async () => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} ml={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">
                                        welcome to my portfolio
                                    </span>
                                    <div className="animated-text-container">

                                        <h1 className="txt-rotate">{`hi I'm `}
                                        </h1>
                                        <span className="wrap">
                                            {text}
                                            <p className="caret">_</p>
                                        </span>
                                    </div>
                                    <p>
                                        I'm a software engineer with numerous years of experience in the field. My passion for technology and programming started at a very young age, and I have since dedicated my career to developing efficient and innovative software solutions that simplify complex problems. I specialize in designing, developing, and implementing software for various industries, including healthcare, finance, and manufacturing. My expertise ranges from full-stack development, database management, to cloud computing, and I have worked on projects of various sizes and complexities. I am committed to providing top-notch quality, innovative software solutions to help clients achieve their business objectives.
                                    </p>
                                </div>}
                        </TrackVisibility>
                        <Button onClick={() => console.log('connect')}  >Lets connect <BsArrowRightCircle /></Button>
                    </Col>
                    <Col xs={12} md={6} ml={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
