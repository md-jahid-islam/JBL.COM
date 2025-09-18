import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

 // ======== News letter Signup ======== // 
 const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // =========== handleSubmit ======== // 
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

    // =========== API call can be added here =========== // 
    setSuccess("Thank you for signing up!");
    setEmail("");
  };

  return (
    <div className="bg-[#ff3c00] px-4 sm:px-6 lg:px-12 py-8 sm:py-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 uppercase">
            Sign up for the latest Harman news & offers!
          </h2>
          <p className="text-black text-sm sm:text-base mt-2">
            View our{" "}
            <a href="#" className="underline font-semibold">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 w-full lg:w-auto">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-black font-semibold mb-2 text-sm sm:text-base">
              Email address
            </label>
            <div className="flex w-full border-b border-black rounded-md overflow-hidden">
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter your email address" className="w-full bg-transparent text-black placeholder-gray-700 focus:outline-none py-2 px-3 sm:py-3 sm:px-4" />
              <button type="submit"
                className="bg-black text-white hover:bg-gray-900 p-2 sm:p-3 transition flex items-center justify-center" >
                <FaArrowRight className="text-sm sm:text-base" />
              </button>
            </div>
            {error && <p className="text-black mt-2 text-xs sm:text-sm">{error}</p>}
            {success && <p className="text-black mt-2 text-xs sm:text-sm">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
 };

 export default NewsletterSignup;
