import React from "react";

const Arrow = () => (
    <svg className="my-auto" width="14" height="14" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18.2603 1.40531C18.2603 0.856666 17.8156 0.411906 17.2669 0.411907L8.32635 0.411906C7.77771 0.411907 7.33295 0.856666 7.33295 1.40531C7.33295 1.95394 7.77771 2.3987 8.32635 2.3987L16.2735 2.3987L16.2735 10.3459C16.2735 10.8945 16.7183 11.3393 17.2669 11.3393C17.8156 11.3393 18.2603 10.8945 18.2603 10.3459L18.2603 1.40531ZM2.075 18.0021L17.9694 2.10774L16.5645 0.702866L0.67012 16.5972L2.075 18.0021Z"
            fill="white"
        />
    </svg>
);

export const Card = ({ coverImage, name, link, tags }) => {
    return (
        <div className="bg-[#131515] p-5 rounded-2xl text-white gap-y-5 flex flex-col">
            <img src={coverImage} />
            <p>Available Chains</p>
            <div className="flex gap-2 flex-wrap">
                {tags.map((tag, index) => (
                    <div key={index} className="bg-[#525252] rounded-sm px-2 py-[1px] text-xs">
                        {tag}
                    </div>
                ))}
            </div>
            <a
                href={link}
                target="_blank"
                referrerPolicy="no-referrer noopener"
                className="bg-[#B131FF] rounded-lg flex py-1.5 text-center justify-center items-center mt-auto"
            >
                {name} &nbsp;
                <Arrow />
            </a>
        </div>
    );
};
