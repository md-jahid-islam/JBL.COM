import React, { useState } from "react";
import { FaTrash, FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

 // ======== Demo cart data ======== // 
 const UpdateCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Luxury Headphones", price: 120, quantity: 1, image: "/image/headphone.png" },
    { id: 2, name: "Wireless Speaker", price: 80, quantity: 2, image: "/image/bluetho.png" },
  ]);

  const handleQuantityChange = (id, value) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: value > 0 ? value : 1 } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
    <section>
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button onClick={() => navigate("/")} className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
        <FaArrowLeft /> Back to Shop
      </button>

      <h1 className="text-3xl font-bold text-center mb-8">🛒 Update Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <FaShoppingCart className="mx-auto text-4xl mb-2" />
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow rounded-2xl p-4 hover:shadow-lg transition">
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price} each</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="border border-gray-300 rounded-lg px-3 py-1 w-16 text-center"
                />
                <p className="font-semibold">${item.price * item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          {/* Total + Checkout */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col md:flex-row justify-between items-center mt-8">
            <p className="text-xl font-bold">
              Total: <span className="text-green-600">${totalPrice}</span>
            </p>
            <Link to={"/CheckOut"} className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
    </section>
    </>
  );
};

export default UpdateCart;
