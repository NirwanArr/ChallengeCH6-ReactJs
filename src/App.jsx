import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Cars from "./pages/CarsPage";
import { CarProvider } from "./store/CarContext";
import Banner from "./components/Banner";

function App() {
    return (
        <>
                <Router>
                    <Navigation />
                    <Banner />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/cars" element={<Cars />} />
                    </Routes>
                    <Footer />
                </Router>
        </>
    );
}

export default App;
