import { Html, Head, Main, NextScript } from "next/document";

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
                <script src="/main.js" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-27EP50W7EK"></script>
                <script>
                    window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date()); gtag('config', 'G-27EP50W7EK');
                </script>
            </body>
        </Html>
    );
}
