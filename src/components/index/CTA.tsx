
import { FiArrowUpRight } from "react-icons/fi";

export default function CTA() {
    const whatsappNumber = "5500000000000";

    const message = encodeURIComponent(
        "Olá! Conheci a Zênite Studio pelo site e gostaria de conversar sobre os serviços."
    );

    return (
        <section className="border-b border-white/10 pb-10 relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-primary px-6 py-20 md:px-12 md:py-28">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-yellow/10" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-yellow/10" />

            <div className="relative mx-auto max-w-6xl">
                <div className="max-w-3xl">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-px w-8 bg-yellow" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow">
                            O próximo passo começa aqui
                        </span>
                    </div>

                    <h2 className="font-primary text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                        Sua marca tem
                        <br />
                        mais a dizer.
                        <br />
                        <span className="italic text-yellow">
                            Vamos descobrir o quê?
                        </span>
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                        Conte para a gente sobre sua marca. Vamos olhar
                        além do óbvio e encontrar novas possibilidades
                        para sua comunicação.
                    </p>

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-9 inline-flex items-center gap-5 rounded-full bg-yellow px-6 py-4 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-white"
                    >
                        Vamos conversar
                        <FiArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
