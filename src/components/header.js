import React from "react";

const Header = () => {
    return (
        <div className="w-full flex justify-between">
            <div className="flex justify-between items-center w-full">
                <a href="/" className="flex items-center gap-x-2">
                    <img className="h-10" src="/solanaBridgeLogo.svg" />
                </a>
                <div className="gap-x-8 flex items-center sm:text-lg text-sm font-jakarata">
                    <a className="hover:opacity-100 opacity-70" href="/transfer">
                        Transfer
                    </a>
                    <a className="hover:opacity-100 opacity-70" href="/faqs">
                        FAQs
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
