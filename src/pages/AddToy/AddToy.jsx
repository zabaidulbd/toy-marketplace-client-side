import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";


const AddToy = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <Navbar></Navbar>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture Url Of the Toy</span>
                        </label>
                        <input type="text" placeholder="picture url" name="picture" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />

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
                        <input type="text" name="subCategory" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details Description</span>
                        </label>
                        <input type="text" name="detail" placeholder="detail" className="input input-bordered" />

                    </div>
                </div>

                <div className="form-control my-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add Toy" />
                </div>
            </form>
            <Footer></Footer>
        </>
    );
};

export default AddToy;