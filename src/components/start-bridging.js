import React from "react";

export const StartBridging = () => {
    return (
        <div className="grid sm:grid-cols-2 md:gap-44 gap-16">
            <div className="flex flex-col justify-between py-1 font-sansation gap-y-8">
                <h1 className="text-3xl">Start bridging your assets in and out of Solana!</h1>
                <a
                    href={"/transfer"}
                    className="bg-[#14F195] hover:bg-white ease-linear delay-50 transition-all text-black rounded-lg py-2 px-4 text-xl uppercase font-medium text-center"
                >
                    Bridge Your Assets
                </a>
            </div>
            <div className="flex flex-col gap-y-2 justify-between">
                <h3 className="">Note</h3>
                <p className="text-sm opacity-70">
                    We recommend optimizing routes based on received amounts and bridging times. Bridge fees and
                    duration may differ based on your chosen routes, affected by factors like chain selection, tokens,
                    and pool liquidity.
                </p>
                <p className="text-sm opacity-70">
                    If you don’t want to deal with bridged/wrapped assets, please select a native/stable swap bridge.
                </p>
            </div>
        </div>
    );
};
