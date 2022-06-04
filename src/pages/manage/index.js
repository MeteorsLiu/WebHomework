import { useRouter } from "next/router";
import Head from "next/head";

import React from "react";

import Nav from "../../components/juejinNav";

import JuejinRoundAvatar from "../../components/juejinRoundAvatar";
import { AccountSettings, AnotherSettings, MeueList, UserSettings } from "../../components/juejinUserManagement";

import { categoryStore } from "../../store/categoryStore";

export default function Login(props) {
    const router = useRouter();
    let [meue, setMeue] = React.useState(0)
    const onClickEvent = () => {
       alert(123)
    }

    return (
        <div className="w-full">
            <Head>
                <title>掘金</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav categoryStore={categoryStore} />
            <div className="flex flex-row w-3/4 bg-white mx-auto rounded shadow-sm">
                <div className="flex flex-col px-16 py-10">
                    <div className="flex flex-col justify-center items-center mb-3">
                        <div className="rounded-full border-0 border-base-100 overflow-hidden w-24 h-24 ">
                            <img className="w-full h-full" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                        </div>
                        <div className="mt-3 text-lg font-semibold tracking-wide">
                            测试用户
                        </div>
                    </div>

                    <MeueList onclickevent={()=>{setMeue(0)}} isActive={meue==0}>个人设置</MeueList>

                    <MeueList onclickevent={()=>{setMeue(1)}} isActive={meue==1}>账号修改</MeueList>

                    <MeueList onclickevent={()=>{setMeue(2)}} isActive={meue==2} isLast={true}>其他设定</MeueList>
                </div>
                {
                       meue == 0 &&  <UserSettings></UserSettings> 
                       || meue == 1 && <AccountSettings></AccountSettings>
                       || meue == 2 && <AnotherSettings></AnotherSettings>
                }

            </div>
        </div>
    )
}
