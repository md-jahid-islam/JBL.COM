import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

 const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    // Basic email regex validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // If valid
    setSuccess("Thank you for signing up!");
    setEmail("");
    // Here you can also call an API to save the email
  };

  return (
    <div className="bg-[#ff3c00] px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Side - Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 uppercase">
            Sign up for the latest Harman news & offers!
          </h2>
          <p className="text-black text-sm mt-2">
            View our{" "}
            <a href="#" className="underline font-semibold">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-black font-semibold mb-2">
              Email address
            </label>
            <div className="flex items-center border-b border-black">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Please enter your email address"
                className="w-full bg-transparent text-black placeholder-gray-700 focus:outline-none py-2 pr-3"
              />
              <button type="submit" className="text-black hover:text-white hover:bg-black p-2 transition">
              <FaArrowRight />
              </button>
            </div>
            {error && <p className="text-black mt-1 text-sm">{error}</p>}
            {success && <p className="text-black mt-1 text-sm">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
 };
 export default NewsletterSignup;
