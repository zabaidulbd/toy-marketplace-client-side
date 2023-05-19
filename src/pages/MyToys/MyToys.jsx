import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";


const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);


    const url = `http://localhost:5000/toys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])


    return (
        <div>
            <Navbar></Navbar>
            <h1>my all toys : {toys.length}</h1>
            <Footer></Footer>
        </div>
    );
};

export default MyToys;