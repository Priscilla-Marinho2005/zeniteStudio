import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    FaInstagram,
    FaWhatsapp,
    FaRegHeart,
    FaRegComment,
    FaRegBookmark,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function InstagramPhone() {
    return (
        <div className="relative mx-auto h-105 w-50 sm:h-125 sm:w-60 md:h-135 md:w-65 lg:h-145 lg:w-70">
            <div
                aria-hidden
                className="absolute -bottom-6 left-1/2 h-8 w-36 -translate-x-1/2 rounded-[100%] bg-primary/20 blur-xl sm:w-44"
            />

            <div
                aria-hidden
                className="absolute -left-0.75 top-[18%] h-5 w-0.75 rounded-l-sm bg-linear-to-b from-[#c8c8c8] via-[#8a8a8a] to-[#6e6e6e] sm:h-7"
            />
            <div
                aria-hidden
                className="absolute -left-0.75 top-[28%] h-9 w-0.75 rounded-l-sm bg-linear-to-b from-[#c8c8c8] via-[#8a8a8a] to-[#6e6e6e] sm:h-12"
            />
            <div
                aria-hidden
                className="absolute -left-0.75 top-[40%] h-9 w-0.75 rounded-l-sm bg-linear-to-b from-[#c8c8c8] via-[#8a8a8a] to-[#6e6e6e] sm:h-12"
            />
            <div
                aria-hidden
                className="absolute -right-0.75 top-[32%] h-12 w-0.75 rounded-r-sm bg-linear-to-b from-[#c8c8c8] via-[#8a8a8a] to-[#6e6e6e] sm:h-16"
            />

            <div className="absolute inset-0 rounded-[2.2rem] bg-linear-to-br from-[#e8e8e8] via-[#a0a0a0] to-[#5c5c5c] p-0.5 shadow-[0_28px_60px_-12px_rgba(16,25,46,0.4)] sm:rounded-[2.75rem]">
                <div className="relative h-full w-full rounded-[2.1rem] bg-linear-to-b from-[#1c1c1e] to-[#0a0a0a] p-2 sm:rounded-[2.65rem] sm:p-2.5">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0.75 z-20 rounded-[1.95rem] border border-white/10 sm:rounded-[2.45rem]"
                    />

                    <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-white sm:rounded-[2.15rem]">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 z-10 bg-linear-to-br from-white/30 via-transparent to-transparent"
                        />

                        <div className="absolute left-1/2 top-2.5 z-30 flex h-4.5 w-18 -translate-x-1/2 items-center justify-end rounded-full bg-black px-2 sm:top-3 sm:h-5.5 sm:w-23">
                            <span className="h-1.75 w-1.75 rounded-full bg-[#1a1a2e] ring-1 ring-[#2a2a40] sm:h-2.25 sm:w-2.25">
                                <span className="ml-[1.5px] mt-[1.5px] block h-[2.5px] w-[2.5px] rounded-full bg-[#3d5afe]/70 sm:ml-0.5 sm:mt-0.5 sm:h-0.75 sm:w-0.75" />
                            </span>
                        </div>

                        <div className="relative z-0 flex h-full flex-col pt-9 sm:pt-11">
                            <div className="flex items-center justify-between px-3 pb-1.5 sm:px-4 sm:pb-2 mb-2.5 border-b border-black/10">
                                <p className="font-primary text-[13px] tracking-tight text-primary sm:text-[15px]">
                                    Instagram
                                </p>
                                <FiSend size={13} className="text-primary" />
                            </div>

                            <article className="flex flex-1 flex-col">
                                <div className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2">
                                    <img
                                        src="/logo.png"
                                        alt="Zênite Studio"
                                        className="h-6 w-6 rounded-full object-cover ring-1 ring-yellow/40 sm:h-7 sm:w-7"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-[10px] font-semibold text-primary sm:text-[11px]">
                                        zenitestudioo
                                        </p>
                                        <p className="text-[8px] text-gray-400 sm:text-[9px]">
                                            Recife, Brasil
                                        </p>
                                    </div>
                                    <HiOutlineDotsHorizontal
                                        size={13}
                                        className="text-primary/60"
                                    />
                                </div>

                                <div className="relative aspect-square w-full overflow-hidden bg-primary">
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,168,119,0.28),transparent_55%)]"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-5">
                                        <img
                                            src="/logo.png"
                                            alt=""
                                            className="mb-2 h-12 w-12 rounded-full object-cover sm:mb-3 sm:h-16 sm:w-16"
                                        />
                                        <p className="font-primary text-[13px] leading-snug text-white sm:text-[16px]">
                                            Marketing que pensa
                                            <br />
                                            <span className="text-yellow">
                                                antes de postar.
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between px-2.5 pt-2 sm:px-3 sm:pt-2.5">
                                    <div className="flex items-center gap-2.5 text-primary sm:gap-3">
                                        <FaRegHeart size={14} />
                                        <FaRegComment size={14} />
                                        <FiSend size={14} />
                                    </div>
                                    <FaRegBookmark
                                        size={13}
                                        className="text-primary"
                                    />
                                </div>

                                <div className="px-2.5 pt-1.5 sm:px-3 sm:pt-2">
                                    <p className="text-[10px] font-semibold text-primary sm:text-[11px]">
                                        248 curtidas
                                    </p>
                                    <p className="mt-2.5 text-[10px] leading-snug text-primary/90 sm:text-[11.8px]">
                                        <span className="font-semibold">
                                        zenitestudioo
                                        </span>{" "}
                                        <span className="text-primary/70">
                                        <br />
                                        Marketing que pensa antes de postar.
                                        </span>
                                    </p>
                                    <p className="mt-1 text-[8px] uppercase tracking-wide text-gray-400 sm:text-[9px]">
                                        Há 2 horas
                                    </p>
                                </div>
                                <div className="mx-auto mt-auto mb-2 h-0.75 w-20 rounded-full bg-primary/15 sm:h-1 sm:w-24" />
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
/*
const channels = [
    {
        href: "https://www.instagram.com/zenitestudioo/",
        external: true,
        label: (
            <>
                Capte clientes no{" "}
                <span className="font-semibold">Instagram</span>
            </>
        ),
        icon: (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white sm:h-8 sm:w-8 sm:rounded-[9px]">
                <FaInstagram size={16} />
            </span>
        ),
    },
    {
        href: "#",
        external: false,
        label: (
            <>
                Capte clientes no{" "}
                <span className="font-semibold">Facebook</span>
            </>
        ),
        icon: (
            <FaFacebook
                size={26}
                className="shrink-0 text-[#1877F2] sm:text-[30px]"
            />
        ),
    },
    {
        href: "#",
        external: false,
        label: (
            <>
                Capte clientes na{" "}
                <span className="font-semibold">Pesquisa do Google</span>
            </>
        ),
        icon: <FcGoogle size={26} className="shrink-0 sm:text-[30px]" />,
    },
];*/

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.2,
    });

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden bg-white py-16 sm:py-24 lg:py-32"
        >
            <div className="mx-auto flex min-h-0 max-w-340 flex-col items-center gap-12 px-4 sm:gap-16 sm:px-6 md:px-10 lg:min-h-150 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
                <div className="relative flex w-full justify-center lg:w-1/2">
                    <motion.div
                        initial={{
                            scale: 0.85,
                            opacity: 0,
                            y: 36,
                        }}
                        animate={
                            isInView
                                    ? {
                                        scale: 1,
                                        opacity: 1,
                                        y: 0,
                                    }
                                : {}
                        }
                        transition={{
                            duration: 1.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <InstagramPhone />
                    </motion.div>
                </div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 40,
                    }}
                    animate={
                        isInView
                                ? {
                                    opacity: 1,
                                    x: 0,
                                }
                            : {}
                    }
                    transition={{
                        duration: 0.8,
                        delay: 0.25,
                        ease: "easeOut",
                    }}
                    className="flex w-full flex-col gap-5 text-center sm:gap-6 lg:w-1/2 lg:gap-8 lg:text-left"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow sm:text-sm">
                        Sobre a Zênite
                    </span>

                    <h2 className="mx-auto max-w-xl font-primary text-3xl leading-tight text-primary sm:text-4xl md:text-5xl lg:mx-0">
                        Marketing não começa no post.
                    </h2>

                    <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
                        A Zênite Studio desenvolve estratégias de comunicação
                        para marcas que querem construir uma presença digital
                        com intenção, identidade e consistência.
                    </p>

                    <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
                        Pensamos antes de criar. Entendemos a marca, o público
                        e o contexto para transformar ideias em uma comunicação
                        que realmente faça sentido.
                    </p>

                    <div className="flex items-center justify-center gap-3 pt-1 sm:gap-4 lg:justify-start">
                        <a
                            href="https://www.instagram.com/zenitestudioo/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:bg-yellow hover:text-primary sm:h-11 sm:w-11"
                        >
                            <FaInstagram size={18} />
                        </a>

                        <a
                            href="https://wa.me/558185176266"
                            aria-label="WhatsApp"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:bg-yellow hover:text-primary sm:h-11 sm:w-11"
                        >
                            <FaWhatsapp size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/*
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                className="mx-auto mt-12 flex w-[calc(100%-2rem)] max-w-4xl flex-col items-stretch gap-4 rounded-3xl bg-[#F3F4F6] px-5 py-5 shadow-[0_10px_40px_rgba(16,25,46,0.08)] sm:mt-16 sm:px-8 md:mt-20 md:flex-row md:flex-wrap md:items-center md:justify-evenly md:gap-x-6 md:gap-y-4 md:rounded-full md:px-10"
            >
                {channels.map((channel, index) => (
                    <a
                        key={index}
                        className="flex items-center justify-center gap-3 md:justify-start cursor-default"
                    >
                        {channel.icon}
                        <p className="font-primary text-sm text-primary sm:text-base md:text-lg">
                            {channel.label}
                        </p>
                    </a>
                ))}
            </motion.div>*/}
        </section>
    );
}
