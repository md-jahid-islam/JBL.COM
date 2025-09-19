import React, { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
 
 // =========== Navbar ========== // 
 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="shadow-md bg-white fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-3 py-3">
          {/* Logo */}
          <div>
            <Link to="/">
            <h1>JBL!</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="flex justify-center items-center gap-6 text-[14px] font-medium font-poppins text-[#000]">
              <li><Link to="/headphonePage">Headphone</Link></li>
              <li><Link to="/speakers">Speakers</Link></li>
              <li><Link to="/soundbar">Soundbar</Link></li>
              <li><Link to="/luxuryAudio">Luxury Audio</Link></li>
              <li><Link to="/professionalAudio">Professional Audio</Link></li>
              <li><Link to="/carAudio">Car Audio</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
              <li><Link to="/soundOfCelebrations">Sound Of celebrations</Link></li>
              <li><Link to="/clearanceSale">Clearance Sale</Link></li>
            </ul>
          </div>
        
        {/* CiSearch FaUser CiShoppingCart start */}
        <div className="flex justify-center md:justify-end gap-6 mt-6 md:mt-0 px-4">
        <CiSearch className="text-2xl cursor-pointer hover:text-blue-500 transition-transform transform hover:scale-110"/>
        <FaUser className="text-2xl cursor-pointer hover:text-blue-500 transition-transform transform hover:scale-110" />
        <CiShoppingCart className="text-2xl cursor-pointer hover:text-blue-500 transition-transform transform hover:scale-110" />
      </div>
        {/* CiSearch FaUser CiShoppingCart end*/}

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-3xl text-black" onClick={toggleMenu}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu (Slide-in) */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <ul className="flex flex-col gap-5 p-6 text-lg font-poppins">
            <li><Link to="/headphonePage" onClick={toggleMenu}>Headphone</Link></li>
            <li><Link to="/speakers" onClick={toggleMenu}>Speakers</Link></li>
            <li><Link to="/soundbar" onClick={toggleMenu}>Soundbar</Link></li>
            <li><Link to="/luxuryAudio" onClick={toggleMenu}>Luxury Audio</Link></li>
            <li><Link to="/professionalAudio" onClick={toggleMenu}>Professional Audio</Link></li>
            <li><Link to="/carAudio" onClick={toggleMenu}>Car Audio</Link></li>
            <li><Link to="/accessories" onClick={toggleMenu}>Accessories</Link></li>
            <li><Link to="/soundOfCelebrations" onClick={toggleMenu}>Sound Of celebrations</Link></li>
            <li><Link to="/clearanceSale" onClick={toggleMenu}>Clearance Sale</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
 }

 export default Navbar;
