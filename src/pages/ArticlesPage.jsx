const articles = [
  {
    title: "Quando procurar apoio psicológico?",
    summary:
      "Sofrimento persistente, ansiedade intensa, luto e dificuldade de relacionamento são sinais de que o acompanhamento pode ser necessário.",
    points: [
      "Perda de interesse em atividades habituais",
      "Irritabilidade frequente e sobrecarga emocional",
      "Dificuldade para manter rotina e foco"
    ]
  },
  {
    title: "Como a psicoterapia ajuda na dependência química",
    summary:
      "O processo terapêutico apoia a identificação de gatilhos e o fortalecimento de habilidades para sustentar abstinência e estabilidade.",
    points: [
      "Compreensão de padrões de uso",
      "Treino de enfrentamento para recaídas",
      "Reconstrução de vínculos e projeto de vida"
    ]
  },
  {
    title: "TCC e rotina emocional",
    summary:
      "A terapia cognitivo-comportamental oferece ferramentas práticas para mudança de comportamento e redução de sofrimento.",
    points: [
      "Ajuste de pensamentos automáticos",
      "Planejamento de ações objetivas",
      "Revisão frequente de progresso em sessão"
    ]
  }
];

export default function ArticlesPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Artigos</p>
        <h1 className="text-4xl font-bold text-white">Conteúdo de orientação para pacientes e familiares</h1>
        <p className="max-w-4xl text-slate-300">
          Conteúdos introdutórios para apoiar tomada de decisão sobre início de psicoterapia, entendimento de sintomas e
          continuidade de cuidado.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">{article.title}</h2>
            <p className="mt-3 text-slate-300">{article.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {article.points.map((point) => (
                <li key={point} className="rounded-lg border border-slate-700 bg-slate-800/60 p-2">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
