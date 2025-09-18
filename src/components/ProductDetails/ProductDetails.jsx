import React, { useState } from 'react';
import { FaStar, FaTruck, FaPhone, FaHeadphones, FaCartPlus } from 'react-icons/fa';

 // =========== Product Details =========== // 
 function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('features');

    // ========== productImages ======== // 
    const productImages = [
        '/image/01.webp',
        '/image/02.webp',
        '/image/03.webp',
    ];

    // =========== handleTabChange ========= // 
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
        <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Product Image & Info */}
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                    
                    {/* Product Images */}
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
                                    className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer border-2 border-gray-300 rounded-md hover:border-blue-500 flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">JBL Tune Beam 2</h2>
                        <p className="text-gray-500 text-sm sm:text-base mt-1">JBL Pure Bass Sound with Spatial Sound</p>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black mt-2">₹5,999</p>

                        {/* Quantity Selector */}
                        <div className="mt-4 flex items-center space-x-3 sm:space-x-4">
                            <label htmlFor="quantity" className="text-sm sm:text-base">Quantity:</label>
                            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                <button
                                    type="button"
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="px-2 sm:px-3 py-1 sm:py-2 bg-gray-200 hover:bg-gray-300"
                                >-</button>
                                <input
                                    id="quantity"
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-10 sm:w-12 text-center border-l border-r border-gray-300 text-sm sm:text-base"
                                />
                                <button
                                    type="button"
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="px-2 sm:px-3 py-1 sm:py-2 bg-gray-200 hover:bg-gray-300"
                                >+</button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <button className="mt-4 bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-700 flex items-center justify-center w-full md:w-auto">
                            <FaCartPlus className="mr-2" /> Add {quantity} to Cart
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-8">
                    <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-6 border-b overflow-x-auto">
                        {['features', 'specs', 'reviews', 'support'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`text-sm sm:text-base font-semibold pb-2 whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-blue-600' : ''}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mt-4">
                        {activeTab === 'features' && (
                            <div>
                                <h3 className="text-lg sm:text-2xl font-semibold">Features</h3>
                                <div className="space-y-3 sm:space-y-4 mt-2">
                                    <div className="flex items-center space-x-2 sm:space-x-4">
                                        <FaHeadphones className="text-blue-600" />
                                        <p className="text-sm sm:text-base">JBL Pure Bass Sound with Spatial Sound</p>
                                    </div>
                                    <div className="flex items-center space-x-2 sm:space-x-4">
                                        <FaPhone className="text-blue-600" />
                                        <p className="text-sm sm:text-base">6 Mics for Perfect Calls</p>
                                    </div>
                                    <div className="flex items-center space-x-2 sm:space-x-4">
                                        <FaTruck className="text-blue-600" />
                                        <p className="text-sm sm:text-base">Up to 40 Hours of Playtime</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'specs' && (
                            <div>
                                <h3 className="text-lg sm:text-2xl font-semibold">Specs</h3>
                                <ul className="list-disc pl-5 sm:pl-8 mt-2 space-y-1 sm:space-y-2 text-sm sm:text-base">
                                    <li>Personal F13.0</li>
                                    <li>IP54 dust and water-resistant</li>
                                    <li>Up to 40 hours total playback</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'reviews' && (
                            <div>
                                <h3 className="text-lg sm:text-2xl font-semibold">Reviews</h3>
                                <div className="flex items-center space-x-1 sm:space-x-2 mt-1">
                                    {[1,2,3,4,5].map((i) => (
                                        <FaStar key={i} className={i <= 4 ? 'text-yellow-500' : 'text-gray-300'} />
                                    ))}
                                </div>
                                <p className="text-sm sm:text-base mt-1">Customer Reviews</p>
                            </div>
                        )}
                        {activeTab === 'support' && (
                            <div>
                                <h3 className="text-lg sm:text-2xl font-semibold">Support</h3>
                                <p className="text-sm sm:text-base mt-1">Can't find what you're looking for?</p>
                                <button className="mt-2 sm:mt-4 bg-gray-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-700">
                                    JBL Support
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
 }

 export default ProductDetails;
