import { Link } from "react-router-dom";

const education = [
  "Pos em Transtorno Bordeline e Terapia Cognitivo Comportamental",
  "Pos em Terapia Cognitivo Comportamental de Alta Performance"
];

const principles = [
  "Sigilo, etica e responsabilidade em toda conducao clinica",
  "Plano de tratamento com objetivos claros e revisao continua",
  "Intervencoes praticas para ganhos reais no dia a dia"
];

export default function ProfilePage() {
  const profileImageSrc = `${import.meta.env.BASE_URL}assets/Dr.Danilo-Souza.jpg`;

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Perfil Profissional</p>
        <h1 className="text-4xl font-bold text-white">Dr. Danilo Souza</h1>
        <p className="max-w-4xl text-slate-300">
          Psicologo clinico com atuacao voltada para acolhimento tecnico, avaliacao responsavel da demanda e construcao
          de progresso terapeutico sustentavel.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <img
            src={profileImageSrc}
            alt="Dr. Danilo Souza"
            className="h-full w-full rounded-xl object-cover"
          />
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold text-white">Formacao complementar</h2>
          <ul className="mt-5 space-y-3 text-slate-200">
            {education.map((item) => (
              <li key={item} className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-bold text-white">Diretrizes de atendimento</h3>
          <ul className="mt-4 space-y-2 text-slate-300">
            {principles.map((item) => (
              <li key={item} className="rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-700 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Registro profissional</p>
              <p className="mt-2 text-lg font-semibold text-white">CRP-10/11505</p>
            </div>
            <div className="rounded-xl border border-slate-700 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">Modalidade</p>
              <p className="mt-2 text-lg font-semibold text-white">Online e presencial</p>
            </div>
          </div>

          <div className="mt-7">
            <Link
              to="/contato"
              className="inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
            >
              Solicitar agendamento
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
