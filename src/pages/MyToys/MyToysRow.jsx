

const MyToysRow = ({ toy }) => {

    const { picture, name, sellerName, email, subCategory, price, rating, detail, quantity } = toy;

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
                    <button className="btn btn-success me-2">Edit</button>
                    <button className="btn btn-warning">Delete</button>
                </td>


            </tr>


        </>
    );
};

export default MyToysRow;