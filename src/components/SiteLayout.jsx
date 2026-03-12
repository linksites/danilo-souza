import { NavLink } from "react-router-dom";

const menu = [
  { label: "Inicio", to: "/" },
  { label: "Perfil Profissional", to: "/perfil-profissional" },
  { label: "Especialidades", to: "/especialidades" },
  { label: "Abordagem", to: "/abordagem" },
  { label: "Artigos", to: "/artigos" },
  { label: "FAQ", to: "/faq" },
  { label: "Enderecos", to: "/enderecos" },
  { label: "Contato", to: "/contato" }
];

function navClass({ isActive }) {
  return `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? "bg-brand-500 text-white"
      : "text-slate-300 hover:bg-slate-800 hover:text-white"
  }`;
}

export default function SiteLayout({ children }) {
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo-danilo-souza.jpg`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Logo Danilo Souza"
              className="h-12 w-12 rounded-xl object-cover ring-2 ring-brand-600/40"
            />
            <div>
              <p className="text-sm text-slate-300">Danilo Souza</p>
              <p className="text-base font-bold">Psicologo Clinico</p>
            </div>
          </NavLink>
          <nav className="flex flex-wrap gap-2">
            {menu.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>

      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Danilo Souza | Psicologo Clinico | CRP-10/11505</p>
          <p>Atendimento online e presencial em Belem do Para.</p>
        </div>
      </footer>
    </div>
  );
}
