const steps = [
  "Envie mensagem com nome e objetivo do atendimento",
  "Receba opções de horário e formato (on-line ou presencial)",
  "Confirme sessão e orientações iniciais"
];

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Contato</p>
        <h1 className="text-4xl font-bold text-white">Agendamento e informações</h1>
        <p className="max-w-3xl text-slate-300">
          Para iniciar acompanhamento psicológico, utilize os canais oficiais abaixo.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-emerald-50">
          <p className="text-sm font-bold uppercase tracking-wide">WhatsApp</p>
          <p className="mt-2 text-3xl font-extrabold">(91) 98486-4748</p>
          <a
            href="https://wa.me/5591984864748?text=Olá%2C%20gostaria%20de%20agendar%20um%20atendimento."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-xl bg-emerald-100 px-5 py-3 text-sm font-bold text-emerald-900"
          >
            Falar no WhatsApp
          </a>
        </article>

        <article className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <a
            href="mailto:Danilosouzapsi@gmail.com"
            className="block rounded-xl border border-slate-700 p-4 text-slate-200 hover:border-brand-400"
          >
            Danilosouzapsi@gmail.com
          </a>

          <a
            href="https://instagram.com/danilo_souzac_x"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-fuchsia-500/40 bg-fuchsia-500/10 p-4"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-orange-400 via-fuchsia-500 to-indigo-500 font-bold text-white">
              IG
            </span>
            <span>
              <strong className="block text-white">Instagram oficial</strong>
              <span className="text-sm text-slate-300">@danilo_souzac_x</span>
            </span>
          </a>
          <p className="text-sm text-slate-400">Atendimento on-line para todo o Brasil e presencial em Belém.</p>
        </article>
      </div>

      <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-2xl font-bold text-white">Como funciona o primeiro contato</h2>
        <ul className="mt-4 space-y-2 text-slate-300">
          {steps.map((step) => (
            <li key={step} className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">
              {step}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
