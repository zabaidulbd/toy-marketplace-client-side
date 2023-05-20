

const AllToysRow = ({ singleToy }) => {

    const { name, sellerName, subCategory, price, quantity } = singleToy;


    return (
        <>
            <tr>
                <td>{sellerName}</td>
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <button className="btn btn-accent">View Details</button>
                </td>
            </tr>
        </>
    );
};

export default AllToysRow;