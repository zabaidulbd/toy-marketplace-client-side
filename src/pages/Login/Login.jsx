import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { FaGooglePlus } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Login = () => {
    const [logInError, setLogInError] = useState();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
                setLogInError('');
                form.reset();
            })
            .catch(error => {
                setLogInError(error.message);
            })
    }


    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleLoggedInUser = result.user;
                console.log(googleLoggedInUser)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <>
            <Navbar></Navbar>
            <form onSubmit={handleLogin}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 ms-40">
                    <h1 className="text-center text-3xl font-bold mt-10 text-pink-500">Please Login!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-pink-600">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-pink-600">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className="label-text-alt text-sm text-pink-500">Do not have account ? <span className="text-black font-bold"><Link to={'/register'}>Register</Link></span> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleLogIn} className="btn btn-outline btn-secondary"> <FaGooglePlus style={{ fontSize: '30px', marginRight: '10px' }}></FaGooglePlus>Log In</button>
                            <input className="btn btn-secondary mt-2" type="submit" value="Login" />
                        </div>
                        <p className='text-red-600'>{logInError}</p>
                    </div>

                </div>
            </form>
            <Footer></Footer>
        </>


    );
};

export default Login;