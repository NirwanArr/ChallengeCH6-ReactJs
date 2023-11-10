import CarList from "../components/CarList";
import Search from "../components/Search";
import { CarProvider } from "../store/CarContext";

function Cars() {
    return (
        <>
            <CarProvider>
                <Search />
                <CarList />
            </CarProvider>
        </>
    );
}

export default Cars;
