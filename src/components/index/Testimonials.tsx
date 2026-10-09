
import { FaGoogle, FaStar } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Nome do cliente",
    business: "Empresa do cliente",
    initials: "NC",
    text: "O trabalho trouxe mais clareza para a comunicação da nossa marca. A equipe entendeu nossa essência e conseguiu transformar nossas ideias em conteúdos muito mais estratégicos.",
  },
  {
    name: "Nome do cliente",
    business: "Empresa do cliente",
    initials: "NC",
    text: "Gostamos muito do cuidado com cada detalhe e da criatividade nas propostas. O processo foi organizado e as entregas ficaram alinhadas com o que imaginávamos para a marca.",
  },
  {
    name: "Nome do cliente",
    business: "Empresa do cliente",
    initials: "NC",
    text: "Encontramos uma equipe que realmente procura entender a marca antes de criar. As ideias têm propósito e a comunicação ganhou uma direção mais consistente.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Cabeçalho */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow">
              A experiência de quem confia
            </span>

            <h2 className="font-primary text-3xl leading-tight text-primary md:text-4xl">
              Palavras que
              <br />
              <span className="text-yellow">
                falam por nós.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-primary/65">
            Cada parceria começa com uma ideia e cresce
            com escuta, estratégia e colaboração.
          </p>
        </div>

        {/* Avaliações */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="flex flex-col rounded-xl border border-primary/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow/60 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <FaGoogle
                  size={23}
                  className="text-[#4285F4]"
                  aria-label="Google"
                />

                <span className="text-xs text-primary/40">
                  Avaliação no Google
                </span>
              </div>

              <div
                className="mb-4 flex gap-1 text-yellow"
                aria-label="Exemplo de avaliação com cinco estrelas"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={13} />
                ))}
              </div>

              <p className="flex-1 text-sm leading-7 text-primary/75">
                “{item.text}”
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-primary/10 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-secondary text-xs font-medium text-yellow">
                  {item.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-primary">
                    {item.name}
                  </h3>
                  <p className="truncate text-xs text-primary/50">
                    {item.business}
                  </p>
                </div>

                <FiArrowUpRight
                  size={18}
                  className="shrink-0 text-yellow"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Rodapé da seção */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 sm:flex-row">
          <p className="text-xs leading-6 text-priamry/55">
            Relações construídas com criatividade, cuidado e propósito.
          </p>

          <div className="flex items-center gap-2">
            <FaGoogle size={18} className="text-[#4285F4]" />
            <span className="text-xs font-medium text-primary">
              A opinião dos nossos clientes importa.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
