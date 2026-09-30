import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const links = [
    { label: "Perspectiva", href: "#" },
    { label: "Soluções", href: "#" },
    { label: "Cases", href: "#" },
];

export default function Nav() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 z-50 w-full border-b border-white/20 shadow-lg backdrop-blur-lg ${
                    open ? "bg-primary" : "bg-primary/90"
                }`}
            >
                <div className="mx-auto flex max-w-340 items-center justify-between px-4 py-2 sm:px-6 md:px-10">
                    <a href="/" className="relative z-70 shrink-0">
                        <img
                            className="h-9 w-auto sm:h-11 md:h-12"
                            src="/logoHorizontal.png"
                            alt="Zênite Studio"
                            title="Zênite Studio"
                        />
                    </a>

                    {/* desktop */}
                    <ul className="hidden items-center gap-5 text-sm text-white md:flex lg:gap-7 lg:text-base">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="cursor-pointer transition-all duration-300 hover:text-yellow"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#"
                                className="cursor-pointer font-medium text-yellow transition-all duration-300 hover:text-white"
                            >
                                Conversar
                            </a>
                        </li>
                    </ul>

                    {/* mobile toggle */}
                    <button
                        type="button"
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((prev) => !prev)}
                        className="relative z-70 flex h-10 w-10 items-center justify-center text-white md:hidden"
                    >
                        {open ? (
                            <HiOutlineX size={26} />
                        ) : (
                            <HiOutlineMenuAlt3 size={26} />
                        )}
                    </button>
                </div>
            </nav>

            {/* mobile menu — fora do nav para garantir fundo em tela cheia */}
            <div
                className={`fixed inset-0 z-40 min-h-dvh w-full bg-primary transition-transform duration-300 ease-out md:hidden ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col px-6 pb-10 pt-24">
                    <ul className="flex flex-col gap-6 text-2xl text-white">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block transition-colors duration-300 hover:text-yellow"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#"
                        onClick={() => setOpen(false)}
                        className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-yellow px-8 py-3 text-center text-base font-medium text-primary transition-opacity hover:opacity-90"
                    >
                        Conversar
                    </a>
                </div>
            </div>
        </>
    );
}
