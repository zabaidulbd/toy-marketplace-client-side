import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);
    return (

        <div data-aos="fade-up" className="my-20">
            <h1 className="text-center font-bold text-5xl text-orange-400 mb-10">Lego Toys Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ms-7">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/girls-with-book-colorful-toys_23-2147663359.jpg?w=996&t=st=1684624986~exp=1684625586~hmac=ea104cda5b23ae09c51ce6c243a32fbf8eb1b701d639fe75718be502f1a98ce5" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-orange-400">Lego Sets</h2>
                        <div className="card-actions">
                            <button className="btn btn-warning"><span className="text-white">Buy Now</span> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/cute-toddler-with-train_23-2147663387.jpg?w=996&t=st=1684625023~exp=1684625623~hmac=885edcccc1f4cdce9f831240be03d90d143d70b9bf6ebbf6b3bac7590b88557c" alt="lego-sets" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-orange-400">Lego Architecture</h2>
                        <div className="card-actions">
                            <button className="btn btn-warning"><span className="text-white">Buy Now</span> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/blonde-girl-putting-toy-mouth_23-2147664287.jpg?w=996&t=st=1684625006~exp=1684625606~hmac=e24ef54e270390cfb467d16ec5e661cab83e02ea4846d24613f4c19e3d9e6d51" alt="lego-architecture" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-orange-400">Lego Star War</h2>
                        <div className="card-actions">
                            <button className="btn btn-warning"><span className="text-white">Buy Now</span> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=996&t=st=1684624900~exp=1684625500~hmac=275ccd2f3267ca1473eafe601a494d295704da180ce86d71a08dfce25d121236" alt="lego-cars" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-orange-400">Lego Cars</h2>
                        <div className="card-actions">
                            <button className="btn btn-warning"><span className="text-white">Buy Now</span> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/child-playing-with-book-playing-room_1157-26680.jpg?w=996&t=st=1684624845~exp=1684625445~hmac=076972b00f506d42cede83b0555d880ea2c10f54ec27a5fa630621ae28498d59" alt="lego-city" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-orange-400">Lego City</h2>
                        <div className="card-actions">
                            <button className="btn btn-warning"><span className="text-white">Buy Now</span> </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/free-photo/children-playing-with-lego-playing-room_1157-26661.jpg?w=996&t=st=1684624836~exp=1684625436~hmac=6d0c55b1c6cb8653c758174ad401abc395dddfd97c0338d8dcea5ee9090d467b" alt="lego-sets" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-orange-400">Lego Sets</h2>
                        <div className="card-actions">
                            <button className="btn btn-warning"><span className="text-white">Buy Now</span> </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Gallery;