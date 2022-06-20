import Navbar from 'react-bootstrap/Navbar'
import { Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../assets/images/Dalio.png'
import Image from 'next/image'
import Style from '../styles/Navbar.module.css'


export default function Navbars() {
    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand}  expand={expand} className={Style.nav}>
                    <Container fluid >
                        <Navbar.Brand href="#"> <Image
                            src={Logo}
                            alt="Picture of the author"
                            width={80}
                        /></Navbar.Brand>
                        <ul className={Style.menu}>
                            <a href='/'><li>About Us</li></a>
                            <a href='/'><li>What we do</li></a>
                            <a href='/'><li>Our work</li></a>
                            <a href='/'><li>Blog</li></a>
                            <a href='/'><li>Contact</li></a>
                        </ul>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <h1> Dalio</h1>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link className={Style.navlink} href="/">About Us</Nav.Link>
                                    <Nav.Link className={Style.navlink} href="/">What we do</Nav.Link>
                                    <Nav.Link className={Style.navlink} href="/">Our work</Nav.Link>
                                    <Nav.Link className={Style.navlink} href="/">Blog</Nav.Link>
                                    <Nav.Link className={Style.navlink} href="/">Contact</Nav.Link>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
