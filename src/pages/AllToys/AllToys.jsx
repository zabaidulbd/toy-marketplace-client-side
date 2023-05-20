
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const totalToys = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='font-bold text-5xl text-center mt-10 mb-20'> List of All Toys</h1>

            <div className="form-control mb-10 ms-96">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Seller-Name</th>
                            <th>Toy-Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            totalToys.map(singleToy => <AllToysRow key={singleToy._id} singleToy={singleToy}></AllToysRow>)
                        }

                    </tbody>

                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllToys;