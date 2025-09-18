import React from "react";
import { Link, useLocation } from "react-router";
import { FaChevronRight } from "react-icons/fa";

function Breadcrumb({title}) {
    const location = useLocation();
    const path1 = location.pathname.split("/")[1];
    return (
        <>
            <section className="mt-6">
                <div className="container">
                    <ul className="flex items-center gap-1.5 mt-1">
                        <li>
                            <Link to="/" className="text-[16px] font-bold font-poppins text-black">
                                Home
                            </Link>
                        </li>
                        <li>
                            <FaChevronRight />
                        </li>
                        <li>
                            <Link
                                to={`/${path1}`}
                                className="text-[16px] font-bold font-poppins text-black capitalize"
                            >
                                {path1}
                            </Link>
                        </li>
                        {title && (
                            <>
                                <li>
                                    <FaChevronRight />
                                </li>
                                <li>
                                    <p className="font-primary text-bse font-normal text-black capitalize border-l-2 border-l-secondary pl-8">
                                        {title}
                                    </p>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Breadcrumb