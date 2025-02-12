import React from "react";
import Link from 'next/link'

import { Fragment, useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'

import JuejinRoundAvatar from "./juejinRoundAvatar";

import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from "react-tabs";

import { isEmpty } from "../utils/commonutils";

import { getCategories } from "../api";

import JuejinTagList from "./juejinTagList";
import Cookies from 'js-cookie'

// import { categoryStore } from "../store/categoryStore";


import { observer } from "mobx-react";

// 自定义类别tab
const CategoryTab = (props) => {
    const { isSelected, children } = props;
    return (
        <Tab>
            <div
                className={
                    "cursor-pointer flex-1 px-4 " +
                    (isSelected
                        ? "text-juejin-focus-text-blue"
                        : "text-gray-400")
                }>
                {children}
            </div>
        </Tab>
    );
};
CategoryTab.tabsRole = "Tab";

// 自定义类别TabPanel
const CategoryTabPanel = (props) => {
    const { children, ...otherProps } = props;
    return <TabPanel {...otherProps}>{children}</TabPanel>;
};
CategoryTabPanel.tabsRole = "TabPanel";

const Menu = (props) => {
    const { dropdown, isDefault } = props;
    return (
        <div
            ref={dropdown}
            style={{
                top: isDefault ? "58%" : "86%",
                boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
                border: "1px solid rgba(177,180,185,.45)",
                borderRadius: "4px",
            }}
            className="overflow-y-auto absolute h-72 w-40 bg-white text-juejinnav left-0">
            <ul
                style={{ fontSize: "1.05rem", lineHeight: "3rem" }}
                className="flex flex-col items-center">
                <li className="text-juejinactive cursor-pointer flex-1"><Link href="/">首页 </Link></li>
                <li className="hover:text-juejinactive cursor-pointer flex-1">
                    暂无
                </li>
            </ul>
        </div>
    )
}

const Logout = (router) => {
    Cookies.remove('isLogin')
    router.reload(window.location.pathname)
}
const RegisterList = (props) => (
    <div
        ref={props.registerRef}
        style={{
            top: props.isDefault ? "54%" : "86%",
            left: "auto",
            right: "7px",
            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
            border: "1px solid rgba(177,180,185,.45)",
            borderRadius: "4px",
        }}
        className="overflow-y-auto absolute h-16 w-28 bg-white text-juejinnav left-0">
        <ul
            style={{ fontSize: "1.05rem", lineHeight: "3rem" }}
            className="flex flex-col items-center">
            {props.isLogin ?
            <li className="text-juejinactive cursor-pointer flex-1"><a href="#" onClick={() => Logout(props.router)}>登出</a></li>
            : <li className="text-juejinactive cursor-pointer flex-1"><Link href="/register">注册</Link></li> }

    </ul>
    </div >
)

const LoginButton = (props) => (
    <div className="h-[60%] bg-[#0077ff] w-full rounded justify-center items-center flex flex-row" >
        <div className="w-3/4 text-center hover:bg-[#1171ee] duration-200 text-[0.9rem] ">
            <Link href="/login">登录</Link>
        </div>
        <div onClick={() => props.setRegister(b => !b)} className="flex items-center justify-center border-l rounded border-[hsla(0,0%,100%,.1)] h-full w-1/4 hover:bg-[#1171ee] cursor-pointer">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="unfold12-icon" data-v-399391d6=""><path d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z" fill="white" data-v-399391d6=""></path></svg>
        </div>
    </div>
)
const Nav = observer(({ categoryStore }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showRegister, setRegister] = useState(false);
    const [isLogin, setisLogin] = useState(false);

    //This one must be global!!
    const dropdown = useRef(null);
    const SearchBar = useRef(null);
    const Register = useRef(null);

    const [categoriesList, setCategoriesList] = useState([]); //一级类别tab，纯数组形式
    const router = useRouter()

    // 用于切换一级类别tab
    const [tabIndex, setTabIndex] = React.useState(0);
    React.useEffect(() => {
        // 获取类别
        getCategories().then(
            (response) => {
                // console.log(response.data);
                setCategoriesList(response.data["categories"]);
                categoryStore.setCategoryList(response.data["categories"]);
            },
            (err) => { }
        );
        // 默认为0
        // setCurrentCategory(0);
        setisLogin(Cookies.get('isLogin'))
    }, []);

    React.useEffect(() => {

        if (!showDropdown) return;
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [showDropdown]);


    React.useEffect(() => {
        //故技重施
        if (!showSearch) return;
        function handleClick(event) {
            if (SearchBar.current && !SearchBar.current.contains(event.target)) {
                setShowSearch(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [showSearch]);


    React.useEffect(() => {
        //故技重施
        if (!showRegister) return;
        function handleClick(event) {
            if (Register.current && !Register.current.contains(event.target)) {
                setRegister(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [showRegister]);




    return (
        <div className="sticky top-0 mb-4 border-t flex-none z-50">
            <div className="w-full mx-auto">
                <nav>
                    <div className="mx-auto">
                        <div className="border-white bg-white ">
                            <div className="flex justify-between border-b border-gray-200 px-4">
                                <div className="flex space-x-7">
                                    <div className="order-1">
                                        {/* Logo */}
                                        <a
                                            href="/"
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
                                    {/* 主导航 */}
                                    <div className="hidden md:flex items-center space-x-1 order-3">
                                        {/* <div className="flex-auto flex items-center ml-3"> */}
                                        <ul className="flex-grow flex text-juejinnav">
                                            <li className="flex-1 px-5 text-juejinactive">
                                                <Link href="/">
                                                    <a className="cursor-pointer">
                                                        首页
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className="flex-1 px-5 hover:text-juejinactive">
                                                <a className="cursor-pointer">
                                                    暂无
                                                </a>
                                            </li>
                                        </ul>
                                        {/* </div> */}
                                    </div>

                                    {/* 移动端菜单 */}
                                    <div
                                        onClick={() =>
                                            setShowDropdown((b) => !b)
                                        }
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

                                        {showDropdown ? <Menu isDefault={router.pathname == "/"} dropdown={dropdown} /> : null}
                                    </div>
                                </div>

                                {/* 次导航 */}
                                <div className="flex justify-between" >
                                    <div className="flex items-center justify-center ">
                                        <form
                                            ref={SearchBar}
                                            onClick={() => setShowSearch(b => !b)}
                                            style={{
                                                background: "#f4f5f5",
                                                color: "#86909c",
                                                padding: "0.6rem 0 0.6rem 1rem",
                                                height: "55%",
                                            }}
                                            className={`text-sm flex items-center justify-between md:mx-9 mx-3 ${showSearch ? "border border-juejinactive" : ""}`}>
                                            <input type="search" maxLength="32" placeholder={showSearch ? "搜索文章/小册/标签/用户" : "探索稀土掘金"} style={{ transition: "width .3s" }} className={`outline-none bg-transparent md:w-44 w-28 ${showSearch ? "lg:w-96" : ""}`} />
                                            <div className="mr-2">
                                                <img
                                                    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/8f68a2223e9650f14d6e6781cdcd717a.svg"
                                                    alt="搜索"
                                                    className="cursor-pointer"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex items-center text-white w-[5rem]">
                                        {isLogin ? <div onMouseOver={() => setRegister(true)}><JuejinRoundAvatar href="/manage" avatarSrc="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"></JuejinRoundAvatar></div> : <LoginButton setRegister={setRegister}></LoginButton>}

                                        {showRegister && <RegisterList router={router} isLogin={isLogin} isDefault={router.pathname == "/"} registerRef={Register}></RegisterList>}
                                    </div>

                                </div>
                            </div>
                        </div>
                        {
                            router.pathname == "/" && <Tabs
                                selectedIndex={tabIndex}
                                onSelect={(index) => {
                                    setTabIndex(index);
                                    categoryStore.setMainCategory(index);
                                }}>
                                <TabList>
                                    <div className="flex overflow-x-auto border-b border-gray-200 bg-white z-0">
                                        <div className="flex-row inline-flex text-juejinnav h-10 items-center pl-4">
                                            {/* 生成一级类别 */}
                                            {categoriesList.map((item, index) => {
                                                return (
                                                    <CategoryTab
                                                        key={index}
                                                        isSelected={
                                                            tabIndex == index
                                                        }>
                                                        {item["category_name"]}
                                                    </CategoryTab>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TabList>
                                {/* 直接填充空白panel，有空再大改 */}
                                {categoriesList.map((item, index) => {
                                    return <TabPanel key={index}></TabPanel>;
                                })}
                                {/* <div className="bg-transparent block"> */}
                                {/* <CategoryTabPanel>1</CategoryTabPanel> */}
                                {/* 这部分的逻辑是，先遍历categoriesList，如果有children（即二级子类别）
                                则再遍历二级子类别，提取出相关信息并生成 */}
                                {/* {categoriesList.map((item) => {
                                    return (
                                        <CategoryTabPanel>
                                            <JuejinTagList
                                                mainCategory={
                                                    item["category_id"]
                                                }
                                                subCategories={
                                                    item["children"]
                                                }></JuejinTagList>
                                        </CategoryTabPanel>
                                    );
                                })}
                            </div> */}
                            </Tabs>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
});

export default Nav;
