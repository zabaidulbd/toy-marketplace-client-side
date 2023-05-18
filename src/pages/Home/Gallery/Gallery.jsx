

const Gallery = () => {
    return (

        <div className="carousel w-full rounded-lg">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/kid-playing-with-toy-train_23-2148131040.jpg?w=996&t=st=1684400006~exp=1684400606~hmac=8b6c371de8058fb18f5c2893be6fab6675361d5798022990cd876965de62d537" className="w-full" />
                <div className="absolute bottom-72 left-96">
                    <h2 className='text-5xl text-black'>Lego Cars</h2>
                    <p className='text-black py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-outline btn-info mr-3">Discover More</button>
                    <button className="btn btn-outline btn-info">Latest Products</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-vector/toy-constructor-isometric-blocks_1284-26315.jpg?t=st=1684399389~exp=1684399989~hmac=6700f0a6dd3a44384a3a93ab7259029b824ce519a8e81b759efb3f72c3d2e703" className="w-full" />
                <div className="absolute bottom-72 left-96">
                    <h2 className='text-5xl text-black'>Lego Architecture</h2>
                    <p className='text-black py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-outline btn-info mr-3">Discover More</button>
                    <button className="btn btn-outline btn-info">Latest Products</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-vector/city-buildings-concept_1284-19353.jpg?w=740&t=st=1684400222~exp=1684400822~hmac=a3783ed77ec2f0312c841d29e00af3352e6551ed8978b798fcada134fe5796be" className="w-full" />
                <div className="absolute bottom-72 left-96">
                    <h2 className='text-5xl text-black'>Lego City</h2>
                    <p className='text-black py-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-outline btn-info mr-3">Discover More</button>
                    <button className="btn btn-outline btn-info">Latest Products</button>
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
                    <button className="btn btn-outline btn-info mr-3">Discover More</button>
                    <button className="btn btn-outline btn-info">Latest Products</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Gallery;