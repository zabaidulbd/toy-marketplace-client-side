

const Banner = () => {
    return (
        <div className="mt-5 mb-9">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/kid-playing-with-toy-train_23-2148131033.jpg?w=996&t=st=1684397966~exp=1684398566~hmac=b12305f49ed22f5e35d565c88ca0c37e711a1ebdd0831a989678a3a91437849d")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mt-96">
                        <h1 className="mb-5 text-4xl font-bold">Drive at the Cutting Edge of Motorsport</h1>
                        <p className="mb-5">Celebrate 100 years of Le Mans racing new LEGO Technic sets</p>
                        <button className="btn btn-outline btn-warning me-3">Shop now</button>
                        <button className="btn btn-outline btn-warning">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;