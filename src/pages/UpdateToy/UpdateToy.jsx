
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
            <h1 className='font-bold text-5xl text-center'>Update Toy</h1>
            <form onSubmit={handleUpdateToy} className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture Url Of the Toy</span>
                        </label>
                        <input type="text" placeholder="picture url" name="picture" defaultValue={picture} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <select className="input input-bordered" name="subCategory" defaultValue={subCategory}>
                            <option value="lego-cars">Lego Cars</option>
                            <option value="lego-city">Lego City</option>
                            <option value="lego-star-wars">Lego Star Wars</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="quantity" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details Description</span>
                        </label>
                        <input type="text" name="detail" defaultValue={detail} placeholder="detail" className="input input-bordered" />

                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Update Toy" />
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default UpdateToy;