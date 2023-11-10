import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../assets/Style.css";

function Testimonial() {
    return (
        <>
            <section className="testimonial-carousel" id="testimonial">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center my-5">
                            <h1 className="fw-bold">Testimonial</h1>
                            <p className="mt-3">
                                Berbagai review positif dari para pelanggan kami
                            </p>
                        </Col>
                    </Row>
                    <Carousel controls={true}>
                        <Carousel.Item>
                            <div className="testimonial-card">
                                <div className="row">
                                    <div className="col-lg-3 text-lg-center">
                                        <img
                                            src="images/img_photo.png"
                                            className="testimonial-image"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="testimonial-content">
                                            <img
                                                src="images/Rate.png"
                                                alt=""
                                                className="testimonial-rating"
                                            />
                                            <p className="testimonial-text">
                                                "Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod lorem ipsum dolor sit
                                                amet, consectetur adipiscing
                                                elit, sed do eiusmod lorem ipsum
                                                dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod"
                                            </p>
                                            <p className="fw-bold testimonial-author">
                                                John Dee 32, Bromo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial-card">
                                <div className="row">
                                    <div className="col-lg-3 text-lg-center">
                                        <img
                                            src="images/img_photo.png"
                                            className="testimonial-image"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="testimonial-content">
                                            <img
                                                src="images/Rate.png"
                                                alt=""
                                                className="testimonial-rating"
                                            />
                                            <p className="testimonial-text">
                                                "Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod lorem ipsum dolor sit
                                                amet, consectetur adipiscing
                                                elit, sed do eiusmod lorem ipsum
                                                dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod"
                                            </p>
                                            <p className="fw-bold testimonial-author">
                                                John Dee 32, Bromo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        {/* Add more carousel items with customized content as needed */}
                    </Carousel>
                </Container>
            </section>
        </>
    );
}

export default Testimonial;
