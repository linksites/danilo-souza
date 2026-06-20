import { Link } from "react-router-dom";

const specialties = [
  {
    title: "Tratamento para dependência química",
    text: "Acompanhamento psicológico para identificar gatilhos, fortalecer motivação de mudança e construir prevenção de recaídas.",
    focus: ["Mapeamento de contextos de risco", "Estruturação de rotina de proteção", "Apoio ao processo de reorganização pessoal"]
  },
  {
    title: "Terapia Cognitivo-Comportamental",
    text: "Intervenções práticas para reorganizar pensamentos, emoções e comportamentos com metas objetivas de progresso.",
    focus: ["Reestruturação cognitiva", "Treino de habilidades de enfrentamento", "Monitoramento de resultados por etapa"]
  },
  {
    title: "Ansiedade e regulação emocional",
    text: "Suporte clínico para reduzir sofrimento, ampliar autocontrole e melhorar desempenho pessoal e profissional.",
    focus: ["Manejo de sintomas de ansiedade", "Fortalecimento de autorregulação", "Planejamento de rotina emocionalmente sustentável"]
  },
  {
    title: "Autoestima e desenvolvimento humano",
    text: "Processo terapêutico voltado ao fortalecimento da identidade, autonomia e tomada de decisão com clareza.",
    focus: ["Reconstrução de autopercepção", "Trabalho com limites e assertividade", "Definição de metas de vida realistas"]
  }
];

export default function SpecialtiesPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Especialidades</p>
        <h1 className="text-4xl font-bold text-white">Áreas de atuação clínica</h1>
        <p className="max-w-4xl text-slate-300">
          Cada frente de atendimento possui objetivos terapêuticos claros e estratégias específicas para a demanda
          apresentada em sessão.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {specialties.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">{item.title}</h2>
            <p className="mt-3 text-slate-300">{item.text}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {item.focus.map((line) => (
                <li key={line} className="rounded-lg border border-slate-700 bg-slate-800/50 p-2">
                  {line}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-brand-700/30 bg-brand-900/20 p-6">
        <h2 className="text-2xl font-bold text-white">Precisa de orientação para escolher a melhor linha?</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          A definição da estratégia terapêutica é feita após avaliação inicial da demanda, contexto de vida e objetivos.
        </p>
        <Link
          to="/contato"
          className="mt-5 inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
        >
          Entrar em contato
        </Link>
      </div>
    </section>
  );
}
