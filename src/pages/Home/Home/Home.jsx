import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Gallery from "../Gallery/Gallery";
import PopularToys from "../PopularToys/PopularToys";
import ReviewCard from "../ReviewCard/ReviewCard";
import Testimonials from "../Testimonials/Testimonials";
import TopPick from "../TopPick/TopPick";
import UpcomingToys from "../UpcomingToys/UpcomingToys";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <PopularToys></PopularToys>
            <TopPick></TopPick>
            <UpcomingToys></UpcomingToys>
            <Testimonials></Testimonials>
            <ReviewCard></ReviewCard>
            <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
        </div>
    );
};

export default Home;