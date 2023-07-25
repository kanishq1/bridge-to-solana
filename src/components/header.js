import React from "react";

const Header = () => {
    return (
        <div className="mx-auto border border-gray-600 max-w-7xl flex justify-between sticky top-5 z-10 px-4 py-3 rounded-md bg-white bg-opacity-10 bg-blur">
            <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
                <a href="/" className="flex items-center gap-x-2">
                    <img className="h-10" src="/solanaBridgeLogo.svg" />
                </a>
                <div className="gap-x-8 flex items-center sm:text-lg text-sm font-sansation">
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
