import React from "react";
import { Link, useLocation } from "react-router";
import { FaChevronRight } from "react-icons/fa";
 
 // ============ Breadcrumb title =========== // 
 function Breadcrumb({ title }) {
  const location = useLocation();
  const path1 = location.pathname.split("/")[1];

  return (
    <>
    <section className="mt-4 sm:mt-6 md:mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <ul className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base">
          {/* Home */}
          <li>
            <Link to="/" className="font-bold font-poppins text-black hover:text-orange-500 transition" >
              Home
            </Link>
          </li>

          {/* Chevron */}
          <li className="text-gray-500">
            <FaChevronRight className="text-xs sm:text-sm" />
          </li>

          {/* First Path */}
          <li>
            <Link to={`/${path1}`} className="font-bold font-poppins text-black capitalize hover:text-orange-500 transition" >
              {path1}
            </Link>
          </li>

          {/* Title if exists */}
          {title && (
            <>
              <li className="text-gray-500">
                <FaChevronRight className="text-xs sm:text-sm" />
              </li>
              <li>
                <p className="font-primary text-xs sm:text-sm md:text-base text-black capitalize border-l-2 border-l-orange-500 pl-4 sm:pl-6">
                  {title}
                </p>
              </li>
            </>
          )}
        </ul>
      </div>
    </section>    
    </>
  );
 }

 export default Breadcrumb;
 //  jdfioqeroqweirolkadfdlkasjffadfas