
const UpcomingToys = () => {
    const upcomingToys = [
        {
            title: "Robot Building Kit",
            date: "Available from July 20",
            description: "Get ready for an exciting experience building your own robot at home!",
            imageSrc: "https://img.freepik.com/free-photo/high-angle-colorful-toys-floor_23-2149311330.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais",
        },
        {
            title: "Creative Art Set",
            date: "Available from August 5",
            description: "Unleash your creativity with our comprehensive art set for kids of all ages.",
            imageSrc: "https://img.freepik.com/free-vector/plastic-toy-blocks-background_23-2147640081.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais",
        },
        {
            title: "Outdoor Adventure Playset",
            date: "Available from September 10",
            description: "Embark on thrilling outdoor adventures with our innovative playset.",
            imageSrc: "https://img.freepik.com/free-photo/front-view-kid-playing-with-wooden-toyds_23-2149357210.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais",
        },
        {
            title: "Outdoor Adventure Playset",
            date: "Available from September 10",
            description: "Embark on thrilling outdoor adventures with our innovative playset.",
            imageSrc: "https://img.freepik.com/free-photo/plastic-eccano-set_1398-2177.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais",
        }
    ];

    return (
        <>
            <div className="text-center my-20">
                <h1 className="font-bold text-5xl text-gray-950 mb-5 underline">Coming Soon: New Toys</h1>
                <h2 className="font-bold text-3xl text-gray-800">Discover Exciting Toys Joining Our Collection Soon</h2>
            </div>
            <div className="flex justify-center items-center">
                {upcomingToys.map((toy, index) => (
                    <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
                        <img className="w-full" src={toy.imageSrc} alt={`Toy ${index + 1}`} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{toy.title}</div>
                            <p className="text-gray-700 text-base">{toy.description}</p>
                            <p className="text-gray-600 mt-2">{toy.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UpcomingToys;
