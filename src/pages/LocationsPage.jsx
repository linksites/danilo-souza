import { Link } from "react-router-dom";

const locations = [
  {
    unit: "Unidade Marco",
    address: ["Tv. Barão do Triunfo, 3540A - Marco", "Ed. Infinity Corp. 11º andar, sala 1115", "Mind Center - fim do corredor"]
  },
  {
    unit: "Unidade Nazaré",
    address: ["Av. Comandante Brás de Aguiar, 936", "Alameda Dr. Feliciano Mendonça, casa 2 e 4 - sala", "Bairro do Nazaré"]
  }
];

export default function LocationsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Endereços</p>
        <h1 className="text-4xl font-bold text-white">Atendimento presencial em Belém</h1>
        <p className="max-w-4xl text-slate-300">
          Escolha a unidade com melhor logística para sua rotina. O agendamento é realizado previamente pelos canais oficiais.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {locations.map((place) => (
          <article key={place.unit} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">{place.unit}</h2>
            <div className="mt-3 space-y-1 text-slate-300">
              {place.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-2xl font-bold text-white">Como confirmar local e horário</h2>
        <p className="mt-3 text-slate-300">
          Antes da primeira sessão, confirme unidade, horário e orientações de chegada para evitar atraso e melhorar a experiência.
        </p>
        <Link
          to="/contato"
          className="mt-5 inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
        >
          Confirmar agendamento
        </Link>
      </div>
    </section>
  );
}
