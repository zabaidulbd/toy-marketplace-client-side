import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import MyToysRow from "./MyToysRow";


const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-eleven-server-lovat.vercel.app/myToy/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    }, [user]);


    const handleDelete = id => {
        const proceed = confirm('Are You Sure You Want To Delete This Toy');
        if (proceed) {
            fetch(`https://assignment-eleven-server-lovat.vercel.app/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('delete successfully')
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center font-bold text-5xl mt-20 mb-10 text-orange-400">List of My Total Toys</h1>
            <div className="form-control mb-10 ms-96">
                <div className="input-group">
                    <input type="text" placeholder="Sort by Name" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto w-full mb-10">
                <table className="table w-full text-orange-400 p-5">
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
                            toys.map(toy => <MyToysRow key={toy._id} toy={toy} handleDelete={handleDelete}></MyToysRow>)
                        }

                    </tbody>


                </table>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyToys;