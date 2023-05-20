import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Registration></Registration>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
    {
        path: '/addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
    },
    {
        path: '/updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
    },
    {
        path: '/toys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
    },
    {
        path: '/totalToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/toys')
    },
    {
        path: '/toyDetails/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
    }
]);
export default router;