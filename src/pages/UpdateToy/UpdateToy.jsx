
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';



const UpdateToy = () => {
    const toy = useLoaderData();
    const { user } = useContext(AuthContext);

    const { _id, picture, name, subCategory, price, rating, detail, quantity } = toy;



    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const sellerName = user?.displayName;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const updatedToy = {

            picture,
            name,
            sellerName,
            email,
            subCategory,
            price,
            rating,
            quantity,
            detail

        }

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Toy Updated successfully');

                }
            })

    }



    return (
        <div>
            <Navbar></Navbar>
            <h1 className='font-bold text-5xl text-center text-orange-400 mt-20 mb-10'>Update Toy</h1>
            <form onSubmit={handleUpdateToy} className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Picture Url Of the Toy</span>
                        </label>
                        <input type="text" placeholder="picture url" name="picture" defaultValue={picture} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Seller Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Sub-Category</span>
                        </label>
                        <select className="input input-bordered text-orange-400 font-bold" name="subCategory" defaultValue={subCategory}>
                            <option value="lego-cars">Lego Cars</option>
                            <option value="lego-city">Lego City</option>
                            <option value="lego-star-wars">Lego Star Wars</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Ratings</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Details Description</span>
                        </label>
                        <input type="text" name="detail" defaultValue={detail} placeholder="detail" className="input input-bordered" />

                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-warning btn-block" type="submit" value="Update" />
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default UpdateToy;