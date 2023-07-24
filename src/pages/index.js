import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
import { useState } from "react";
import { Card } from "../components/card";
import { StartBridging } from "../components/start-bridging";

const ecosystemCrads = [
    {
        name: "Mayan Swap",
        link: "https://mayanswap.com/",
        coverImage: "/mayan.png",
        tags: ["Solana", "Ethereum", "BNB", "Polygon", "Arbitrum", "Avalanche"],
    },
    {
        name: "Portal Token Bridge",
        link: "https://portal.xyz/",
        coverImage: "/portal.png",
        tags: [
            "Solana",
            "Aptos",
            "Algorand",
            "Arbitrum",
            "Polygon",
            "Avalanche",
            "BNB Chain",
            "Celo",
            "Ethereum",
            "Sui",
            "Injective",
            "Optimism",
            "Near",
            "Moonbeam",
        ],
    },
    {
        name: "Allbridge Stablecoin Swap",
        link: "https://allbridge.io/",
        coverImage: "/allbridge.png",
        tags: ["Solana", "Ethereum", "BNB Chain", "Polygon", "Tron", "Arbitrum"],
    },
    {
        name: "Carrier Bridge",
        link: "https://carrier.fi/",
        coverImage: "/carrier.png",
        tags: [
            "Solana",
            "Ethereum",
            "BNB Chain",
            "Celo",
            "Arbitrum",
            "Fantom",
            "Klaytn",
            "Moonbeam",
            "Avalanche",
            "Polygon",
            "Acala",
            "Oasis",
        ],
    },
    {
        name: "Atlas Stable Swap",
        link: "https://atlas.money/",
        coverImage: "/atlas.png",
        tags: ["Solana", "Ethereum", "Avalanche", "Polygon", "Fantom", "BNB Chain", "Tron"],
    },
    {
        name: "de Swap Bridge",
        link: "https://deswap.io/",
        coverImage: "/deswap.png",
        tags: ["Solana", "Ethereum", "BNB Chain", "Polygon", "Avalanche", "Arbitrum", "Fantom"],
    },
];

export default function Home() {
    return (
        <main
            className={`min-h-screen p-10 md:px-32 px-8 pb-10 bg-[#000] bg-contain bg-no-repeat bg-[url('/heroBg.png')]`}
        >
            <Header />
            <div className="flex flex-col justify-center items-center text-center xl:w-1/2 lg:w-3/4 mx-auto gap-y-12 pt-32">
                <h1 className="font-semibold text-6xl">Bridge between Solana and the world.</h1>
                <p className="text-[#999A9A] text-lg">
                    The Solana Bridge enables seamless asset transfers between Solana and rest of the chains using
                    Wormhole.
                </p>
                <div className="">
                    <a href="/transfer" className="bg-white text-black py-4 px-16 rounded">
                        GO TO TRANSFER
                    </a>
                </div>
                <div className="flex flex-col gap-y-8">
                    <p className="flex items-center justify-center gap-x-2">
                        Supported Chains <img src="/online-icon.svg" className="h-6" />
                    </p>
                    <img className="max-h-10 object-cover" src={"/supported-chains.png"} />
                </div>
            </div>
            <div class="max-w-xl h-0.5 my-16 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            <div className="text-white flex justify-center items-center text-center flex-col gap-y-2 mb-12">
                <div>
                    <h3 className="text-3xl">Ecosystem Bridges</h3>
                </div>
                <div>
                    <p className="text-lg">Swap to and From Solana via the Ecosystem Bridges</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-4 max-w-6xl mx-auto">
                {ecosystemCrads.map(({ coverImage, name, link, tags }, index) => (
                    <Card key={index} coverImage={coverImage} name={name} link={link} tags={tags} />
                ))}
            </div>
            <div className="px-4 max-w-6xl mx-auto sm:mt-24 mt-16 mb-8">
                <StartBridging />
            </div>
            <Footer />
        </main>
    );
}
