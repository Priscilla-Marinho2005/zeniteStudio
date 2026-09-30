import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

function IlluStrategy() {
    return (
        <svg viewBox="0 0 160 100" className="h-full w-full" fill="none">
            <circle cx="48" cy="52" r="28" stroke="#C9A877" strokeWidth="1.5" />
            <circle cx="48" cy="52" r="12" fill="#C9A877" fillOpacity="0.35" />
            <path
                d="M76 30h52M76 50h40M76 70h46"
                stroke="#F8F3ED"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeOpacity="0.55"
            />
            <circle cx="128" cy="30" r="3" fill="#C9A877" />
            <circle cx="116" cy="50" r="3" fill="#C9A877" />
            <circle cx="122" cy="70" r="3" fill="#C9A877" />
        </svg>
    );
}

function IlluSocial() {
    return (
        <svg viewBox="0 0 160 100" className="h-full w-full" fill="none">
            <rect
                x="28"
                y="18"
                width="44"
                height="64"
                rx="10"
                stroke="#C9A877"
                strokeWidth="1.5"
            />
            <rect
                x="36"
                y="28"
                width="28"
                height="36"
                rx="3"
                fill="#C9A877"
                fillOpacity="0.28"
            />
            <circle cx="50" cy="72" r="3" fill="#F8F3ED" fillOpacity="0.5" />
            <rect
                x="84"
                y="28"
                width="48"
                height="12"
                rx="3"
                fill="#F8F3ED"
                fillOpacity="0.2"
            />
            <rect
                x="84"
                y="48"
                width="40"
                height="8"
                rx="2"
                fill="#C9A877"
                fillOpacity="0.45"
            />
            <rect
                x="84"
                y="64"
                width="32"
                height="8"
                rx="2"
                fill="#F8F3ED"
                fillOpacity="0.15"
            />
        </svg>
    );
}

function IlluVideo() {
    return (
        <svg viewBox="0 0 160 100" className="h-full w-full" fill="none">
            <rect
                x="30"
                y="22"
                width="72"
                height="56"
                rx="8"
                stroke="#C9A877"
                strokeWidth="1.5"
            />
            <path
                d="M58 40v20l18-10-18-10Z"
                fill="#C9A877"
                fillOpacity="0.85"
            />
            <path
                d="M112 34l22-10v52l-22-10V34Z"
                stroke="#F8F3ED"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeOpacity="0.45"
            />
        </svg>
    );
}

function IlluCreative() {
    return (
        <svg viewBox="0 0 160 100" className="h-full w-full" fill="none">
            <path
                d="M80 16l8 22h24l-19 14 7 22-20-14-20 14 7-22-19-14h24l8-22Z"
                stroke="#C9A877"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <circle
                cx="80"
                cy="52"
                r="10"
                fill="#C9A877"
                fillOpacity="0.3"
            />
            <path
                d="M28 78c12-16 28-16 40 0M92 78c12-16 28-16 40 0"
                stroke="#F8F3ED"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeOpacity="0.35"
            />
        </svg>
    );
}

const services: {
    title: string;
    description: string;
    illustration: ReactNode;
}[] = [
    {
        title: "Estratégia e posicionamento",
        description:
            "Clareza sobre o que a marca é e por que alguém deveria lembrar dela.",
        illustration: <IlluStrategy />,
    },
    {
        title: "Social media",
        description:
            "Conteúdo com ideia, planejado e produzido para cada marca.",
        illustration: <IlluSocial />,
    },
    {
        title: "Vídeo e conteúdo",
        description:
            "Reels, carrosséis e roteiros feitos para fazer alguém parar de rolar.",
        illustration: <IlluVideo />,
    },
    {
        title: "Criatividade aplicada",
        description:
            "Olhar de fora para achar o ângulo que ninguém no segmento usou.",
        illustration: <IlluCreative />,
    },
];

const HOLD_MS = 1400;

export default function WhatWeDo() {
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { amount: 0.25, once: true });
    const [showServices, setShowServices] = useState(false);

    useEffect(() => {
        if (!inView) return;

        const timer = setTimeout(() => setShowServices(true), HOLD_MS);
        return () => clearTimeout(timer);
    }, [inView]);

    return (
        <section
            ref={sectionRef}
            className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-primary text-white"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(201,168,119,0.14),transparent_50%),radial-gradient(ellipse_at_90%_80%,rgba(201,168,119,0.08),transparent_45%)]"
            />

            <div className="relative mx-auto flex min-h-svh max-w-340 flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28">
                <motion.h2
                    initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
                    animate={
                        inView
                            ? {
                                  opacity: 1,
                                  y: 0,
                                  filter: "blur(0px)",
                              }
                            : {}
                    }
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`max-w-4xl font-primary leading-[1.15] transition-[font-size,text-align,margin] duration-700 ease-out ${
                        showServices
                            ? "mb-8 text-left text-2xl sm:mb-10 sm:text-3xl md:mb-14 md:text-5xl"
                            : "mx-auto mb-0 text-center text-3xl sm:text-5xl md:text-7xl"
                    }`}
                >
                    A gente encontra o que sua marca{" "}
                    <span className="text-yellow">
                        ainda não está enxergando.
                    </span>
                </motion.h2>

                <motion.div
                    initial={false}
                    animate={
                        showServices
                            ? { opacity: 1, y: 0, height: "auto" }
                            : { opacity: 0, y: 48, height: 0 }
                    }
                    transition={{
                        duration: 0.85,
                        ease: [0.22, 1, 0.36, 1],
                        opacity: { duration: 0.6, delay: 0.1 },
                    }}
                    className="overflow-hidden"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={
                            showServices
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 16 }
                        }
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="mb-6 sm:mb-8"
                    >
                        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.28em] text-yellow sm:text-xs">
                            Soluções
                        </span>
                        <h3 className="font-primary text-xl sm:text-2xl md:text-3xl">
                            O que fazemos
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.article
                                key={service.title}
                                initial={{ opacity: 0, y: 28 }}
                                animate={
                                    showServices
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 28 }
                                }
                                transition={{
                                    duration: 0.55,
                                    delay: 0.28 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/4 transition-colors duration-300 hover:border-yellow/35 hover:bg-white/[0.07] sm:rounded-2xl"
                            >
                                <div className="relative h-16 bg-[#0B1224] px-2.5 pt-1.5 sm:h-28 sm:px-4 sm:pt-3 md:h-32">
                                    <span className="absolute right-2 top-2 font-primary text-[9px] tracking-widest text-yellow/70 sm:right-3 sm:top-3 sm:text-[11px]">
                                        0{index + 1}
                                    </span>
                                    <div className="h-full scale-90 transition-transform duration-500 group-hover:scale-[1.04] sm:scale-100">
                                        {service.illustration}
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col gap-1 px-2.5 py-2.5 sm:gap-2 sm:px-4 sm:py-4">
                                    <h4 className="font-primary text-sm leading-snug transition-colors duration-300 group-hover:text-yellow sm:text-lg">
                                        {service.title}
                                    </h4>
                                    <p className="text-[11px] leading-relaxed text-white/55 sm:text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
