import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (
        <div data-aos="fade-up" className="navbar bg-slate-400">
            <div className="flex-1">
                <div>
                    <img className="w-32 rounded-full mx-5" src="https://img.freepik.com/free-vector/team-work-concept-with-flat-design_23-2147840465.jpg?w=740&t=st=1684627779~exp=1684628379~hmac=c5ad0881f2b8c3560c927fafe58cf621c4f9b75f85ffd29fb2015e1f0356ae17" alt="" />
                </div>
                <div><h1 className="text-5xl font-bold text-blue-50 mr-5">Lego-Store</h1></div>
                <div>

                    <p className="text-xl font-bold text-blue-50">
                        <ActiveLink to={'/'}>Home</ActiveLink>
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold text-blue-50 mx-5"><ActiveLink to={'/totalToys'}>All-Toys</ActiveLink></p>
                </div>
                <div>
                    <span className="text-xl font-bold text-blue-50"><ActiveLink to={'/blog'}>Blog</ActiveLink></span> </div>
            </div>

            <div className="flex-none gap-2">
                {
                    user?.email ?
                        <>
                            <span className="text-xl font-bold text-blue-50">
                                <ActiveLink to={'/addToy'}>Add a Toy</ActiveLink>
                            </span>
                            <span className="text-xl font-bold text-blue-50 mx-4"><ActiveLink to={'/toys'}>My Toys</ActiveLink></span>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full mx-2">
                                    <img src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-red-folder_1298-179.jpg?w=740&t=st=1683177286~exp=1683177886~hmac=c440209e285a379ced974449f84436bdcc297217e39170b08f534dfe769c131d" title="Zabaidul Islam" />
                                </div>
                            </label>

                            <button className="btn btn-outline btn-accent me-10" onClick={handleSignOut}><span className="text-white">Log-Out</span></button>
                        </> :
                        <Link to={'/login'}><button className="btn btn-outline btn-accent me-10"><span className="text-white">Login</span></button></Link>
                }

            </div>
        </div>

    );
};

export default Navbar;