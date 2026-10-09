
import {
    FiArrowUpRight,
    FiInstagram,
    FiMessageCircle,
} from "react-icons/fi";

const navigation = [
    { label: "A Zênite", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Depoimentos", href: "#depoimentos" },
];

export default function Footer() {
    const whatsappNumber = "5500000000000";
    const instagramUrl = "https://instagram.com/SEU_PERFIL";

    return (
        <footer className="bg-primary text-white">
            <div className="mx-auto max-w-6xl px-6 pt-14 pb-6 md:px-10 md:pt-16">
                {/* Área principal */}
                <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
                    {/* Marca */}
                    <div>
                        <a
                            href="#inicio"
                            aria-label="Zênite Studio - Início"
                            className="inline-block"
                        >
                            <img src="/logoHorizontal.png" alt="Zênite Studio" className="w-55" />
                        </a>

                        <p className="max-w-xs text-sm leading-7 text-white/55">
                            Marketing que pensa antes de postar.
                            Estratégia e criatividade para marcas
                            que querem ir além do óbvio.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram da Zênite Studio"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#C9A877] hover:text-[#C9A877]"
                            >
                                <FiInstagram size={17} />
                            </a>

                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp da Zênite Studio"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#C9A877] hover:text-[#C9A877]"
                            >
                                <FiMessageCircle size={17} />
                            </a>
                        </div>
                    </div>

                    {/* Navegação */}
                    <div>
                        <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A877]">
                            Navegação
                        </h3>

                        <nav aria-label="Navegação do rodapé">
                            <ul className="space-y-3">
                                {navigation.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-sm text-white/65 transition-colors hover:text-[#C9A877]"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A877]">
                            Vamos conversar?
                        </h3>

                        <p className="mb-5 max-w-xs text-sm leading-6 text-white/55">
                            Sua marca tem mais a dizer. Vamos descobrir
                            juntos como comunicar isso.
                        </p>

                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                "Olá! Gostaria de conhecer os serviços da Zênite Studio."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-sm font-medium text-[#C9A877] transition-colors hover:text-white"
                        >
                            Entre em contato
                            <FiArrowUpRight size={17} />
                        </a>
                    </div>
                </div>

                {/* Base do footer */}
                <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} Zênite Studio. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
