import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/Style.css";
import { useCar } from "../store/CarContext";

const Search = () => {
    const { state, dispatch } = useCar();

    const HandleTipeDriver = (e) => {
        dispatch({
            type: "SET_FILTER",
            payload: { ...state.filter, tipeDriver: e.target.value },
        });
    };

    const HandleTanggal = (e) => {
        dispatch({
            type: "SET_FILTER",
            payload: { ...state.filter, tanggal: e.target.value },
        });
    };

    const HandleWaktuJemput = (e) => {
        dispatch({
            type: "SET_FILTER",
            payload: { ...state.filter, waktuJemput: e.target.value },
        });
    };

    const HandleJumlahPenumpang = (e) => {
        dispatch({
            type: "SET_FILTER",
            payload: { ...state.filter, jumlahPenumpang: e.target.value },
        });
    };

    const handleFilter = () => {
        dispatch({ type: "FILTER_CARS" });
    };

    return (
        <section className="search">
            <Container>
                <Row>
                    <Col lg={12} col={12}>
                        <Row className="search__card mx-lg-5 py-3 px-4">
                            <Col lg="auto" xl={2} xxl={3} md="auto">
                                <Form.Label>Tipe Driver</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    id="tipeDriver"
                                    onChange={HandleTipeDriver}
                                    value={state.filter.tipeDriver}
                                >
                                    <option value="default">
                                        Pilih Tipe Driver
                                    </option>
                                    <option value="true">Dengan Supir</option>
                                    <option value="false">
                                        Tanpa Supir (Lepas Kunci)
                                    </option>
                                </Form.Select>
                            </Col>
                            <Col lg="auto" xl="auto" md="auto">
                                <Form.Label>Tanggal</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Pilih Tanggal"
                                    id="tanggal"
                                    onChange={HandleTanggal}
                                    value={state.filter.tanggal}
                                />
                            </Col>
                            <Col
                                lg="auto"
                                xl="auto"
                                md="auto"
                                className="search__time"
                            >
                                <Form.Label>Pilih Waktu</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    id="waktuJemput"
                                    onChange={HandleWaktuJemput}
                                    value={state.filter.waktuJemput}
                                >
                                    <option value="false" selected>
                                        Pilih Waktu
                                    </option>
                                    <option value="08:00">08.00 WIB</option>
                                    <option value="09:00">09.00 WIB</option>
                                    <option value="10:00">10.00 WIB</option>
                                    <option value="11:00">11.00 WIB</option>
                                    <option value="12:00">12.00 WIB</option>
                                </Form.Select>
                            </Col>
                            <Col lg="auto" xl="auto" md="auto">
                                <Form.Label className="fw-light">
                                    Jumlah Penumpang (optional)
                                </Form.Label>
                                <div className="input-group">
                                    <Form.Control
                                        type="search"
                                        placeholder="Jumlah Penumpang"
                                        id="jumlahPenumpang"
                                        onChange={HandleJumlahPenumpang}
                                        value={state.filter.jumlahPenumpang}
                                    />
                                    <span className="input-group-text bg-white">
                                        <img
                                            src="images/fi_users.png"
                                            width="20px"
                                            alt=""
                                        />
                                    </span>
                                </div>
                            </Col>
                            <Col lg={2} xl="auto" md={2} pt="4">
                                <Button
                                    style={{
                                        backgroundColor: "#32cd32",
                                        marginTop: "30px",
                                    }}
                                    id="load-btn"
                                    onClick={handleFilter}
                                >
                                    Cari Mobil
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Search;
