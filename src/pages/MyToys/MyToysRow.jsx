import { Link } from "react-router-dom";


const MyToysRow = ({ toy, handleDelete }) => {

    const { _id, picture, name, sellerName, email, subCategory, price, rating, detail, quantity } = toy;




    return (
        <>
            <tr>
                <th>
                    <div>
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                picture && <img src={picture} alt="" />
                            }
                        </div>
                    </div>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="font-bold">{name}</div>
                    </div>
                </td>
                <td> {sellerName} </td>
                <td>{email}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td>{detail}</td>
                <td>
                    <Link to={`/updateToy/${_id}`}><button className="btn btn-warning me-2">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
                </td>
            </tr>


        </>
    );
};

export default MyToysRow;