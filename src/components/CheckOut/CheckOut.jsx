import React, { useState } from "react";
import { FaArrowLeft, FaTruck, FaMoneyBillWave, FaUndo } from "react-icons/fa";
import { Link } from "react-router";
 
 // ============ CheckOut ======== // 
 function CheckOut() {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // ============ productPrice =========== // 
  const productPrice = 180;
  const shipping = 20;
  const subtotal = productPrice * quantity;
  const total = subtotal + shipping - discount;

  return (
    <>
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button onClick={() => navigate("/")}className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
          <FaArrowLeft /> Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Info */}
          <div className="bg-white p-6 rounded-2xl shadow-lg lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text"
                placeholder="Full Name"
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Work Email"
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Country"
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Zip / Postal Code"
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Full Address"
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 md:col-span-2"
                rows="3"
              ></textarea>
            </form>

            {/* Delivery Options */}
            <h3 className="text-xl font-semibold mt-6 mb-4">Delivery Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <FaTruck className="text-green-500" />
                <span>Standard Delivery (3-5 days)</span>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <FaMoneyBillWave className="text-orange-500" />
                <span>Cash on Delivery Available</span>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <FaUndo className="text-purple-500" />
                <span>14 Days Easy Return</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-3">
              <span>Tea Table</span>
              <span>${productPrice}.00</span>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center justify-between mb-4">
              <span>Quantity:</span>
              <div className="flex items-center border rounded-md overflow-hidden">
                <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="px-3 py-1 bg-gray-200 hover:bg-gray-300"> -
                </button>
                <input type="text" value={quantity} readOnly className="w-12 text-center border-l border-r border-gray-300"/>
                <button onClick={() => setQuantity((prev) => prev + 1)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">+
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>${subtotal}.00</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping</span>
              <span>${shipping}.00</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600 mb-2">
                <span>Discount</span>
                <span>- ${discount}.00</span>
              </div>
            )}
            <div className="flex justify-between text-xl font-bold mt-3">
              <span>Total</span>
              <span>${total}.00</span>
            </div>

            {/* Coupon Input */}
            <div className="mt-4">
              <input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter Coupon Code"className="border rounded-lg px-4 py-2 w-full mb-2"/>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                Apply Coupon
              </button>
            </div>

            {/* Buttons */}
          <div className="">
         <button className="mt-4 w-full bg-gradient-to-r text-center from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 rounded-lg font-semibold transition">
         <Link to={"/UpdateCart"} className="mt-4 w-full bg-gradient-to-r text-center from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 rounded-lg font-semibold transition" >
            Update Cart
            </Link>
            </button>
          </div>
         <div className="">
         <button className="mt-4 w-full bg-gradient-to-r text-center from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 rounded-lg font-semibold transition">
          <Link to={"/ProceedToPayment"} className="mt-4 w-full bg-gradient-to-r text-center from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 rounded-lg font-semibold transition">
            Proceed to Payment
            </Link>
         </button>
        </div>
        </div>
        </div>
      </div>
    </section> 
    </>
  );
 }

 export default CheckOut;
