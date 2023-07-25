import Header from "../components/header";
import Footer from "../components/footer";
import { faqs } from "../components/faqs";

export default function Faqs() {
    return (
        <main className={`min-h-screen p-10 md:px-32 px-8 pb-10 bg-[#000] bg-contain`}>
            <Header />
            <div>
                <img className="absolute z-0 left-0" src={"/bg-lines.png"} />
            </div>
            <div className="max-w-4xl my-20 flex flex-col gap-y-12 mx-auto relative z-10">
                <h1 className="sm:text-5xl text-3xl text-center mb-5 font-semibold">Frequently Asked Questions</h1>
                {faqs.map(({ question, answer }, index) => (
                    <div className="text-white" key={index}>
                        <h3 className="mb-4 text-xl font-semibold">{question}</h3>
                        <p className="opacity-70 text-lg font-normal">{answer}</p>
                    </div>
                ))}
                <div className="text-white">
                    <h3 className="mb-4 text-xl font-semibold">Whom to contact for any queries?</h3>
                    <p className="opacity-70 text-lg font-normal">
                        If you have any further questions or require troubleshooting, please reach out to{" "}
                        <a className="underline text-green-400" href="https://twitter.com/MayanFinance" target="_blank">
                            Mayan Finance team
                        </a>{" "}
                        or &nbsp;
                        <a className="underline text-green-400" href="https://twitter.com/yashhsm" target="_blank">
                            Yash
                        </a>
                        &nbsp;on Twitter .
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
