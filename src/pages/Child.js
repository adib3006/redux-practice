import React, { useReducer } from "react";

function Child() {
    //const { count, setCount } = useContext(COUNTER_CONTEXT);
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === "Increment") {
            return state + 1;
        } else if (action.type === "Decrement") {
            return state - 1;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="flex p-3 justify-center items-center w-96 h-64 rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.40)] bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
            <div className="flex flex-col justify-around items-center w-full bg-white h-full rounded-lg">
                <h1 className="font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] mb-10">
                    Child
                </h1>
                <h1 className="font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
                    {state}
                </h1>
                <div className="flex">
                    <div
                        onClick={() => {
                            dispatch({ type: "Decrement" });
                        }}
                        className="flex items-center justify-center px-5 py-2 bg-red-400 rounded-lg mr-2"
                    >
                        <button className="text-white text-3xl font-semibold">
                            -
                        </button>
                    </div>
                    <div
                        onClick={() => {
                            dispatch({ type: "Increment" });
                        }}
                        className="flex items-center justify-center px-5 py-2 bg-green-400 rounded-lg"
                    >
                        <button className="text-white text-3xl font-semibold">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Child;
