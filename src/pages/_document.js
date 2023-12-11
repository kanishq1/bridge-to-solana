import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>The Solana Bridge</title>
                <meta name="description" content="undefined" />

                <meta property="og:url" content="https://www.thesolanabridge.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="The Solana Bridge" />
                <meta property="og:description" content="undefined" />
                <meta property="og:image" content="https://thesolanabridge.com/ogImg.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="thesolanabridge.com" />
                <meta property="twitter:url" content="https://www.thesolanabridge.com/" />
                <meta name="twitter:title" content="The Solana Bridge" />
                <meta name="twitter:description" content="undefined" />
                <meta name="twitter:image" content="https://thesolanabridge.com/ogImg.png" />
            </Head>
            <body className="bg-[#121615]">
                <Main />
                <NextScript />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-27EP50W7EK"></script>
                <script src="/main.js" />
            </body>
        </Html>
    );
}
