import { Link } from "react-router-dom";


const AllToysRow = ({ singleToy }) => {

    const { _id, name, subCategory, price, quantity } = singleToy;


    return (
        <>
            <tr className="font-semibold">
                <td></td>
                <td></td>
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td></td>
                <td>{quantity}</td>
                <td>
                    <Link to={`/toyDetails/${_id}`}><button className="border-solid bg-gray-300 hover:bg-gray-400 p-4">Details</button></Link>

                </td>
            </tr>
        </>
    );
};

export default AllToysRow;