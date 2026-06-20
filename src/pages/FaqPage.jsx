const faq = [
  {
    question: "Como agendar a primeira sessão?",
    answer: "O agendamento pode ser feito por WhatsApp, e-mail ou Instagram. Você recebe as opções de horário e confirma o melhor formato."
  },
  {
    question: "O atendimento pode ser on-line?",
    answer: "Sim. O atendimento é realizado on-line e presencialmente, de acordo com a necessidade e disponibilidade do paciente."
  },
  {
    question: "Qual a frequência das sessões?",
    answer: "A frequência é definida na avaliação inicial, considerando demanda clínica, objetivos e etapa do tratamento."
  },
  {
    question: "Existe sigilo no atendimento?",
    answer: "Sim. O sigilo profissional é princípio ético fundamental e orienta toda a condução do processo terapêutico."
  },
  {
    question: "Atende apenas dependência química?",
    answer: "Não. O atendimento inclui também ansiedade, regulação emocional, autoestima e outras demandas clínicas."
  }
];

export default function FaqPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">FAQ</p>
        <h1 className="text-4xl font-bold text-white">Perguntas frequentes</h1>
        <p className="max-w-4xl text-slate-300">
          Respostas objetivas para dúvidas comuns sobre início do atendimento, formato das sessões e processo clínico.
        </p>
      </header>

      <div className="space-y-4">
        {faq.map((item) => (
          <article key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">{item.question}</h2>
            <p className="mt-3 text-slate-300">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
