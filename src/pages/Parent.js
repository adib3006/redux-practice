import React from "react";
//import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

function Parent() {
    // const { count } = useContext(COUNTER_CONTEXT);
    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
            <div className="flex p-3 justify-center items-center w-96 h-64 rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)] bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] mb-10">
                <div className="flex flex-col justify-around items-center w-full bg-white h-full rounded-lg">
                    <h1 className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] mb-10">
                        Parent
                    </h1>
                    <h1 className="font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
                        {/* {count} */}
                    </h1>
                </div>
            </div>
            <Child />
        </div>
    );
}

export default Parent;
