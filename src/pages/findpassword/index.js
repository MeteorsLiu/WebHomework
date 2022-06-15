import { useRouter } from "next/router";
import Head from "next/head";

import React from "react";

import Nav from "../../components/juejinNav";
import Link from 'next/link'

import { categoryStore } from "../../store/categoryStore";

export default function FindPassword(props) {
    const router = useRouter();
    const onSubmitEvent = async e => {
        e.preventDefault()
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
                    <div className="w-[26.5rem]  bg-white flex flex-col rounded py-10">
                        <div className="pl-[13%] py-3">
                            <h1 className="text-2xl font-semibold">找回密码</h1>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <div className="w-3/4 py-2">
                                <input required id="email" minLength="6" maxLength="20" className="px-2 rounded w-full border  py-2 border-slate-200 focus:border-blue-300  " placeholder="请输入邮箱" />
                            </div>
                            <div className="w-3/4 py-1 ">
                                <button className="py-2 text-center bg-[#007fff]  rounded w-full text-white">发送重设申请</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
