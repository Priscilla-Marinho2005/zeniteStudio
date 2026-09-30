const fakeMedia = [
    { type: "POST", title: "Conteúdo estratégico" },
    { type: "REEL", title: "Vídeo para Instagram" },
    { type: "CASE", title: "Identidade de marca" },
    { type: "POST", title: "Comunicação digital" },
    { type: "REEL", title: "Estratégia em movimento" },
];

interface Media {
    type: string;
    title: string;
}

function MediaCard({
    item,
    className = "",
}: {
    item: Media;
    className?: string;
}) {
    return (
        <div
            className={`shrink-0 overflow-hidden rounded-xl bg-gray-200 ${className}`}
        >
            <div className="flex h-full flex-col justify-between p-3 sm:p-4">
                <span className="text-[10px] font-medium text-gray-500 sm:text-xs">
                    {item.type}
                </span>

                <span className="text-xs font-semibold text-primary sm:text-sm">
                    {item.title}
                </span>
            </div>
        </div>
    );
}

function MediaColumn({ reverse = false }: { reverse?: boolean }) {
    const items = [...fakeMedia, ...fakeMedia];

    return (
        <div className="h-72 overflow-hidden md:h-100 lg:h-145">
            <div
                className={`flex flex-col gap-3 ${
                    reverse ? "animate-marquee-down" : "animate-marquee-up"
                }`}
            >
                {items.map((item, index) => (
                    <MediaCard
                        key={`${item.title}-${index}`}
                        item={item}
                        className="h-44 w-36 sm:h-52 sm:w-40 md:h-56 md:w-44 lg:h-60"
                    />
                ))}
            </div>
        </div>
    );
}

function MediaRow() {
    const items = [...fakeMedia, ...fakeMedia];

    return (
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden lg:hidden">
            <div className="flex w-max animate-marquee-x gap-3 px-4">
                {items.map((item, index) => (
                    <MediaCard
                        key={`row-${item.title}-${index}`}
                        item={item}
                        className="h-40 w-32 sm:h-48 sm:w-36"
                    />
                ))}
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative left-1/2 mt-13 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[#F8F3ED] sm:mt-15 md:mt-16">
            <div className="mx-auto flex max-w-340 flex-col items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-0">
                {/* Lado esquerdo */}
                <div className="flex w-full max-w-2xl flex-col gap-4 text-center sm:gap-5 lg:text-left">
                    <h1 className="text-[11px] font-semibold tracking-wide text-yellow sm:text-sm">
                        ZÊNITE STUDIO - EMPRESA DE MARKETING DIGITAL
                    </h1>

                    <p className="text-3xl font-semibold leading-tight text-primary sm:text-5xl md:text-6xl">
                        Marketing que pensa antes de postar.
                    </p>

                    <p className="mx-auto max-w-xl text-base text-primary/80 sm:text-lg md:text-xl lg:mx-0">
                        Uma agência de marketing que enxerga oportunidades de
                        comunicação onde outras pessoas enxergam só um post.
                    </p>

                    <div className="mt-1 flex flex-col gap-3 sm:mt-2 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start lg:gap-5">
                        <button
                            type="button"
                            className="rounded-full bg-primary px-8 py-2.5 text-sm font-medium text-white sm:px-10 sm:text-base"
                        >
                            Ver mais
                        </button>

                        <button
                            type="button"
                            className="rounded-full bg-yellow px-8 py-2.5 text-sm font-medium text-primary sm:px-10 sm:text-base"
                        >
                            Conversar
                        </button>
                    </div>
                </div>

                {/* Mobile / tablet: marquee horizontal */}
                <MediaRow />

                {/* Desktop: colunas verticais */}
                <div className="hidden h-145 shrink-0 gap-4 overflow-hidden lg:flex lg:gap-5">
                    <MediaColumn />
                    <MediaColumn reverse />
                </div>
            </div>
        </section>
    );
}
