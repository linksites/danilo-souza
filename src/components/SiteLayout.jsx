import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const menu = [
  { label: "Início", to: "/" },
  { label: "Perfil Profissional", to: "/perfil-profissional" },
  { label: "Especialidades", to: "/especialidades" },
  { label: "Abordagem", to: "/abordagem" },
  { label: "Artigos", to: "/artigos" },
  { label: "FAQ", to: "/faq" },
  { label: "Endereços", to: "/enderecos" },
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [useMobileMenu, setUseMobileMenu] = useState(false);
  const headerRowRef = useRef(null);
  const brandRef = useRef(null);
  const navMeasureRef = useRef(null);
  const location = useLocation();
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo-danilo-souza.jpg`;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateMenuMode = () => {
      const headerRow = headerRowRef.current;
      const brand = brandRef.current;
      const navMeasure = navMeasureRef.current;

      if (!headerRow || !brand || !navMeasure) {
        return;
      }

      if (window.innerWidth < 768) {
        setUseMobileMenu(true);
        return;
      }

      const rowStyles = window.getComputedStyle(headerRow);
      const gap = Number.parseFloat(rowStyles.columnGap || rowStyles.gap || "0");
      const availableWidth = headerRow.clientWidth;
      const requiredWidth = brand.offsetWidth + navMeasure.scrollWidth + gap;

      setUseMobileMenu(requiredWidth > availableWidth);
    };

    updateMenuMode();
    window.addEventListener("resize", updateMenuMode);

    let observer;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(updateMenuMode);
      if (headerRowRef.current) {
        observer.observe(headerRowRef.current);
      }
      if (brandRef.current) {
        observer.observe(brandRef.current);
      }
      if (navMeasureRef.current) {
        observer.observe(navMeasureRef.current);
      }
    }

    return () => {
      window.removeEventListener("resize", updateMenuMode);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!useMobileMenu) {
      setIsMenuOpen(false);
    }
  }, [useMobileMenu]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div
          ref={headerRowRef}
          className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4"
        >
          <NavLink ref={brandRef} to="/" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Logo Danilo Souza"
              className="h-12 w-12 rounded-xl object-cover ring-2 ring-brand-600/40"
            />
            <div>
              <p className="text-sm text-slate-300">Danilo Souza</p>
              <p className="text-base font-bold">Psicólogo Clínico</p>
            </div>
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Abrir menu de navegação"
            className={`group relative h-11 w-11 place-items-center rounded-xl border border-slate-700 bg-slate-900 ${
              useMobileMenu ? "grid" : "hidden"
            }`}
          >
            <span
              className={`absolute block h-0.5 w-5 rounded bg-slate-100 transition ${
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 rounded bg-slate-100 transition ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 rounded bg-slate-100 transition ${
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>

          <nav className={`gap-2 whitespace-nowrap ${useMobileMenu ? "hidden" : "flex"}`}>
            {menu.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div
          className={`${useMobileMenu ? "block" : "hidden"} ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          } fixed inset-0 z-30`}
          aria-hidden={!isMenuOpen}
        >
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
            className={`absolute inset-0 bg-black/50 transition ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          />
          <nav
            id="mobile-nav"
            className={`absolute right-4 top-[84px] w-[min(88vw,320px)] rounded-2xl border border-slate-700 bg-slate-900/95 p-3 shadow-2xl shadow-black/40 transition ${
              isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1">
              {menu.map((item) => (
                <NavLink key={item.to} to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-0 overflow-hidden opacity-0" aria-hidden="true">
          <nav ref={navMeasureRef} className="flex gap-2 whitespace-nowrap">
            {menu.map((item) => (
              <span key={item.to} className="rounded-full px-4 py-2 text-sm font-semibold">
                {item.label}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>

      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Danilo Souza | Psicólogo Clínico | CRP-10/11505</p>
          <p>Atendimento on-line para todo o Brasil e presencial em Belém.</p>
        </div>
      </footer>
    </div>
  );
}
