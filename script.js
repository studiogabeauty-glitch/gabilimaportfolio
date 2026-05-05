document.documentElement.classList.add('js-ready');

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
let menuOpen = false;

function openMenu() { menuOpen = true; mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu() { menuOpen = false; mobileMenu.classList.remove('open'); document.body.style.overflow = ''; }

hamburger.addEventListener('click', () => menuOpen ? closeMenu() : openMenu());
if (mobileClose) mobileClose.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));

const phrases = ['histórias.', 'resultados reais.', 'conteúdo poderoso.', 'marcas memoráveis.'];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.querySelector('.typed-text');
function type() {
  if (!typedEl) return;
  const current = phrases[phraseIndex];
  typedEl.textContent = isDeleting ? current.substring(0, charIndex - 1) : current.substring(0, charIndex + 1);
  isDeleting ? charIndex-- : charIndex++;
  let delay = isDeleting ? 55 : 95;
  if (!isDeleting && charIndex === current.length) { delay = 2000; isDeleting = true; }
  else if (isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 400; }
  setTimeout(type, delay);
}
setTimeout(type, 900);

const hero = document.getElementById('hero');
const parallaxLayers = document.querySelectorAll('.parallax-layer');
if (hero && parallaxLayers.length && window.matchMedia('(hover: hover)').matches) {
  hero.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = hero.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / width;
    const y = (e.clientY - top - height / 2) / height;
    parallaxLayers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth) || 0.2;
      layer.style.transform = `translate(${x * depth * 60}px, ${y * depth * 40}px)`;
    });
  });
  hero.addEventListener('mouseleave', () => { parallaxLayers.forEach(layer => { layer.style.transition = 'transform 1s cubic-bezier(0.4,0,0.2,1)'; layer.style.transform = 'translate(0px, 0px)'; }); });
  hero.addEventListener('mouseenter', () => { parallaxLayers.forEach(layer => { layer.style.transition = 'transform 0.1s linear'; }); });
}

if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.svc-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transition = 'transform 0.1s linear, border-color 0.36s, box-shadow 0.36s';
      card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.36s, box-shadow 0.36s';
      card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
    });
  });
}

const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const step = target / (1800 / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-big, .float-num').forEach(el => counterObserver.observe(el));

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) { item.classList.remove('hidden'); }
      else { item.classList.add('hidden'); }
    });
  });
});

function animateBars() {
  document.querySelectorAll('.rc-bar').forEach(bar => { bar.style.height = (parseInt(bar.dataset.h, 10) || 0) + '%'; });
}
let barsAnimated = false;
const resultsSection = document.getElementById('results');
const barsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting && !barsAnimated) { barsAnimated = true; setTimeout(animateBars, 300); } });
}, { threshold: 0.3 });
if (resultsSection) barsObserver.observe(resultsSection);

document.querySelectorAll('.year-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const year = btn.dataset.year;
    document.querySelectorAll('.rc-bar-col').forEach(col => {
      col.style.display = (year === 'comparison' || col.dataset.yearCol === year) ? 'flex' : 'none';
    });
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    btn.textContent = 'Mensagem Enviada!';
    btn.style.background = 'linear-gradient(135deg, #4ade80, #22d3ee)';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Enviar Mensagem'; btn.style.background = ''; btn.disabled = false; contactForm.reset(); }, 3000);
  });
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => { if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id'); });
  navLinks.forEach(link => { link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--text)' : ''; });
});
