import { Col, Container, Row } from "react-bootstrap";
import "../assets/Style.css";

function CarRental() {
    return (
        <>
            <section className="sewa">
                <Container>
                    <Row>
                        <Col
                            lg={12}
                            className="text-lg-center text-center py-5"
                        >
                            <h1 className="text-white fw-bold">
                                Sewa Mobil di Tangerang Sekarang
                            </h1>
                            <p className="text-white pt-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{" "}
                            </p>
                            <a
                                href="/cars"
                                style={{
                                    width: "fit-content",
                                    height: "auto",
                                    backgroundColor: "#32cd32",
                                }}
                                type="button"
                                className="btn text-white"
                            >
                                Mulai Sewa Mobil
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default CarRental;
