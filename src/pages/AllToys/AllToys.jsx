
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const totalToys = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='font-bold text-3xl text-center mt-10 mb-20'> List of All Toys</h1>
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