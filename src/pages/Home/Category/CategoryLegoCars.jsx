

const CategoryLegoCars = ({ car }) => {

    const { picture, name, price, rating } = car;

    return (
        <div className='flex justify-evenly mb-5'>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={picture} alt="Image Unavailable" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <div className='flex justify-between'>
                            <p className='me-3'><strong>Price</strong> : {price}</p>
                            <p><strong>Rating</strong> : {rating}</p>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={picture} alt="Image Unavailable" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <div className='flex justify-between'>
                                <p className='me-3'><strong>Price</strong> : {price}</p>
                                <p><strong>Rating</strong> : {rating}</p>
                            </div>
                            <div className="card-actions">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryLegoCars;