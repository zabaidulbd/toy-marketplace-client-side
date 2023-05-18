

const TopPick = () => {
    return (
        <div className="mb-24">
            <div className="mb-10">
                <h1 className="text-center font-bold text-5xl">This Week Top Pick</h1>
            </div>

            <div className="carousel w-full rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/little-boy-playing-with-wooden-car_23-2148518124.jpg?w=900&t=st=1684405832~exp=1684406432~hmac=4c776aeea1fc46c7cfc6b0bcc59d9b376ebbbf09a82c581783fa73657bae4449" className="w-full" />
                    <div className="absolute bottom-72 left-96">
                        <h2 className='text-5xl text-black'>Lego for Kids</h2>
                        <p className='text-black py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Products</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/kid-playing-with-different-colorful-shapes_23-2148518053.jpg?w=900&t=st=1684406545~exp=1684407145~hmac=0bccf538b655a84cd74ec4a3a6a4392f73a47966c00450c596372fe401eeecfb" className="w-full" />
                    <div className="absolute bottom-72 left-96">
                        <h2 className='text-5xl text-black'>Lego Architecture</h2>
                        <p className='text-black py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Products</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/top-view-kid-playing-with-colorful-game_23-2148518055.jpg?w=900&t=st=1684406570~exp=1684407170~hmac=ab3b59760d2638f3769112038eb6d2a53efec392c510654536dd4392e2d1c2dc" className="w-full" />
                    <div className="absolute bottom-72 left-96">
                        <h2 className='text-5xl text-black'>Lego City</h2>
                        <p className='text-black py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Products</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/sticker-template-with-fighter-aircraft-isolated_1308-60870.jpg?w=1060&t=st=1684399638~exp=1684400238~hmac=47d3163e9320ed8572b7041b1679c5c99a92b012a721afd99ed535b3d36dc217" className="w-full" />
                    <div className="absolute bottom-72 left-96">
                        <h2 className='text-5xl text-black'>Lego Star Wars</h2>
                        <p className='text-black py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-error mr-3">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Products</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TopPick;