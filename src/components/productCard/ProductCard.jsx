import { FaBalanceScaleRight } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = () => {
    return (
        <>

            <section className="mt-5 ">
                <div className="border p-4 w-72 shadow hover:shadow-lg transition duration-300">
                    {/* Product Image */}
                    <div className="flex justify-center mb-4">
                        <Link to="/ProductDetails">
                            <img src="/image/01.webp" alt="JBL Tune Beam 2" className="h-40 object-contain" />
                        </Link>
                    </div>
                    {/* Color Options */}
                    <div className="flex space-x-2 justify-center mb-4">
                        <div className="w-4 h-4 bg-white border border-gray-400 rounded-sm"></div>
                        <div className="w-4 h-4 bg-black rounded-sm"></div>
                        <div className="w-4 h-4 bg-cyan-800 rounded-sm"></div>
                    </div>

                    {/* Product Name */}
                    <h2 className="text-md font-semibold text-gray-800 mb-1">JBL Tune Beam 2</h2>

                    {/* Product Description */}
                    <p className="text-sm text-gray-600 mb-3">
                        True Wireless Noise Cancelling Earbuds with JBL Spatial Sound and Smart
                    </p>

                    {/* Pricing */}
                    <div className="mb-2">
                        <span className="text-lg font-semibold text-gray-900">₹ 5,999.00</span>
                        <span className="text-sm line-through text-gray-500 ml-2">₹ 11,999.00</span>
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 ml-2 rounded">
                            SAVE ₹ 6,000.00
                        </span>
                    </div>

                    {/* Compare Icon */}
                    <div className="flex items-center text-sm text-blue-600 hover:underline cursor-pointer mb-3">
                        <FaBalanceScaleRight className="mr-1" />
                        Compare
                    </div>

                    {/* Special Offers */}
                    <div className="text-xs text-gray-600 leading-relaxed">
                        <p>Special Offer: <span className="font-semibold">3 Months Additional Warranty</span> * T&C</p>
                        <p>Get 10% off up to ₹5,000 on CCEMI transactions from Leading Banks <span className="text-blue-600 cursor-pointer">Know More</span></p>
                    </div>

                    {/* View More */}
                    <div className="mt-3">
                        <button className="text-sm text-blue-600 hover:underline">
                            View More offer &gt;
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductCard;
