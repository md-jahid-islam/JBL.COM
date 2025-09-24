import React, { useState } from "react";
import { FaArrowLeft, FaCreditCard, FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";
 
 // ========== Proceed To Payment ========== // 
 const ProceedToPayment = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <>
    <section>
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button onClick={() => navigate("/checkout")} className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
        <FaArrowLeft /> Back to Checkout
      </button>

      <h1 className="text-3xl font-bold text-center mb-8">💳 Proceed to Payment</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Payment Methods */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>

          {/* Card Payment */}
          <div onClick={() => setSelectedMethod("card")} className={`cursor-pointer flex items-center gap-3 border rounded-xl p-4 hover:shadow transition ${
            selectedMethod === "card" ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}>
            <FaCreditCard className="text-blue-500 text-xl" />
            <p className="font-medium">Credit / Debit Card</p>
          </div>

          {/* Cash on Delivery */}
          <div onClick={() => setSelectedMethod("cod")} className={`cursor-pointer flex items-center gap-3 border rounded-xl p-4 hover:shadow transition ${ selectedMethod === "cod" ? "border-green-500 bg-green-50" : "border-gray-300"}`}>
            <FaMoneyBillWave className="text-green-500 text-xl" />
            <p className="font-medium">Cash on Delivery</p>
          </div>

          {/* Mobile Banking */}
          <div onClick={() => setSelectedMethod("mobile")} className={`cursor-pointer flex items-center gap-3 border rounded-xl p-4 hover:shadow transition ${ selectedMethod === "mobile" ? "border-purple-500 bg-purple-50" : "border-gray-300"}`}>
            <FaMobileAlt className="text-purple-500 text-xl" />
            <p className="font-medium">Mobile Banking (bKash, Nagad, Rocket)</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$380.00</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$20.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-3">
            <span>Total</span>
            <span className="text-green-600">$400.00</span>
          </div>

          {/* Payment Button */}
          <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition">
            Pay Now
          </button>
        </div>
      </div>
    </div>
    </section>   
    </>
  );
 };

 export default ProceedToPayment;
