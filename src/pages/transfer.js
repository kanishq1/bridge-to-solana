import WormholeBridge from "@wormhole-foundation/wormhole-connect";
import Script from "next/script";
import React, { useEffect } from "react";

const config = {
    bridgeDefaults: {
        requiredNetwork: "solana",
        toNetwork: "solana",
    },
    env: "testnet",
    customTheme: {
        background: {
            default: "#121615",
        },
    },
};

export default function Transfer() {
    return (
        <div className="h-screen">
            <WormholeBridge config={config} />
        </div>
    );
}
