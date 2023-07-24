"use client";
import Header from "../components/header";
import React, { useEffect } from "react";
import Footer from "../components/footer";
import Script from "next/script";

export default function Transfer() {
    const handleLoadMayanWidget = () => {
        const config = {
            appIdentity: {
                name: "My Project",
                icon: "./logo.png",
                uri: "https://myproject.io",
            },
        };
        window.MayanSwap.init("swap_widget", config);
    };

    return (
        <main className={`min-h-screen p-10 md:px-32 px-8 pb-10 bg-[#121615]`}>
            <Header />
            <div style={{ margin: 32 }}>
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
