
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';

const ToyDetails = () => {

    const detailsToy = useLoaderData();
    const { picture, name, price, rating, detail, quantity, sellerName, email } = detailsToy;

    return (
        <>
            <Navbar></Navbar>
            <h1 className='text-center font-bold text-3xl mt-10 mb-20'>Details of a Single Toy</h1>
            <div className="card w-96 bg-base-100 shadow-xl my-10 mx-auto">
                <figure><img src={picture} alt="Toy Image" /></figure>
                <div className='card-body'>
                    <div className='flex justify-between'>
                        <h2 className="card-title">Name : {name}</h2>
                        <h2 className="card-title">Seller name : {sellerName}</h2>
                    </div>
                    <p className='text-center font-bold'>Email : {email}</p>
                    <div className='flex justify-between text-center'>
                        <p><strong>Price :</strong> {price}</p>
                        <p><strong>Rating :</strong> {rating}</p>
                        <p><strong>Quantity :</strong> {quantity}</p>
                    </div>
                    <p className='text-center'><strong>Details :</strong>  {detail}</p>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default ToyDetails;