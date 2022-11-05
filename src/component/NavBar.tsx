import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedin from "../assets/img/nav-icon1.svg";
import facebook from "../assets/img/nav-icon2.svg";
import instagram from "../assets/img/nav-icon3.svg";
export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        function onScroll() {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        //? like this we are removing event lister when the component gets unmounted
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    function linkClass(link: string) {
        if (activeLink === link) {
            return 'active navbar-link';
        } else {
            return 'navbar-link';
        }
    }

    function onUpdateActiveLink(value: string) {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={linkClass('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={linkClass('skills')} >Skills</Nav.Link>
                        <Nav.Link href="#projects" className={linkClass('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href=""><img src={linkedin} alt="" /></a>
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href=""><img src={instagram} alt="" /></a>
                        </div>
                        <Button
                            className="vvd"
                            onClick={() => { console.log('connect'); }}
                        >
                            <span>Lets connect</span>
                        </Button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
