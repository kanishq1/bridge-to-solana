import React from "react";

const Arrow = () => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.2603 1.40531C18.2603 0.856666 17.8156 0.411906 17.2669 0.411907L8.32635 0.411906C7.77771 0.411907 7.33295 0.856666 7.33295 1.40531C7.33295 1.95394 7.77771 2.3987 8.32635 2.3987L16.2735 2.3987L16.2735 10.3459C16.2735 10.8945 16.7183 11.3393 17.2669 11.3393C17.8156 11.3393 18.2603 10.8945 18.2603 10.3459L18.2603 1.40531ZM2.075 18.0021L17.9694 2.10774L16.5645 0.702866L0.67012 16.5972L2.075 18.0021Z"
            fill="white"
        />
    </svg>
);

export const Card = () => {
    return (
        <div className="bg-[#131515] p-5 rounded-2xl text-white gap-y-5 flex flex-col">
            <img src="/mayan.png" />
            <p>Available Chains</p>
            <div className="flex gap-x-2">
                <div className="bg-[#525252] rounded-md px-2">Test</div>
                <div className="bg-[#525252] rounded-md px-2">Test</div>
            </div>
            <a href="/" className="bg-[#B131FF] rounded-lg flex py-2 text-center justify-center items-center text-lg">
                Mayan Sawap &nbsp;
                <Arrow />
            </a>
        </div>
    );
};
