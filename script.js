const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const year = document.getElementById('year');
const siteHeader = document.querySelector('.site-header');

const savedTheme = localStorage.getItem('danilo-theme');
if (savedTheme === 'light') {
  body.classList.remove('dark');
} else {
  body.classList.add('dark');
}

const updateThemeMeta = () => {
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', body.classList.contains('dark') ? '#0d171b' : '#f4f7f8');
  }
};
updateThemeMeta();

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('danilo-theme', body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeMeta();
});

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('scrolled', window.scrollY > 16);
});

if (year) {
  year.textContent = new Date().getFullYear();
}
