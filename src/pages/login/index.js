import { useRouter } from "next/router";
import Head from "next/head";

import React from "react";

import Nav from "../../components/juejinNav";
import Link from 'next/link'

import { categoryStore } from "../../store/categoryStore";

export default function Login(props) {
    const router = useRouter();


    return (
        <div>
            <Head>
                <title>掘金</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav categoryStore={categoryStore} />
            <div className="flex justify-center items-center mt-10 h-[70vh]">

                <div className="w-[26.5rem]  bg-white flex flex-col rounded pt-10">
                    <div className="pl-[13%] py-3">
                        <h1 className="text-2xl font-semibold">用户登录</h1>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <div className="w-3/4 py-2">
                            <input className="px-2 rounded w-full border  py-2 border-slate-200 focus:border-blue-300  " placeholder="请输入账号" />
                        </div>
                        <div className="w-3/4 py-2">
                            <input className="px-2 rounded w-full border  py-2 border-slate-200 focus:border-blue-300  " type="password" placeholder="请输入密码" />
                        </div>

                        <div className="w-3/4 py-1 ">
                            <button className="py-2 text-center bg-[#007fff]  rounded w-full text-white">登录</button>
                        </div>
                    </div>
                    <div className="text-[#007fff] flex justify-between px-[13%] mt-2">
                        <div>
                        <Link href="/register">
                            <a>没有账号?</a>
                        </Link>
                        </div>
                        <div>
                        <Link href="/findpassword">
                            <a>忘记密码</a>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center pt-5 pb-4 text-sm text-[#767676] ">
                    <span>登录即表示同意</span> <a className="text-[#007fff]">用户协议</a>  、 <a className="text-[#007fff]"> 隐私政策</a>
                </div>
                </div>


            </div>
        </div>
    )
}
