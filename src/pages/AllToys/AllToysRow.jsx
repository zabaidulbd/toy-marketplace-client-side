import { Link } from "react-router-dom";


const AllToysRow = ({ singleToy }) => {

    const { _id, name, sellerName, subCategory, price, quantity } = singleToy;


    return (
        <>
            <tr>
                <td>{sellerName}</td>
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <Link to={`/toyDetails/${_id}`}><button className="btn btn-accent">View Details</button></Link>

                </td>
            </tr>
        </>
    );
};

export default AllToysRow;