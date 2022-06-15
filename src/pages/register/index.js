import { useRouter } from "next/router";
import Head from "next/head";

import React from "react";

import Nav from "../../components/juejinNav";

import { categoryStore } from "../../store/categoryStore";

export default function Register(props) {
    const router = useRouter();
    const onSubmitEvent = async e => {
        e.preventDefault()

        //检查用户名
        let firstChar = e.target.username.value.charAt(0)
        if (firstChar <= '9' && firstChar >= '0') {
            alert("用户名不能以数字开始")
            return false
        }

        if (e.target.password.value == e.target.username.value || e.target.repeatPassword.value == e.target.username.value) {
            alert("密码或重复密码不能和用户名相同")
            return false
        }

        if (e.target.password.value != e.target.repeatPassword.value) {
            alert("密码和重复密码不相同")
            return false
        }

        var re = /\S+@\S+\.\S+/;
        if (!re.test(e.target.email.value)) {
        	alert("邮件格式错误")
            return false
        }

    }

    return (
        <div>
            <Head>
                <title>掘金</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav categoryStore={categoryStore} />
            <div className="flex justify-center items-center mt-10 h-[70vh]">
                <form onSubmit={onSubmitEvent}>
                    <div className="w-[26.5rem]  bg-white flex flex-col rounded pt-10">
                        <div className="pl-[13%] py-3">
                            <h1 className="text-2xl font-semibold">用户注册</h1>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <div className="w-3/4 py-2">
                                <input required id="username" minLength="6" maxLength="20" className="px-2 rounded w-full border  py-2 border-slate-200 focus:border-blue-300  " placeholder="请输入账号" />
                            </div>
                            <div className="w-3/4 py-2">
                                <input required id="password" minLength="6" maxLength="20" className="px-2 rounded w-full border  py-2 border-slate-200 focus:border-blue-300  " type="password" placeholder="请输入密码" />
                            </div>

                            <div className="w-3/4 py-2">
                                <input required id="repeatPassword" minLength="6" maxLength="20"  className="px-2 rounded w-full border  py-2 border-slate-200 focus:border-blue-300  " type="password" placeholder="请再次输入密码" />
                            </div>

                            <div className="w-3/4 py-2">
                                <input required id="email" minLength="6"  className="px-2 rounded w-full border  py-2 border-slate-200 focus:border-blue-300  " placeholder="请输入邮箱" />
                            </div>

                            <div className="w-3/4 py-1 ">
                                <button type="submit" className="py-2 text-center bg-[#007fff]  rounded w-full text-white">注册</button>
                            </div>
                        </div>
                        <div className="text-center pt-5 pb-4 text-sm text-[#767676] ">
                            <span>登录即表示同意</span> <a className="text-[#007fff]">用户协议</a>  、 <a className="text-[#007fff]"> 隐私政策</a>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    )
}
