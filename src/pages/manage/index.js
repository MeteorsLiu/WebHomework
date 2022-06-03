import { useRouter } from "next/router";
import Head from "next/head";

import React from "react";

import Nav from "../../components/juejinNav";
import Link from 'next/link'
import JuejinRoundAvatar from "../../components/juejinRoundAvatar";


import { categoryStore } from "../../store/categoryStore";

export default function Login(props) {
    const router = useRouter();
    const onSubmitEvent = async e => {
        e.preventDefault()


    }

    return (
        <div className="w-full">
            <Head>
                <title>掘金</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav categoryStore={categoryStore} />
            <div className="flex flex-row w-3/4 bg-white mx-auto rounded">
                <div className="flex flex-col px-16 py-10">
                    <div className="flex flex-col justify-center items-center mb-3">
                        <div className="rounded-full border-0 border-base-100 overflow-hidden w-24 h-24 ">
                            <img className="w-full h-full" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                        </div>
                        <div className="mt-3 text-xl font-semibold tracking-wide">
                            测试用户
                        </div>
                    </div>
                    <div className="text-2xl pt-5 pb-2 border-b hover:ease-out hover:transition-all	 hover:border-[#0077ff] duration-200">
                        <Link href="#">个人设置</Link>
                        
                    </div>
                    <div className="text-2xl pt-5 pb-2 border-b hover:ease-out hover:transition-all	 hover:border-[#0077ff] duration-200">
                        账号修改
                    </div>
                </div>

            </div>
        </div>
    )
}
