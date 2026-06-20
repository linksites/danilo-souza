const highlights = [
  "Atendimento psicológico on-line para todo o Brasil",
  "Foco clínico em dependência química e TCC",
  "Atendimento presencial em Belém com plano terapêutico estruturado"
];

const education = [
  "Pós em Transtorno Borderline e Terapia Cognitivo-Comportamental",
  "Pós em Terapia Cognitivo-Comportamental de Alta Performance"
];

const principles = [
  "Sigilo, ética e responsabilidade em toda condução clínica",
  "Plano de tratamento com objetivos claros e revisão contínua",
  "Intervenções práticas para ganhos reais no dia a dia"
];

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

const stages = [
  {
    title: "1. Acolhimento inicial",
    text: "Escuta da queixa principal, contexto atual e histórico relevante para compreender a demanda com clareza."
  },
  {
    title: "2. Avaliação clínica",
    text: "Mapeamento de sintomas, fatores de manutenção do sofrimento e definição de foco de intervenção."
  },
  {
    title: "3. Plano terapêutico",
    text: "Organização de objetivos, frequência de sessão e estratégias práticas alinhadas ao momento do paciente."
  },
  {
    title: "4. Consolidação de ganhos",
    text: "Revisão de progresso, prevenção de recaídas e fortalecimento de autonomia para continuidade da evolução."
  }
];

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

const steps = [
  "Envie mensagem com nome e objetivo do atendimento",
  "Receba opções de horário e formato (on-line ou presencial)",
  "Confirme sessão e orientações iniciais"
];

export default function HomePage() {
  const profileImageSrc = `${import.meta.env.BASE_URL}assets/danilo-souza.jpg`;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section id="inicio" className="rounded-3xl border border-brand-700/40 bg-slate-900/80 p-8 shadow-2xl shadow-brand-900/20 md:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          Site institucional
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
          Danilo Souza, psicólogo clínico com atendimento on-line para todo o Brasil.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-300">
          Atendimento com método, acolhimento e responsabilidade técnica para promover estabilidade emocional, autonomia
          e desenvolvimento pessoal.
        </p>

        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {highlights.map((item) => (
            <li key={item} className="rounded-xl border border-slate-700 bg-slate-800/50 p-3 text-sm text-slate-200">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contato"
            className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-400"
          >
            Agendar atendimento
          </a>
          <a
            href="#perfil"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-brand-500 hover:text-brand-200"
          >
            Conhecer perfil profissional
          </a>
        </div>
      </section>

      {/* Profile Section */}
      <section id="perfil" className="space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Perfil Profissional</p>
          <h2 className="text-4xl font-bold text-white">Danilo Souza</h2>
          <p className="max-w-4xl text-slate-300">
            Psicólogo clínico com atuação voltada para acolhimento técnico, avaliação responsável da demanda e construção
            de progresso terapêutico sustentável.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <img
              src={profileImageSrc}
              alt="Danilo Souza"
              className="h-full w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold text-white">Formação complementar</h3>
            <ul className="mt-5 space-y-3 text-slate-200">
              {education.map((item) => (
                <li key={item} className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 text-xl font-bold text-white">Diretrizes de atendimento</h4>
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
                <p className="mt-2 text-lg font-semibold text-white">On-line e presencial</p>
              </div>
            </div>

            <div className="mt-7">
              <a
                href="#contato"
                className="inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
              >
                Solicitar agendamento
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Especialidades</p>
          <h2 className="text-4xl font-bold text-white">Áreas de atuação clínica</h2>
          <p className="max-w-4xl text-slate-300">
            Cada frente de atendimento possui objetivos terapêuticos claros e estratégias específicas para a demanda
            apresentada em sessão.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {specialties.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
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
          <h3 className="text-2xl font-bold text-white">Precisa de orientação para escolher a melhor linha?</h3>
          <p className="mt-3 max-w-3xl text-slate-300">
            A definição da estratégia terapêutica é feita após avaliação inicial da demanda, contexto de vida e objetivos.
          </p>
          <a
            href="#contato"
            className="mt-5 inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      {/* Approach Section */}
      <section id="abordagem" className="space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Abordagem</p>
          <h2 className="text-4xl font-bold text-white">Como o atendimento é conduzido</h2>
          <p className="max-w-4xl text-slate-300">
            O processo terapêutico segue etapas claras para garantir direção clínica, segurança e continuidade no cuidado.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {stages.map((stage) => (
            <article key={stage.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-white">{stage.title}</h3>
              <p className="mt-3 text-slate-300">{stage.text}</p>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-brand-700/30 bg-brand-900/20 p-6">
          <h3 className="text-2xl font-bold text-white">Objetivo principal da psicoterapia</h3>
          <p className="mt-3 max-w-3xl text-slate-300">
            Reduzir sofrimento emocional, ampliar clareza de decisão e fortalecer recursos internos para lidar melhor com desafios
            pessoais, familiares e profissionais.
          </p>
          <a
            href="#contato"
            className="mt-5 inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            Iniciar acompanhamento
          </a>
        </div>
      </section>

      {/* Articles Section */}
      <section id="artigos" className="space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Artigos</p>
          <h2 className="text-4xl font-bold text-white">Conteúdo de orientação para pacientes e familiares</h2>
          <p className="max-w-4xl text-slate-300">
            Conteúdos introdutórios para apoiar tomada de decisão sobre início de psicoterapia, entendimento de sintomas e
            continuidade de cuidado.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-white">{article.title}</h3>
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

      {/* FAQ Section */}
      <section id="faq" className="space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">FAQ</p>
          <h2 className="text-4xl font-bold text-white">Perguntas frequentes</h2>
          <p className="max-w-4xl text-slate-300">
            Respostas objetivas para dúvidas comuns sobre início do atendimento, formato das sessões e processo clínico.
          </p>
        </header>

        <div className="space-y-4">
          {faq.map((item) => (
            <article key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-white">{item.question}</h3>
              <p className="mt-3 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section id="enderecos" className="space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Endereços</p>
          <h2 className="text-4xl font-bold text-white">Atendimento presencial em Belém</h2>
          <p className="max-w-4xl text-slate-300">
            Escolha a unidade com melhor logística para sua rotina. O agendamento é realizado previamente pelos canais oficiais.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {locations.map((place) => (
            <article key={place.unit} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-white">{place.unit}</h3>
              <div className="mt-3 space-y-1 text-slate-300">
                {place.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-2xl font-bold text-white">Como confirmar local e horário</h3>
          <p className="mt-3 text-slate-300">
            Antes da primeira sessão, confirme unidade, horário e orientações de chegada para evitar atraso e melhorar a experiência.
          </p>
          <a
            href="#contato"
            className="mt-5 inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-600"
          >
            Confirmar agendamento
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Contato</p>
          <h2 className="text-4xl font-bold text-white">Agendamento e informações</h2>
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
          <h3 className="text-2xl font-bold text-white">Como funciona o primeiro contato</h3>
          <ul className="mt-4 space-y-2 text-slate-300">
            {steps.map((step) => (
              <li key={step} className="rounded-lg border border-slate-700 bg-slate-800/60 p-3">
                {step}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
