import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta property="og:image" content="/ogImg.png" />
                <meta property="twitter:image" content="/ogImg.png" />
                <link rel="icon" href="/logo.png" />
                <meta property="og:title" content="The Solana Bridge" />
                <title>The Solana Bridge</title>
            </Head>
            <body className="bg-[#121615]">
                <Main />
                <NextScript />
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-27EP50W7EK"></Script>
                <Script src="/main.js" />
            </body>
        </Html>
    );
}
