import React from "react";

const Header = () => {
    return (
        <div className="w-full flex justify-between">
            <div className="flex gap-x-12 items-center">
                <div className="text-lg">
                    <p>SOLANA</p>
                    <p>BRIDGE</p>
                </div>
                <a href="#">Transfer</a>
                <a href="#">FAQ</a>
            </div>
            <div className="gap-x-8 flex h-fit">
                <button className="bg-[#A169F7] rounded text-black px-4 py-1">Connect Solana</button>
                <button className="bg-[#A169F7] rounded text-black px-4 py-1">Connect Chain</button>
            </div>
        </div>
    );
};

export default Header;
