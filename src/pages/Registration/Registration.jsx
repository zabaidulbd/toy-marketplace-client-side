import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Registration = () => {

    const [registrationError, setRegistrationError] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                navigate(from, { replace: true });
                setRegistrationError('');
                form.reset();
            })
            .catch(error => {
                setRegistrationError(error.message);
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleRegister}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 ms-40">
                    <h1 className="text-center text-3xl font-bold mt-10 text-orange-400">Please Register!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-400 font-bold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-400 font-bold">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-400 font-bold">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-orange-400 font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className="label-text-alt text-sm text-orange-400">Already have account ? <span className="text-black font-bold"><Link to={'/login'}>Log In</Link></span> </p>
                            </label>
                        </div>
                        <p className='text-red-600'>{registrationError}</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning mt-2" type="submit" value="Register" />
                        </div>
                    </div>

                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Registration;