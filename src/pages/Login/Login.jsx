import { Link } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { FaGooglePlus } from 'react-icons/fa';


const Login = () => {
    return (
        <>
            <Navbar></Navbar>
            <form>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 ms-40">
                    <h1 className="text-center text-3xl font-bold mt-10">Please Login!</h1>
                    <div className="card-body">
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
                                <p className="label-text-alt text-sm">Do not have account ? <span className="text-red-400"><Link to={'/register'}>Register</Link></span> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary"> <FaGooglePlus style={{ fontSize: '30px', marginRight: '5px' }}></FaGooglePlus>Log In</button>
                            <input className="btn btn-primary mt-2" type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </form>

            <Footer></Footer>
        </>


    );
};

export default Login;