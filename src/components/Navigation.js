import React, { useState } from "react";

import { Navbar, Container, Nav, Offcanvas, Button } from "react-bootstrap";

import "../assets/Style.css";

const Navigation = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleOffcanvasShow = () => setShowOffcanvas(true);
    const handleOffcanvasHide = () => setShowOffcanvas(false);
    return (
        <>
            <Navbar className="main" expand="lg">
                <Container>
                    <Navbar.Brand href="index.html">
                        <img
                            src="images/logo.png"
                            alt=""
                            style={{ width: "100px", height: "34px" }}
                        />
                    </Navbar.Brand>
                    <Button
                        className="btn btn-white navbar-toggler"
                        type="button"
                        onClick={handleOffcanvasShow}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <Nav className="d-none d-lg-flex">
                        <Nav.Link
                            href="#ourservices"
                            style={{ marginRight: "30px" }}
                        >
                            Our Services
                        </Nav.Link>
                        <Nav.Link href="#whyus" style={{ marginRight: "30px" }}>
                            Why Us
                        </Nav.Link>
                        <Nav.Link
                            href="#testimonial"
                            style={{ marginRight: "30px" }}
                        >
                            Testimonial
                        </Nav.Link>
                        <Nav.Link href="#faq" style={{ marginRight: "30px" }}>
                            FAQ
                        </Nav.Link>
                        <Button style={{ backgroundColor: "#32cd32" }}>
                            Register
                        </Button>
                    </Nav>
                </Container>

                <Offcanvas
                    show={showOffcanvas}
                    onHide={handleOffcanvasHide}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title
                            className="fw-bold"
                            style={{ marginLeft: "20px" }}
                        >
                            BCR
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="justify-content-end">
                        <Nav className="mr-2 mb-lg-0">
                            <Nav.Item className="mx-3 my-1">
                                <Nav.Link href="#ourservices">
                                    Our Services
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" mx-3 my-1">
                                <Nav.Link href="#whyus">Why Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-3 my-1">
                                <Nav.Link href="#testimonial">
                                    Testimonial
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-3 my-1">
                                <Nav.Link href="#faq">FAQ</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Button
                            className="mx-3 my-1"
                            style={{ backgroundColor: "#32cd32" }}
                        >
                            Register
                        </Button>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    );
};

export default Navigation;
