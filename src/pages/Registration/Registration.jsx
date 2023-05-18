import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";


const Registration = () => {
    return (
        <div>
            <Navbar></Navbar>
            <form>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 ms-40">
                    <h1 className="text-center text-3xl font-bold mt-10">Please Register!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className="label-text-alt text-sm">Already have account ? <span className="text-red-400"><Link to={'/login'}>Log In</Link></span> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary mt-2" type="submit" value="Register" />
                        </div>
                    </div>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Registration;