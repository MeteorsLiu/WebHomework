
export const MeueList = (props) => (
    <div className={"duration-200 cursor-pointer text-center text-xl pt-5 pb-2 hover:ease-out hover:transition-all	hover:border-[#0077ff] " + (props.isActive ? " hover:text-[#0077ff] text-[#0077dd] border-[#0077ee] " : "hover:text-[#0077ee] ") + (!props.isLast && "border-b")}>
        <a onClick={props.onclickevent}>{props.children}</a>
    </div>
)


export const UserSettings = (props) => (
    <div className="flex flex-col pt-10 w-3/4">
        <div className="font-semibold py-3 text-2xl text-center">
            <h1>
                用户设定    
            </h1>
        </div>
        <div>
            <p className="font-semibold">用户名: </p>
            测试用户
        </div>
    </div>
)

export const AccountSettings = (props) => (
    <div>
        12312312312sad
    </div>
)


export const AnotherSettings = (props) => (
    <div>
        12312312312sad4324234
    </div>
)