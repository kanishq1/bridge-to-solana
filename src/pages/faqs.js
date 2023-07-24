import Header from "../components/header";
import Footer from "../components/footer";
import { faqs } from "../components/faqs";

export default function Faqs() {
    return (
        <main className={`min-h-screen p-10 md:px-32 px-8 pb-10 bg-[#000] bg-contain`}>
            <Header />
            <div className="max-w-4xl my-20 flex flex-col gap-y-12 mx-auto">
                <h1 className="sm:text-5xl text-3xl text-center mb-5">Frequently Asked Questions</h1>
                {faqs.map(({ question, answer }, index) => (
                    <div className="text-white" key={index}>
                        <h3 className="mb-4 text-lg">{question}</h3>
                        <p className="opacity-70">{answer}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </main>
    );
}
