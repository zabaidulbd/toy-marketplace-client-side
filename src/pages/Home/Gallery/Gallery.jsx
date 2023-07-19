// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Gallery = () => {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000,
    //         once: true,
    //     });
    //     AOS.refresh(); // Refresh AOS when the component mounts or updates
    // }, []);
    const galleryItems = [
        {
            title: 'LEGO Castle',
            description: 'Build your own medieval adventure with this LEGO Castle set and make your child satisfy.',
            imageUrl: 'https://img.freepik.com/free-photo/girls-with-book-colorful-toys_23-2147663359.jpg?w=996&t=st=1684624986~exp=1684625586~hmac=ea104cda5b23ae09c51ce6c243a32fbf8eb1b701d639fe75718be502f1a98ce5',
        },
        {
            title: 'LEGO City Police Station',
            description: 'Keep the city safe with this action-packed LEGO City Police Station set.',
            imageUrl: 'https://img.freepik.com/free-photo/cute-toddler-with-train_23-2147663387.jpg?w=996&t=st=1684625023~exp=1684625623~hmac=885edcccc1f4cdce9f831240be03d90d143d70b9bf6ebbf6b3bac7590b88557c',
        },
        {
            title: 'LEGO Starship Voyager',
            description: 'Explore the galaxy with this futuristic LEGO Starship Voyager set and be happy.',
            imageUrl: 'https://img.freepik.com/free-photo/blonde-girl-putting-toy-mouth_23-2147664287.jpg?w=996&t=st=1684625006~exp=1684625606~hmac=e24ef54e270390cfb467d16ec5e661cab83e02ea4846d24613f4c19e3d9e6d51',
        },
        {
            title: 'LEGO Friends Playhouse',
            description: 'Enjoy endless playtime fun with this charming LEGO Friends Playhouse set.',
            imageUrl: 'https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?w=996&t=st=1684624900~exp=1684625500~hmac=275ccd2f3267ca1473eafe601a494d295704da180ce86d71a08dfce25d121236',
        },
        {
            title: 'LEGO Technic Car',
            description: 'Experience the thrill of engineering with this realistic LEGO Technic Car set.',
            imageUrl: 'https://img.freepik.com/free-photo/child-playing-with-book-playing-room_1157-26680.jpg?w=996&t=st=1684624845~exp=1684625445~hmac=076972b00f506d42cede83b0555d880ea2c10f54ec27a5fa630621ae28498d59',
        },
        {
            title: 'LEGO Creator Treehouse',
            description: 'Get back to nature with this enchanting LEGO Creator Treehouse set.',
            imageUrl: 'https://img.freepik.com/free-photo/children-playing-with-lego-playing-room_1157-26661.jpg?w=996&t=st=1684624836~exp=1684625436~hmac=6d0c55b1c6cb8653c758174ad401abc395dddfd97c0338d8dcea5ee9090d467b',
        },
    ];
    return (

        <div className="mt-20 mb-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold underline text-gray-800 mb-4 text-center">Welcome to Our Lego Store</h2>
                <p className="text-gray-600 mb-8 text-center">
                    Explore our amazing collection of LEGO sets. Each set is carefully crafted to provide endless fun and creativity
                    for LEGO enthusiasts of all ages. Discover various themes, from medieval castles to futuristic starships, and let
                    your imagination take flight with our LEGO creations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="bg-white shadow-lg">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-80 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-b-lg">
                                <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600 transition">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Gallery;