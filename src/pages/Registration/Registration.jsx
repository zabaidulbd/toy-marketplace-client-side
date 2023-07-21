import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lottie-2/animation_lkc6befu.json";


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
            <div className="flex justify-evenly">
                {/* Left side - Image */}
                <div className="w-1/2 max-w-2xl">
                    <Lottie className="w-full" animationData={groovyWalkAnimation} loop={true} />
                </div>
                {/* Right side - Registration Form */}
                <div className="w-1/2 max-w-md py-7">
                    <form onSubmit={handleRegister}>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <h1 className="text-center text-3xl font-bold mt-10">Please Register!</h1>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo Url</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <p className="label-text-alt text-sm">Already have account ? <span className="text-black font-bold"><Link to={'/login'}>Log In</Link></span> </p>
                                    </label>
                                </div>
                                <p className='text-red-600'>{registrationError}</p>
                                <div className="form-control mt-6">
                                    <input className="btn btn-neutral mt-2" type="submit" value="Register" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;