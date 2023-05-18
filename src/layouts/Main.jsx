import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import TitlePage from "../shared/TitlePage/TitlePage";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <TitlePage></TitlePage>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;