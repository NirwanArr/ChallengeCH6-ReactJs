import React from "react";
import "../assets/Style.css";

function OurServices() {
    return (
        <section className="content" id="ourservices">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img
                            className="img"
                            style={{ height: "428px" }}
                            src="images/img_service.png"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-6" style={{ paddingTop: "15px" }}>
                        <h2
                            className="fw-bold fs-4"
                            style={{ paddingRight: "200px" }}
                        >
                            Best Car Rental for any kind of trip in Tangerang!
                        </h2>
                        <p style={{ fontSize: "14px", paddingRight: "30px" }}>
                            Sewa mobil di Tangerang bersama Binar Car Rental
                            jaminan harga lebih murah dibandingkan yang lain,
                            kondisi mobil baru, serta kualitas pelayanan terbaik
                            untuk perjalanan wisata, bisnis, wedding, meeting,
                            dll.
                        </p>
                        <div className="list-check">
                            <p>
                                <img
                                    src="images/Group_53.svg"
                                    style={{ marginRight: "16px" }}
                                    alt=" "
                                />{" "}
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </p>
                        </div>
                        <div className="list-check">
                            <p>
                                <img
                                    src="images/Group_53.svg"
                                    style={{ marginRight: "16px" }}
                                    alt=" "
                                />{" "}
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </p>
                        </div>
                        <div className="list-check">
                            <p>
                                <img
                                    src="images/Group_53.svg"
                                    style={{ marginRight: "16px" }}
                                    alt=" "
                                />{" "}
                                Sewa Mobil Jangka Panjang Bulanan
                            </p>
                        </div>
                        <div className="list-check">
                            <p>
                                <img
                                    src="images/Group_53.svg"
                                    style={{ marginRight: "16px" }}
                                    alt=" "
                                />{" "}
                                Gratis Antar - Jemput Mobil di Bandara
                            </p>
                        </div>
                        <div className="list-check">
                            <p>
                                <img
                                    src="images/Group_53.svg"
                                    style={{ marginRight: "16px" }}
                                    alt=" "
                                />{" "}
                                Layanan Airport Transfer / Drop In Out
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
