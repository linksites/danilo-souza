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
  const profileFullSrc = `${import.meta.env.BASE_URL}assets/danilo-souza-full.jpg`;
  const profileFaceSrc = `${import.meta.env.BASE_URL}assets/danilo-souza-face.jpg`;

  return (
    <div className="space-y-24">

      {/* ── Hero ── */}
      <section id="inicio" className="rounded-2xl border border-white/8 glass-dark px-8 py-14 md:px-14 md:py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Site institucional
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
          <span className="gradient-text">Danilo Souza</span>,{" "}
          psicólogo clínico com atendimento on-line para todo o Brasil.
        </h1>

        <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
          Atendimento com método, acolhimento e responsabilidade técnica para promover
          estabilidade emocional, autonomia e desenvolvimento pessoal.
        </p>

        <ul className="grid gap-3 md:grid-cols-3 mb-10">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/4 p-4 text-sm text-slate-300">
              <svg className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contato"
            className="btn-primary inline-block rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-500"
          >
            Agendar atendimento
          </a>
          <a
            href="#perfil"
            className="inline-block rounded-xl border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-300 hover:bg-white/8 hover:text-white transition-colors duration-200"
          >
            Conhecer perfil profissional
          </a>
        </div>
      </section>

      {/* ── Perfil ── */}
      <section id="perfil" className="space-y-10">
        <header className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Perfil Profissional
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Danilo Souza</h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            Psicólogo clínico com atuação voltada para acolhimento técnico, avaliação responsável
            da demanda e construção de progresso terapêutico sustentável.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">

          {/* Fotos — layout editorial sobreposto */}
          <div className="relative self-start">
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <img
                src={profileFullSrc}
                alt="Danilo Souza"
                className="w-full object-cover object-top"
                style={{ height: "480px" }}
              />
            </div>
            <div
              className="absolute bottom-5 right-5 w-28 h-36 rounded-xl overflow-hidden shadow-2xl"
              style={{ boxShadow: "0 0 0 3px #091524, 0 8px 32px rgba(0,0,0,0.5)" }}
            >
              <img
                src={profileFaceSrc}
                alt="Danilo Souza"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="rounded-2xl border border-white/8 glass-dark p-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Formação complementar</h3>
              <ul className="space-y-3">
                {education.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/4 p-4 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Diretrizes de atendimento</h4>
              <ul className="space-y-3">
                {principles.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/4 p-4 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/8 bg-white/4 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Registro profissional</p>
                <p className="text-base font-semibold text-white">CRP-10/11505</p>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/4 p-4">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Modalidade</p>
                <p className="text-base font-semibold text-white">On-line e presencial</p>
              </div>
            </div>

            <a
              href="#contato"
              className="btn-primary inline-block rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-500"
            >
              Solicitar agendamento
            </a>
          </div>
        </div>
      </section>

      {/* ── Especialidades ── */}
      <section id="especialidades" className="space-y-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Especialidades</p>
          <h2 className="text-3xl font-bold text-white">Áreas de atuação clínica</h2>
          <p className="max-w-2xl text-slate-400">
            Cada frente de atendimento possui objetivos terapêuticos claros e estratégias específicas
            para a demanda apresentada em sessão.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {specialties.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/8 bg-white/3 p-6">
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{item.text}</p>
              <ul className="space-y-2">
                {item.focus.map((line) => (
                  <li key={line} className="text-xs text-slate-400 rounded-lg border border-white/6 bg-white/3 px-3 py-2">
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Precisa de orientação para escolher a melhor linha?</h3>
          <p className="text-sm text-slate-400 mb-4 max-w-2xl">
            A definição da estratégia terapêutica é feita após avaliação inicial da demanda, contexto de vida e objetivos.
          </p>
          <a href="#contato" className="btn-primary inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500">
            Entrar em contato
          </a>
        </div>
      </section>

      {/* ── Abordagem ── */}
      <section id="abordagem" className="space-y-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Abordagem</p>
          <h2 className="text-3xl font-bold text-white">Como o atendimento é conduzido</h2>
          <p className="max-w-2xl text-slate-400">
            O processo terapêutico segue etapas claras para garantir direção clínica, segurança e continuidade no cuidado.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {stages.map((stage) => (
            <article key={stage.title} className="rounded-2xl border border-white/8 bg-white/3 p-6">
              <h3 className="text-base font-semibold text-white mb-2">{stage.title}</h3>
              <p className="text-sm text-slate-400">{stage.text}</p>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Objetivo principal da psicoterapia</h3>
          <p className="text-sm text-slate-400 mb-4 max-w-2xl">
            Reduzir sofrimento emocional, ampliar clareza de decisão e fortalecer recursos internos para lidar melhor
            com desafios pessoais, familiares e profissionais.
          </p>
          <a href="#contato" className="btn-primary inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500">
            Iniciar acompanhamento
          </a>
        </div>
      </section>

      {/* ── Artigos ── */}
      <section id="artigos" className="space-y-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Artigos</p>
          <h2 className="text-3xl font-bold text-white">Conteúdo de orientação para pacientes e familiares</h2>
          <p className="max-w-2xl text-slate-400">
            Conteúdos introdutórios para apoiar tomada de decisão sobre início de psicoterapia,
            entendimento de sintomas e continuidade de cuidado.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="rounded-2xl border border-white/8 bg-white/3 p-6">
              <h3 className="text-base font-semibold text-white mb-2">{article.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{article.summary}</p>
              <ul className="space-y-2">
                {article.points.map((point) => (
                  <li key={point} className="text-xs text-slate-400 rounded-lg border border-white/6 bg-white/3 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="space-y-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">FAQ</p>
          <h2 className="text-3xl font-bold text-white">Perguntas frequentes</h2>
          <p className="max-w-2xl text-slate-400">
            Respostas objetivas para dúvidas comuns sobre início do atendimento, formato das sessões e processo clínico.
          </p>
        </header>

        <div className="space-y-3">
          {faq.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/8 bg-white/3 p-6">
              <h3 className="text-base font-semibold text-white mb-2">{item.question}</h3>
              <p className="text-sm text-slate-400">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Endereços ── */}
      <section id="enderecos" className="space-y-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Endereços</p>
          <h2 className="text-3xl font-bold text-white">Atendimento presencial em Belém</h2>
          <p className="max-w-2xl text-slate-400">
            Escolha a unidade com melhor logística para sua rotina. O agendamento é realizado
            previamente pelos canais oficiais.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {locations.map((place) => (
            <article key={place.unit} className="rounded-2xl border border-white/8 bg-white/3 p-6">
              <h3 className="text-base font-semibold text-white mb-3">{place.unit}</h3>
              <div className="space-y-1">
                {place.address.map((line) => (
                  <p key={line} className="text-sm text-slate-400">{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Como confirmar local e horário</h3>
          <p className="text-sm text-slate-400 mb-4">
            Antes da primeira sessão, confirme unidade, horário e orientações de chegada para evitar
            atraso e melhorar a experiência.
          </p>
          <a href="#contato" className="btn-primary inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500">
            Confirmar agendamento
          </a>
        </div>
      </section>

      {/* ── Contato ── */}
      <section id="contato" className="space-y-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Contato</p>
          <h2 className="text-3xl font-bold text-white">Agendamento e informações</h2>
          <p className="max-w-2xl text-slate-400">
            Para iniciar acompanhamento psicológico, utilize os canais oficiais abaixo.
          </p>
        </header>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/4 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">WhatsApp</p>
            <p className="text-2xl font-bold text-white mb-5">(91) 98486-4748</p>
            <a
              href="https://wa.me/5591984864748?text=Olá%2C%20gostaria%20de%20agendar%20um%20atendimento."
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-xl bg-[#1a6b3a] border border-[#2d8f52]/40 px-5 py-3 text-sm font-semibold text-white hover:bg-[#1f7f44] transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </article>

          <article className="space-y-3 rounded-2xl border border-white/8 bg-white/3 p-6">
            <a
              href="mailto:Danilosouzapsi@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-slate-300 hover:text-white hover:border-white/16 transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Danilosouzapsi@gmail.com
            </a>

            <a
              href="https://instagram.com/danilo_souzac_x"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-3 hover:border-white/16 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span>
                <strong className="block text-sm font-semibold text-white">Instagram oficial</strong>
                <span className="text-xs text-slate-500">@danilo_souzac_x</span>
              </span>
            </a>

            <p className="text-xs text-slate-600 pt-1">Atendimento on-line para todo o Brasil e presencial em Belém.</p>
          </article>
        </div>

        <article className="rounded-2xl border border-white/8 bg-white/3 p-6">
          <h3 className="text-base font-semibold text-white mb-4">Como funciona o primeiro contato</h3>
          <ul className="space-y-2">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-slate-400 rounded-lg border border-white/6 bg-white/3 px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-brand-800 text-brand-300 text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {step}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
