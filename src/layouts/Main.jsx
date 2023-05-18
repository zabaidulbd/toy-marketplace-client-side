import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import TitlePage from "../shared/TitlePage/TitlePage";


const Main = () => {
    return (
        <div>
            <TitlePage></TitlePage>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;