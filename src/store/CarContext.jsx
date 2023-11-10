import React, { createContext, useContext, useReducer, useEffect } from "react";
import fetchCarsData from "../lib/CarsData";
const CarContext = createContext();
const initialState = {
    cars: [],
    filteredCars: [],
    filter: {
        tipeDriver: "default",
        tanggal: "",
        waktuJemput: "false",
        jumlahPenumpang: "",
    },
    loading: true,
};

const carReducer = (state, action) => {
    switch (action.type) {
        case "SET_CARS":
            return { ...state, cars: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "SET_FILTER":
            return { ...state, filter: action.payload };
        case "FILTER_CARS":
            const filtered = state.cars.filter((car) => {
                const tanggalJemputData = new Date(car.availableAt).getTime();
                const tanggal = new Date(
                    `${state.filter.tanggal} ${state.filter.waktuJemput}`
                ).getTime();
                const checkWaktu = tanggalJemputData >= tanggal;
                const availableAt =
                    state.filter.tipeDriver === "true" && car.available
                        ? true
                        : false;
                const notAvailableAt =
                    state.filter.tipeDriver === "false" && !car.available
                        ? true
                        : false;
                const penumpang = car.capacity >= state.filter.jumlahPenumpang;

                if (
                    state.filter.tipeDriver !== "default" &&
                    state.filter.tanggal !== "" &&
                    state.filter.waktuJemput !== "false" &&
                    state.filter.jumlahPenumpang >= 0
                ) {
                    return (
                        (availableAt || notAvailableAt) &&
                        checkWaktu &&
                        penumpang
                    );
                } else if (
                    state.filter.tipeDriver !== "default" &&
                    state.filter.jumlahPenumpang > 0
                ) {
                    return (availableAt || notAvailableAt) && penumpang;
                } else if (
                    state.filter.tanggal !== "" &&
                    state.filter.waktuJemput !== "false" &&
                    state.filter.jumlahPenumpang > 0
                ) {
                    return checkWaktu && penumpang;
                } else if (
                    state.filter.tanggal !== "" &&
                    state.filter.waktuJemput !== "false"
                ) {
                    return checkWaktu;
                } else if (state.filter.tipeDriver !== "default") {
                    return availableAt || notAvailableAt;
                } else {
                    return penumpang;
                }
            });
            return { ...state, filteredCars: filtered };
        default:
            return state;
    }
};

export const CarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(carReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch({ type: "SET_LOADING", payload: true });

                const cars = await fetchCarsData();
                dispatch({ type: "SET_CARS", payload: cars });
                dispatch({ type: "FILTER_CARS" });
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                dispatch({ type: "SET_LOADING", payload: false });
            }
        };
        fetchData();
    }, [state.filter, dispatch]);

    return (
        <CarContext.Provider value={{ state, dispatch }}>
            {children}
        </CarContext.Provider>
    );
};

export const useCar = () => {
    const context = useContext(CarContext);
    return context;
};
