import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";


const AddToy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
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
        const toyDetails = {

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

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Toy added successfully');
                    form.reset();

                }
            })

    }

    return (
        <>
            <Navbar></Navbar>
            <h1 className="font-bold text-center text-5xl text-orange-400 mt-20 mb-10">Add Your Toy</h1>
            <form onSubmit={handleAddToy} className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-orange-400">Picture Url Of the Toy</span>
                        </label>
                        <input type="text" placeholder="picture url" name="picture" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-orange-400">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-orange-400">Seller Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-orange-400">Sub-Category</span>
                        </label>
                        <select className="input input-bordered font-bold text-orange-400" name="subCategory">
                            <option value="lego-cars">Lego Cars</option>
                            <option value="lego-city">Lego City</option>
                            <option value="lego-star-wars">Lego Star Wars</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-orange-400">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-orange-400 font-bold">Ratings</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-orange-400">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-orange-400">Details Description</span>
                        </label>
                        <input type="text" name="detail" placeholder="detail" className="input input-bordered" />

                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-warning btn-block" type="submit" value="Add Toy" />
                </div>
            </form>
            <Footer></Footer>
        </>
    );
};

export default AddToy;