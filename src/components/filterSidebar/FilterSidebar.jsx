import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";

const FilterSidebar = () => {
    const [price, setPrice] = useState([0, 25000]);

    const handlePriceChange = (e, index) => {
        const newPrice = [...price];
        newPrice[index] = e.target.value;
        setPrice(newPrice);
    };

    return (
        <section className="w-72 h-full bg-[#f9f6f1] p-6 rounded-lg shadow mt-5">

            {/* COLOUR */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold uppercase">Colour</h3>
                    <FaMinus size={12} />
                </div>
                <div className="flex flex-wrap gap-3">
                    {[
                        { color: "bg-black", label: "Black" },
                        { color: "bg-blue-500", label: "Blue" },
                        { color: "bg-white border", label: "White" },
                        { color: "bg-pink-300", label: "Pink" },
                        { color: "bg-red-500", label: "Red" },
                        { color: "bg-yellow-400", label: "Yellow" },
                        { color: "bg-gray-400", label: "Grey" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-xs">
                            <span
                                className={`w-7 h-7 rounded-full ${item.color} border cursor-pointer`}
                            ></span>
                            <span className="mt-1">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* PRICE RANGE */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold uppercase">By Price</h3>
                    <FaMinus size={12} />
                </div>
                <div>
                    <input
                        type="range"
                        min="0"
                        max="25000"
                        value={price[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full accent-red-500"
                    />
                    <div className="flex justify-between text-sm mt-2">
                        <span>₹ {price[0]}</span>
                        <span>₹ {price[1]}</span>
                    </div>
                </div>
            </div>

            {/* PRODUCT TYPE */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold uppercase">Product Type</h3>
                    <FaMinus size={12} />
                </div>
                <div className="space-y-2 text-sm">
                    {["Gaming headset", "In-Ear headphones", "On-Ear headphones", "Over-Ear headphones"].map((item, i) => (
                        <label key={i} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="accent-black" />
                            {item}
                        </label>
                    ))}
                </div>
            </div>

            {/* NOISE CANCELLING */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold uppercase">Noise Cancelling Type</h3>
                    <FaMinus size={12} />
                </div>
                <div className="space-y-2 text-sm">
                    {[
                        "Active Noise Cancelling",
                        "Adaptive Noise Cancelling",
                        "True Adaptive Noise Cancelling",
                    ].map((item, i) => (
                        <label key={i} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="accent-black" />
                            {item}
                        </label>
                    ))}
                </div>
            </div>

            {/* COLLECTIONS */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold uppercase">Collections</h3>
                    <FaMinus size={12} />
                </div>
                <div className="space-y-2 text-sm">
                    {["Endurance", "Live", "Quantum", "Tour", "Tune", "Wave"].map(
                        (item, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="accent-black" />
                                {item}
                            </label>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default FilterSidebar;
