import React, { useState } from 'react';
import { FaStar, FaTruck, FaPhone, FaHeadphones, FaCartPlus } from 'react-icons/fa';

function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('features');

    // Product images for gallery
    const productImages = [
        '/image/01.webp',
        '/image/02.webp',
        '/image/03.webp',
    ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section >
            <div className="max-w-7xl mx-auto p-8">
                {/* Product Image Gallery */}
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center justify-center">
                            <img
                                src={productImages[0]}
                                alt="JBL Tune Beam 2"
                                className="w-full rounded-lg"
                            />
                        </div>
                        {/* Thumbnail Gallery */}
                        <div className="mt-4 flex space-x-4 overflow-x-auto">
                            {productImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`thumbnail-${index}`}
                                    className="w-16 h-16 cursor-pointer border-2 border-gray-300 rounded-md hover:border-blue-500"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-semibold">JBL Tune Beam 2</h2>
                        <p className="text-lg text-gray-500">JBL Pure Bass Sound with Spatial Sound</p>
                        <p className="text-2xl font-bold text-black">₹5,999</p>

                        {/* Quantity Selector */}
                        <div className="mt-4 flex items-center space-x-4">
                            <label htmlFor="quantity" className="text-lg">Quantity:</label>
                            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                {/* Minus Button */}
                                <button
                                    type="button"
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
                                >
                                    -
                                </button>

                                {/* Quantity Display */}
                                <input
                                    id="quantity"
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-12 text-center border-l border-r border-gray-300"
                                />

                                {/* Plus Button */}
                                <button
                                    type="button"
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 flex items-center">
                            <FaCartPlus className="mr-2" /> Add {quantity} to Cart
                        </button>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-8">
                    <div className="flex space-x-8 border-b">
                        <button
                            onClick={() => handleTabChange('features')}
                            className={`text-lg font-semibold pb-2 ${activeTab === 'features' ? 'border-b-2 border-blue-600' : ''}`}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => handleTabChange('specs')}
                            className={`text-lg font-semibold pb-2 ${activeTab === 'specs' ? 'border-b-2 border-blue-600' : ''}`}
                        >
                            Specs
                        </button>
                        <button
                            onClick={() => handleTabChange('reviews')}
                            className={`text-lg font-semibold pb-2 ${activeTab === 'reviews' ? 'border-b-2 border-blue-600' : ''}`}
                        >
                            Reviews
                        </button>
                        <button
                            onClick={() => handleTabChange('support')}
                            className={`text-lg font-semibold pb-2 ${activeTab === 'support' ? 'border-b-2 border-blue-600' : ''}`}
                        >
                            Support
                        </button>
                    </div>

                    {/* Display Active Tab Content */}
                    {activeTab === 'features' && (
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold">Features</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <FaHeadphones className="text-blue-600" />
                                    <p className="text-lg">JBL Pure Bass Sound with Spatial Sound</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaPhone className="text-blue-600" />
                                    <p className="text-lg">6 Mics for Perfect Calls and Customized Call Experience</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaTruck className="text-blue-600" />
                                    <p className="text-lg">Up to 40 Hours of Playtime</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'specs' && (
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold">Specs</h3>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Personal F13.0</li>
                                <li>IP54 dust and water-resistant</li>
                                <li>Up to 40 hours total playback</li>
                            </ul>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold">Reviews</h3>
                            <div className="flex items-center space-x-2">
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-gray-300" />
                            </div>
                            <p className="text-lg mt-2">Customer Reviews</p>
                        </div>
                    )}

                    {activeTab === 'support' && (
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold">Support</h3>
                            <p className="text-lg">Can't find what you're looking for?</p>
                            <button className="mt-4 bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700">
                                JBL Support
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
