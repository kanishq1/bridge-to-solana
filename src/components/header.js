import React from "react";
import clsx from "clsx";
import Head from "next/head";

const Header = ({ bg }) => {
    return (
        <div
            className={clsx(
                "mx-auto border border-gray-600 max-w-7xl flex justify-between sticky top-5 z-10 px-4 py-3 rounded-md bg-opacity-10 bg-blur",
                bg ? bg : "bg-white "
            )}
        >
            <Head>
                <meta property="og:image" content="/ogImg.png" />
                <meta property="twitter:image" content="/ogImg.png" />
                <link rel="icon" href="/logo.png" />
                <meta property="og:title" content="The Solana Bridge" />
                <title>The Solana Bridge</title>
            </Head>
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
