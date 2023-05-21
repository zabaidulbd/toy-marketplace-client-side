import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularToys = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);
    return (
        <div data-aos="fade-up" className="my-24">
            <h1 className="text-center font-bold text-5xl mb-20 text-orange-400">Explore Popular Lego-Toys</h1>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382708.jpg?w=996&t=st=1684404160~exp=1684404760~hmac=80629a30ca3d87a0c2576c5f11a666874c5b973585f38c656823b848669f4660" className="w-full" />

                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382725.jpg?w=996&t=st=1684404175~exp=1684404775~hmac=ef91703d88371a3079b5716676e3f0d334b5ce07bd09d0da43f2a1535cb88ac4" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/children-playing-with-lego-playing-room_1157-26663.jpg?w=996&t=st=1684404182~exp=1684404782~hmac=372e9214e9499b9208ef5ba978ff8c946abe5bd3c697a530977fa7393cee9c3b" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/low-angle-car-race-siblings_23-2148355146.jpg?w=996&t=st=1684404190~exp=1684404790~hmac=3e1bc8db120686e6f510ac4f82d2b8a5d19d37c88af1b6aac31ee3eb56653e96" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default PopularToys;