import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { menu, close } from '../assets/index';

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="px-6 md:px-16 lg:px-28 w-full flex items-center py-10 fixed top-0 z-400 bg-primary">
            <div className="w-full flex justify-between items-center mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-[22px] font-bold cursor-pointer">CoinCanvas</p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    <li className={`${active === "Features" ? "font-medium" : "font-light"} hover:font-medium text-[22px] cursor-pointer`}>
                        <a href="#features" onClick={() => setActive("Features")}>Features</a>
                    </li>
                    <li className={`${active === "Reviews" ? "font-medium" : "font-light"} hover:font-medium text-[22px] cursor-pointer`}>
                        <a href="#reviews" onClick={() => setActive("Reviews")}>Reviews</a>
                    </li>
                    <button className={`hover:scale-110 text-[18px] cursor-pointer bg-black text-primary p-2 px-4 rounded-[30px] relative -top-1`}>
                        LOG IN
                    </button>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer text-black"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            <li
                                className={`${active === "Features" ? "font-medium" : "font-light"
                                    } font-poppins cursor-pointer text-[16px]`}
                                onClick={() => {
                                    setToggle(!toggle)
                                    setActive("Features")
                                }}
                            >
                                <a href="#features">Features</a>
                            </li>
                            <li
                                className={`${active === "Reviews" ? "font-medium" : "font-light"
                                    } font-poppins cursor-pointer text-[16px]`}
                                onClick={() => {
                                    setToggle(!toggle)
                                    setActive("Reviews")
                                }}
                            >
                                <a href="#reviews">Reviews</a>
                            </li>
                            <button className={`text-[18px] cursor-pointer bg-black text-primary p-2 px-4 rounded-[30px] relative -top-1`}>
                                LOG IN
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;