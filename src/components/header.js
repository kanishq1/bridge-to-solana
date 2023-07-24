import React from "react";

const Header = () => {
    return (
        <div className="w-full flex justify-between">
            <div className="flex justify-between items-center w-full">
                <a href="/" className="flex items-center gap-x-2">
                    <img className="opacity-60 w-14" src="/solanaBridgeLogo.svg" />
                    <div className="text-base">
                        <p>SOLANA</p>
                        <p>BRIDGE</p>
                    </div>
                </a>
                <div className="gap-x-8 flex items-center">
                    <a href="/transfer">Transfer</a>
                    <a href="/faqs">FAQs</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
