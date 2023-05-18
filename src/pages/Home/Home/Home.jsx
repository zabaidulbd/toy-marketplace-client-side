import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PopularToys from "../PopularToys/PopularToys";
import TopPick from "../TopPick/TopPick";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <PopularToys></PopularToys>
            <TopPick></TopPick>
        </div>
    );
};

export default Home;