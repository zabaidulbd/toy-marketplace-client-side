import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Gallery from "../Gallery/Gallery";
import PopularToys from "../PopularToys/PopularToys";
import TopPick from "../TopPick/TopPick";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <PopularToys></PopularToys>
            <TopPick></TopPick>
            <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
        </div>
    );
};

export default Home;