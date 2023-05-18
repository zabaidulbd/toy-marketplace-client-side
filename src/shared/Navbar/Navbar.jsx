import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }


    return (
        <div className="navbar bg-base-300 mt-10">
            <div className="flex-1">
                <div>
                    <img className="w-36 rounded-full me-5" src="https://img.freepik.com/free-vector/construction-background-design_1343-2.jpg?w=740&t=st=1684385038~exp=1684385638~hmac=1a9d333d2e08e353a4a512bab8f7a56a81a751eb664067e63751fbd53df949af" alt="" />
                </div>
                <div><h1 className="text-5xl">Lego-Store</h1></div>
                <div>
                    <span className="text-2xl ms-5">
                        <Link to={'/'}>Home</Link>
                    </span>
                </div>
                <div>
                    <span className="text-2xl mx-3"><Link to={'/'}>All-Toys</Link></span>
                </div>
                <div>
                    <span className="text-2xl"><Link to={'/blog'}>Blog</Link></span> </div>
            </div>

            <div className="flex-none gap-2">
                <span className="text-2xl mx-3">
                    <Link to={'/'}>Add a Toy</Link>
                </span>
                <span className="text-2xl"><Link to={'/'}>My Toys</Link></span>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-red-folder_1298-179.jpg?w=740&t=st=1683177286~exp=1683177886~hmac=c440209e285a379ced974449f84436bdcc297217e39170b08f534dfe769c131d" />
                    </div>
                </label>

                {
                    user ?
                        <button className="btn btn-active btn-ghost" onClick={handleSignOut}>Log-Out</button> :
                        <Link to={'/login'}><button className="btn btn-active btn-ghost">Login</button></Link>
                }

            </div>
        </div>

    );
};

export default Navbar;