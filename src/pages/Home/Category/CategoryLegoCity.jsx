
import 'react-tabs/style/react-tabs.css';


const CategoryLegoCity = ({ city }) => {

    const { picture, name, price, rating } = city;

    const handleLegoCity = () => {
        alert('You Have To Login First, Otherwise You Can not See Details')
    }

    return (
        <div className='flex justify-evenly mb-5'>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={picture} alt="Image Unavailable" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title ">Name: {name}</h2>
                        <div>
                            <p className='me-3'><strong>${price}</strong> <span className='text-blue-500 ps-2'>In Stock!</span> </p>
                            <p className=''><strong>Rating</strong> : <span className='font-semibold'>{rating}</span></p>
                        </div>
                        <div className="flex justify-end">
                            <button onClick={handleLegoCity} className="btn btn-info">Details</button>
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
                        <div className="card-body">
                            <h2 className="card-title ">Name: {name}</h2>
                            <div>
                                <p className='me-3'><strong>${price}</strong> <span className='text-blue-500 ps-2'>In Stock!</span> </p>
                                <p className=''><strong>Rating</strong> : <span className='font-semibold'>{rating}</span></p>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={handleLegoCity} className="btn btn-info">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryLegoCity;