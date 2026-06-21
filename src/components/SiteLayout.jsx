import { useEffect, useRef, useState } from "react";

const menu = [
  { label: "Início", to: "#inicio" },
  { label: "Perfil", to: "#perfil" },
  { label: "Especialidades", to: "#especialidades" },
  { label: "Abordagem", to: "#abordagem" },
  { label: "Artigos", to: "#artigos" },
  { label: "FAQ", to: "#faq" },
  { label: "Endereços", to: "#enderecos" },
  { label: "Contato", to: "#contato" }
];

function navClass(isActive) {
  return `relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
    isActive
      ? "text-white"
      : "text-slate-400 hover:text-white"
  }`;
}

function navIndicator(isActive) {
  return isActive ? (
    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-400 via-accent-400 to-success-400 rounded-full" />
  ) : null;
}

export default function SiteLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [useMobileMenu, setUseMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRowRef = useRef(null);
  const brandRef = useRef(null);
  const navMeasureRef = useRef(null);
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo-danilo-souza.jpg`;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.05 }
    );
    for (const section of document.querySelectorAll("section")) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "perfil", "especialidades", "abordagem", "artigos", "faq", "enderecos", "contato"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, to) => {
    e.preventDefault();
    const element = document.getElementById(to.replace("#", ""));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(to.replace("#", ""));
      setIsMenuOpen(false);
    }
  };

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
    <div className="min-h-screen animated-gradient text-slate-100">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5">
        <div
          className="h-full bg-brand-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 glass-dark">
        <div
          ref={headerRowRef}
          className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4"
        >
          <a ref={brandRef} href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logoSrc}
                alt="Logo Danilo Souza"
                className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-slate-400 group-hover:text-brand-300 transition-colors duration-300">Danilo Souza</p>
              <p className="text-base font-bold text-white group-hover:text-brand-200 transition-colors duration-300">Psicólogo Clínico</p>
            </div>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Abrir menu de navegação"
            className={`group relative h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-brand-500/50 transition-all duration-300 ${
              useMobileMenu ? "grid" : "hidden"
            }`}
          >
            <span
              className={`absolute block h-0.5 w-5 rounded bg-white transition-all duration-300 ${
                isMenuOpen ? "translate-y-0 rotate-45 bg-brand-400" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 rounded bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 rounded bg-white transition-all duration-300 ${
                isMenuOpen ? "translate-y-0 -rotate-45 bg-brand-400" : "translate-y-1.5"
              }`}
            />
          </button>

          <nav className={`gap-1 whitespace-nowrap ${useMobileMenu ? "hidden" : "flex"}`}>
            {menu.map((item) => (
              <a
                key={item.to}
                href={item.to}
                onClick={(e) => handleNavClick(e, item.to)}
                className={navClass(activeSection === item.to.replace("#", ""))}
              >
                {item.label}
                {navIndicator(activeSection === item.to.replace("#", ""))}
              </a>
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
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          />
          <nav
            id="mobile-nav"
            className={`absolute right-4 top-[84px] w-[min(88vw,320px)] rounded-2xl border border-white/10 glass-dark p-4 shadow-2xl transition-all duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1">
              {menu.map((item) => (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={(e) => handleNavClick(e, item.to)}
                  className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-xl ${
                    activeSection === item.to.replace("#", "")
                      ? "text-white bg-brand-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-0 overflow-hidden opacity-0" aria-hidden="true">
          <nav ref={navMeasureRef} className="flex gap-1 whitespace-nowrap">
            {menu.map((item) => (
              <span key={item.to} className="px-4 py-2 text-sm font-semibold">
                {item.label}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-16">{children}</main>

      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-white">Danilo Souza</p>
            <p className="text-sm text-slate-400">Psicólogo Clínico | CRP-10/11505</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-400">
            <p>Atendimento on-line para todo o Brasil</p>
            <p>Atendimento presencial em Belém</p>
          </div>
          <div className="flex gap-4 text-sm text-slate-500">
            <span className="hover:text-brand-400 transition-colors duration-300 cursor-pointer">LinkedIn</span>
            <span className="hover:text-brand-400 transition-colors duration-300 cursor-pointer">Instagram</span>
            <span className="hover:text-brand-400 transition-colors duration-300 cursor-pointer">WhatsApp</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
