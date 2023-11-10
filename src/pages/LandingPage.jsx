import CarRental from "../components/CarRental";
import FaqSection from "../components/FaqSection";
import OurServices from "../components/OurServices";
import Testimonial from "../components/Testimonial";
import Whyus from "../components/WhyUs";

function LandingPage() {
    return (
        <>
            <OurServices />
            <Whyus />
            <Testimonial />
            <CarRental />
            <FaqSection />
        </>
    );
}

export default LandingPage;
