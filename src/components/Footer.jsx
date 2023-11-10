import { Col, Container, Row } from "react-bootstrap";
import "../assets/Style.css";

function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col md={3} className="mx-auto">
                            <p className="fw">
                                Jalan Suroyo No. 161 Mayangan Kota Probolonggo
                                672000{" "}
                            </p>
                            <p className="fw">binarcarrental@gmail.com </p>
                            <p>081-233-334-808</p>
                        </Col>
                        <Col md={3} className="mx-auto">
                            <p>Our services</p>
                            <p>Why Us</p>
                            <p>Testimonial</p>
                            <p>FAQ</p>
                        </Col>
                        <Col md={3} className="mx-auto">
                            <p className="fw-light">Connect With Us</p>
                            <p>
                                <img
                                    className="mx-1"
                                    src="images/icon_facebook.svg"
                                    alt=""
                                />
                                <img
                                    className="mx-1"
                                    src="images/icon_instagram.svg"
                                    alt=""
                                />
                                <img
                                    className="mx-1"
                                    src="images/icon_twitter.svg"
                                    alt=""
                                />
                                <img
                                    className="mx-1"
                                    src="images/icon_mail.svg"
                                    alt=""
                                />
                                <img
                                    className="mx-1"
                                    src="images/icon_twitch.svg"
                                    alt=""
                                />
                            </p>
                        </Col>
                        <Col md={3} className="mx-auto">
                            <p>Copyright Binar 2022</p>
                            <img src="images/logo.png" alt="" width="100px" />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
