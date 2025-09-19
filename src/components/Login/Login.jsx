import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router";

 // ========== Login ========= // 
 const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // =========== Handle input change ============ // 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ======== Validate form ========= // 
  const validate = () => {
    let newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // ======== Submit handler ========= // 
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Login Data:", formData);
      alert("✅ Login Successful!");
    }
  };

  return (
    <>
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        {/* User Icon */}
        <div className="flex justify-center mb-4">
          <FaUser className="text-4xl text-gray-600 hover:text-blue-500 transition-transform transform hover:scale-110" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"/>
            {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field with Eye Toggle */}
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300 pr-10"/>
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-blue-500">
              {showPassword ? <AiFillEyeInvisible size={22} /> : <AiFillEye size={22} />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Login Button */}
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition-all">
            Login
          </button>
        </form>

        {/* Sign Up Button */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{""}
          <Link to="/Registrations"
            className="text-blue-500 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>    
    </>
  );
 };

 export default Login;
