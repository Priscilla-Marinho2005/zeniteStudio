
import { FiEye, FiVideo, FiCompass } from "react-icons/fi";

const pillars = [
    {
        icon: FiEye,
        title: "OLHAR ESTRATÉGICO",
        description:
            "Posicionamento claro para sua marca ser reconhecida e lembrada.",
    },
    {
        icon: FiVideo,
        title: "CONTEÚDO COM INTENÇÃO",
        description:
            "Social media, vídeos e roteiros pensados para despertar atenção.",
    },
    {
        icon: FiCompass,
        title: "CRIATIVIDADE APLICADA",
        description:
            "Novos ângulos para comunicar o que torna sua marca diferente.",
    },
];

export default function ZenithPillars() {
    return (
        <section className="bg-white px-6 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_2.15fr] lg:gap-12">

                    {/* Chamada principal */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow">
                            Zênite Studio
                        </span>

                        <h2 className="text-xl font-medium leading-tight text-primary md:text-4xl">
                            MARKETING QUE
                            <br />
                            PENSA ANTES
                            <br />
                            <span className="text-yellow">DE POSTAR.</span>
                        </h2>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-primary/65">
                            O marketing começa onde o óbvio termina.
                        </p>
                    </div>

                    {/* Pilares */}
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                        {pillars.map((pillar, index) => {
                            const Icon = pillar.icon;

                            return (
                                <article
                                    key={pillar.title}
                                    className={`border-t border-primary/15 pt-6 sm:border-l sm:border-t-0 sm:px-5 sm:pt-1 ${index === 0 ? "sm:border-l-0 sm:pl-0" : ""
                                        }`}
                                >
                                    <Icon
                                        size={27}
                                        strokeWidth={1.5}
                                        className="mb-6 text-yellow"
                                    />

                                    <h3 className="font-secondary text-xs font-semibold leading-5 tracking-wide text-primary">
                                        {pillar.title}
                                    </h3>

                                    <p className="mt-3 text-xs leading-[1.8] text-primary/60">
                                        {pillar.description}
                                    </p>

                                    <div className="mt-5 h-px w-8 bg-yellow" />
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Promessa da marca */}
                <div className="mt-10 border-t border-primary/10 pt-5">
                    <p className="text-sm leading-7 text-primary/75">
                        A gente encontra o que sua marca ainda{" "}
                        <span className="font-semibold text-primary">
                            não está enxergando.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
