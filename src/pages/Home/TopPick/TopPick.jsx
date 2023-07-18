import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TopPick = () => {
    const toysData = [
        {
            imageUrl:
                'https://img.freepik.com/free-photo/little-kid-playing_23-2148836333.jpg?w=900&t=st=1689675029~exp=1689675629~hmac=edceb7a43e70acae2651a39a40050b2fb92c58df55fc2314d21276b0194b237d',
            name: 'Lego-Education',
            description: 'Explore the world of adventure with our thrilling toy collection for young explorers.',
            buttons: ['View Details', 'Buy Now'],
        },
        {
            imageUrl:
                'https://img.freepik.com/free-photo/portrait-childrens-playing_23-2148836246.jpg?w=900&t=st=1689675034~exp=1689675634~hmac=f2151cc33ebd1365b2fdbcf8c01bc2c83e05e6ef59ac19d320b47a92328597c4',
            name: 'Lego-Duplo',
            description: 'Ignite creativity and imagination with our colorful building block sets for all ages.',
            buttons: ['View Details', 'Buy Now'],
        },
        {
            imageUrl:
                'https://img.freepik.com/free-photo/portrait-childrens-playing_23-2148836251.jpg?w=900&t=st=1689675032~exp=1689675632~hmac=8742d863e6f6193e402a80ff2547664141031c48d0d113b62f2d4046bf06c936',
            name: 'Lego-Batman',
            description: 'Discover a galaxy of fun with our space-themed playsets and action figures.',
            buttons: ['View Details', 'Buy Now'],
        },
    ];

    return (
        <div className='mt-24 mb-10'>
            <div className="mb-16 text-center">
                <h1 className="text-5xl font-bold underline mb-3">Last Seven Days Top Picks</h1>
                <p className="text-gray-600 text-lg">Discover the most popular toys from the last week.</p>
            </div>
            <div className="relative">
                <Carousel
                    showThumbs={false}
                    showArrows={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    showStatus={false}
                    stopOnHover={false}
                    transitionTime={1000}
                    swipeable={false}
                    renderIndicator={(onClickHandler, isSelected, index, label) => (
                        <button
                            type="button"
                            className={`carousel-indicator ${isSelected ? 'opacity-100' : 'opacity-50'}`}
                            onClick={onClickHandler}
                            key={index}
                            title={label}
                            style={{ background: isSelected ? '#2563EB' : '#CBD5E0' }}
                        />
                    )}
                >
                    {toysData.map((toy, index) => (
                        <div key={index}>
                            <img src={toy.imageUrl} alt={toy.name} className="w-100 h-100 object-cover" />
                            <div className="p-4">
                                <h2 className="text-4xl font-bold mb-2">{toy.name}</h2>
                                <p className="text-sm text-gray-600 mb-4">{toy.description}</p>
                                <div className="flex justify-center space-x-4">
                                    {toy.buttons.map((button, buttonIndex) => (
                                        <button
                                            key={buttonIndex}
                                            className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
                                        >
                                            {button}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default TopPick;
