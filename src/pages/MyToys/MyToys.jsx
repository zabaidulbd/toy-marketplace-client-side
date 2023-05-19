import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import MyToysRow from "./MyToysRow";


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
            <h1 className="text-center font-bold text-5xl my-10">List of My Total Toys</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>picture</th>
                            <th>Toy-Name</th>
                            <th>Seller-Name</th>
                            <th>Email</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToysRow key={toy._id} toy={toy}></MyToysRow>)
                        }

                    </tbody>


                </table>
            </div>






            <Footer></Footer>
        </div>
    );
};

export default MyToys;