

const ReviewCard = () => {
    return (
        <div className="ms-5 me-5">
            <div className="text-center my-20">
                <h1 className="font-bold text-5xl text-gray-950 mb-5 underline">Toy Adventures: Hear from Happy Kids</h1>
                <h2 className="font-bold text-3xl text-gray-800">Real Stories from Little Explorers and Their Favorite Toys</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Review Card 1 */}
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Review 1</h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo nec urna gravida luctus.
                    </p>
                    <p className="text-gray-500">- John Doe</p>
                </div>

                {/* Review Card 2 */}
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Review 2</h2>
                    <p className="text-gray-600 mb-4">
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.
                    </p>
                    <p className="text-gray-500">- Jane Smith</p>
                </div>

                {/* Review Card 3 */}
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Review 3</h2>
                    <p className="text-gray-600 mb-4">
                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </p>
                    <p className="text-gray-500">- Alex Johnson</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;