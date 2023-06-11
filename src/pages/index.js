import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col p-10 px-32 justify-between pb-10 bg-[#121615]`}>
            <Header />
            <div className="flex flex-col justify-center w-1/2 gap-y-10 -mt-6">
                <h1 className="font-semibold text-6xl">Bridge between Solana and the world.</h1>
                <p className="text-[#999A9A] text-lg">
                    The Wormhole Solana bridge enables seamless asset transfers between Solana and the world of
                    blockchains. Connect your source and destination wallets to get started.
                </p>
                <div className="">
                    <a href="/transfer" className="bg-[#A169F7] text-black py-2 px-16 rounded">
                        GO TO TRANSFER
                    </a>
                </div>
                <div>
                    <p className="mb-4">Supported Chains:</p>
                    <img className="h-10 object-cover" src={"/supported-chains.png"} />
                </div>
            </div>
            <Footer />
        </main>
    );
}
