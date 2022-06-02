import React from "react";
import Link from 'next/link'

const JuejinRoundAvatar = (props) => {
    const { avatarSrc, href } = props;
    return (
        <Link href={href ? href : "#"}>
            <div className="flex items-center justify-center space-x-3 cursor-pointer">
                <div className="rounded-full border-0 border-base-100 overflow-hidden w-10 h-10 ">
                    <img className="w-full h-full" src={avatarSrc} />
                </div>
            </div>
        </Link>
    );
};




export default JuejinRoundAvatar;
