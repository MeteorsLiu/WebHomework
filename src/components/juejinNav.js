import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";

import JuejinRoundAvatar from "./juejinRoundAvatar";

const Menu = () => (
    <div
        style={{
            top: "58%",
            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
            border: "1px solid rgba(177,180,185,.45)",
            borderRadius: "4px",
        }}
        className="overflow-y-auto absolute h-72 w-40 bg-white text-juejinnav left-0">
        <ul
            style={{ fontSize: "1.05rem", lineHeight: "3rem" }}
            className="flex flex-col items-center">
            <li className="text-juejinactive cursor-pointer flex-1">首页</li>
            <li className="hover:text-juejinactive cursor-pointer flex-1">
                你妈
            </li>
            <li className="hover:text-juejinactive cursor-pointer flex-1">
                你爷
            </li>
            <li className="hover:text-juejinactive cursor-pointer flex-1">
                你奶
            </li>
            <li className="hover:text-juejinactive cursor-pointer flex-1">
                二奶
            </li>
        </ul>
    </div>
);

const Nav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdown = useRef(null);

    useEffect(() => {
        if (!showDropdown) return;
        function handleClick(event) {
            dropdown.current && !dropdown.current.contains(event.target)
                ? setShowDropdown(false)
                : null;
            window.addEventListener("click", handleClick);
            return () => window.removeEventListener("click", handleClick);
        }
    }, [showDropdown]);

    return (
        <div className="sticky top-0 mb-4 border-t border-white bg-white flex-none z-50">
            <div className="w-full mx-auto">
                <nav>
                    <div className="mx-auto">
                        <div className="flex justify-between border-b border-gray-200 px-4">
                            <div className="flex space-x-7">
                                <div className="order-1">
                                    {/* <!-- Website Logo --> */}
                                    <a
                                        href="#"
                                        className="flex items-center py-4 md:px-2">
                                        <img
                                            className="w-auto h-6 md:block hidden"
                                            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg"
                                        />
                                        <img
                                            className="w-auto h-6 md:hidden"
                                            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg"
                                        />
                                    </a>
                                </div>
                                {/* <!-- Primary Navbar items --> */}
                                <div className="hidden md:flex items-center space-x-1 order-3">
                                    {/* <div className="flex-auto flex items-center ml-3"> */}
                                    <ul className="flex-grow flex text-juejinnav">
                                        <li className="flex-1 px-5 text-juejinactive">
                                            <a className="cursor-pointer">
                                                首页
                                            </a>
                                        </li>

                                        <li className="flex-1 px-5 hover:text-juejinactive">
                                            <a className="cursor-pointer">
                                                暂无
                                            </a>
                                        </li>
                                    </ul>
                                    {/* </div> */}
                                </div>

                                {/* <!-- Mobile menu button --> */}
                                <div
                                    onClick={() => setShowDropdown((b) => !b)}
                                    className="md:hidden flex items-center order-2 cursor-pointer text-juejinactive">
                                    <span>首页</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    {showDropdown ? <Menu /> : null}
                                </div>
                            </div>

                            {/* <!-- Secondary Navbar items --> */}
                            <JuejinRoundAvatar avatarSrc="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"></JuejinRoundAvatar>
                        </div>

                        <div className="flex overflow-x-auto border-b border-gray-200">
                            <ul className="flex-row inline-flex text-juejinnav h-10 items-center pl-4">
                                <li className="flex-1 px-4">
                                    <a className="cursor-pointer">推荐</a>
                                </li>

                                <li className="flex-1 px-4">
                                    <a className="cursor-pointer">后端</a>
                                </li>
                                <li className="flex-1 px-4">
                                    <a className="cursor-pointer">前端</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- mobile menu --> */}
                    {/* <div className="hidden mobile-menu">
                        <ul className="">
                            <li className="active">
                                <a
                                    href="index.html"
                                    className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </nav>
            </div>
        </div>
    );
};

export default Nav;
