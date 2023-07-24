import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-[#121615]">
                <Main />
                <NextScript />
                <script src="/main.js" />
            </body>
        </Html>
    );
}
