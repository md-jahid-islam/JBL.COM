import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router";

// ======== Registrations ========== //
const Registrations = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ======== Handle input changes ========== // 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ======== Validation logic ========= // 
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.zip.trim()) newErrors.zip = "ZIP Code is required";

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  // ======= Handle form submission ======== //
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Registration Data:", formData);
      alert("🎉 Registration Successful!");
    }
  };

  return (
    <>
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">
        {/* User Icon */}
        <div className="flex justify-center mb-4">
          <FaUser className="text-4xl text-gray-600 hover:text-green-500 transition-transform transform hover:scale-110" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-green-300"/>
            {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-green-300"/>
            {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-green-300"/>
            {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-green-300"/>
            {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-green-300"/>
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          {/* ZIP Code */}
          <div>
            <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-green-300"/>
            {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-green-300 pr-10" />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-green-500">
              {showPassword ? (
                <AiFillEyeInvisible size={22} />
              ) : (
                <AiFillEye size={22} />
              )}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring focus:ring-green-300 pr-10" />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-green-500">
              {showConfirmPassword ? (
                <AiFillEyeInvisible size={22} />
              ) : (
                <AiFillEye size={22} />
              )}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition-all">
            Sign Up
          </button>
        </form>

        {/* Back to Login Button */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/Registrations" className="text-green-500 font-medium hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </section>
    </>
  );
 };

 export default Registrations;
