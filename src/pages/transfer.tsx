"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";

type MayanWidgetChainName = "solana" | "ethereum" | "bsc" | "polygon" | "avalanche" | "arbitrum" | "aptos";

// visit the Figma link below to see the color palette
// https://www.figma.com/community/file/1236300242311853150/Mayan-Widget
type MayanWidgetColors = {
    N000?: string;
    N100?: string;
    N300?: string;
    N500?: string;
    N600?: string;
    N700?: string;
    N900?: string;
    tLightBlue?: string;
    green?: string;
    lightGreen?: string;
    red?: string;
    lightRed?: string;
    lightYellow?: string;
    primary?: string;
    primaryGradient?: string;
    tWhiteLight?: string;
    tWhiteBold?: string;
    tBlack?: string;
    mainBox?: string;
    background?: string;
    darkPrimary?: string;
    alwaysWhite?: string;
    tableBg?: string;
    transparentBg?: string;
    transparentBgDark?: string;
    buttonBackground?: string;
    toastBgRed?: string;
    toastBgNatural?: string;
    toastBgGreen?: string;
};
type MayanWidgetConfigType = {
    appIdentity: {
        uri: string;
        icon: string; //should be relative
        name: string;
    }; //use for  Wallet Adapter
    rpcs?: { [index in MayanWidgetChainName]?: string };
    sourceChains?: MayanWidgetChainName[];
    destinationChains?: MayanWidgetChainName[];
    tokens?: {
        from?: { [index in MayanWidgetChainName]?: string[] };
        to?: { [index in MayanWidgetChainName]?: string[] };
        featured?: { [index in MayanWidgetChainName]?: string[] };
    };
    defaultGasDrop?: { [index in MayanWidgetChainName]?: number };
    referrerAddress?: string;
    colors?: MayanWidgetColors;
};

declare global {
    interface Window {
        MayanSwap: {
            init: (id: string, config: MayanWidgetConfigType) => void;
        };
    }
}
export default function Transfer() {
    const handleLoadMayanWidget = () => {
        const config: MayanWidgetConfigType = {
            appIdentity: {
                name: "The Solana Bridge",
                icon: "/solanaBridgeLogo.png",
                uri: "https://the-solana-bridge.com/",
            },
            colors: {
                background: "black",
            },
        };
        window.MayanSwap.init("swap_widget", config);
    };

    return (
        <main className={`min-h-screen p-10 md:px-32 px-4 pb-10 bg-gradient`}>
            <div className="overflow-hidden">
                <img className="absolute z-0 left-0 w-full max-h-[90vh]" src={"/bg-lines.png"} />
            </div>
            <Header bg={"bg-[#a688ec]"} />
            <div className="flex justify-center my-8 sm:mx-8 mx-0 mt-20 relative">
                <div id="swap_widget" />
            </div>
            <Script
                src="https://cdn.mayan.finance/widget_ultimate-0-4-2.js"
                integrity="sha256-kM++hGhSL+uWrqz3tqqLCr0vGi7DwcgV/8HcYRi2c5c="
                crossOrigin="anonymous"
                onReady={handleLoadMayanWidget}
            />
            <Footer />
        </main>
    );
}
