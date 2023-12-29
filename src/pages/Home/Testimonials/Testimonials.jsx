
const Testimonials = () => {
    return (
        <div className="ms-5 me-5">
            <div className="text-center my-20">
                <h1 className="font-bold text-5xl text-gray-950 mb-5 underline">Toyland Raves: Our Customers Speak</h1>
                <h2 className="font-bold text-3xl text-gray-800">Discover What Parents and Kids Love About Our Diverse Toy Collection</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Testimonial Card 1 */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <img
                        className="w-16 h-16 rounded-full mb-4"
                        src="https://img.freepik.com/free-photo/young-bearded-man-black-shirt-looking-camera-writing-something-notebook_141793-28379.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais"
                        alt="User 1"
                    />
                    <p className="text-gray-600 mb-4">
                        "Amazing toys! My kids love them. The quality is fantastic and the variety is impressive."
                    </p>
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="h-4 w-4 fill-current text-yellow-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 1.5l2.55 5.92 6.45.58-4.95 4.28L17.38 22 12 18.67 6.62 22l1.33-6.72-4.95-4.28 6.45-.58L12 1.5z"
                                />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-500">- Sarah J.</p>
                </div>

                {/* Testimonial Card 2 */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <img
                        className="w-16 h-16 rounded-full mb-4"
                        src="https://img.freepik.com/free-photo/man-plaid-shirt-bow-tie-studio_158595-498.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais"
                        alt="User 2"
                    />
                    <p className="text-gray-600 mb-4">
                        "Exceptional service and amazing selection of toys! My child's happiness is beyond measure."
                    </p>
                    <div className="flex items-center mb-2">
                        {[...Array(4)].map((_, index) => (
                            <svg
                                key={index}
                                className="h-4 w-4 fill-current text-yellow-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 1.5l2.55 5.92 6.45.58-4.95 4.28L17.38 22 12 18.67 6.62 22l1.33-6.72-4.95-4.28 6.45-.58L12 1.5z"
                                />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-500">- Michael S.</p>
                </div>

                {/* Testimonial Card 3 */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <img
                        className="w-16 h-16 rounded-full mb-4"
                        src="https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-thoughtfully-holding-pen-mouse-standing-khaki-wall_141793-30771.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais"
                        alt="User 3"
                    />
                    <p className="text-gray-600 mb-4">
                        "Top-notch quality toys that engage and entertain. Our family loves the variety offered."
                    </p>
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="h-4 w-4 fill-current text-yellow-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 1.5l2.55 5.92 6.45.58-4.95 4.28L17.38 22 12 18.67 6.62 22l1.33-6.72-4.95-4.28 6.45-.58L12 1.5z"
                                />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-500">- Emily L.</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
