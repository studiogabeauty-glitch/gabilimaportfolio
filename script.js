$ cat /home/user/lehua12/script.js

document.documentElement.classList.add('js-ready');

/* =============================================
   CUSTOM CURSOR
   ============================================= */
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (cursorDot && cursorRing && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let ringX = mouseX, ringY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.13;
    ringY += (mouseY - ringY) * 0.13;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  })();

  document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
  document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));

  const hoverTargets = 'a, button, .portfolio-item, .service-card, .skill-pill, .filter-btn, .year-btn, .month-card, .contact-link';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* =============================================
   NAV SCROLL EFFECT
   ============================================= */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* =============================================
   HAMBURGER MENU
   ============================================= */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* =============================================
   TYPED TEXT ANIMATION
   ============================================= */
const phrases = ['memorable brands.', 'real results.', 'powerful content.', 'visual stories.'];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.querySelector('.typed-text');

function type() {
  if (!typedEl) return;
  const current = phrases[phraseIndex];
  typedEl.textContent = isDeleting
    ? current.substring(0, charIndex - 1)
    : current.substring(0, charIndex + 1);
  isDeleting ? charIndex-- : charIndex++;

  let delay = isDeleting ? 60 : 100;
  if (!isDeleting && charIndex === current.length) { delay = 1800; isDeleting = true; }
  else if (isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 400; }
  setTimeout(type, delay);
}
setTimeout(type, 800);

/* =============================================
   HERO MOUSE PARALLAX
   ============================================= */
const hero = document.getElementById('hero');
const parallaxLayers = document.querySelectorAll('.parallax-layer');

if (hero && parallaxLayers.length && window.matchMedia('(hover: hover)').matches) {
  let isMoving = false;

  hero.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = hero.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / width;
    const y = (e.clientY - top - height / 2) / height;

    parallaxLayers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth) || 0.2;
      const moveX = x * depth * 70;
      const moveY = y * depth * 50;
      layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    isMoving = true;
  });

  hero.addEventListener('mouseleave', () => {
    parallaxLayers.forEach(layer => {
      layer.style.transition = 'transform 1s cubic-bezier(0.4,0,0.2,1)';
      layer.style.transform = 'translate(0px, 0px)';
    });
    isMoving = false;
  });

  hero.addEventListener('mouseenter', () => {
    parallaxLayers.forEach(layer => {
      layer.style.transition = 'transform 0.08s linear';
    });
  });
}

/* =============================================
   3D CARD TILT
   ============================================= */
function initTilt(selector, intensity) {
  intensity = intensity || 10;
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transition = 'transform 0.1s linear, border-color 0.38s, box-shadow 0.38s';
      card.style.transform = `perspective(1000px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(8px)`;
      card.style.setProperty('--mx', `${(e.clientX - rect.left) / rect.width * 100}%`);
      card.style.setProperty('--my', `${(e.clientY - rect.top) / rect.height * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.38s, box-shadow 0.38s';
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    });
  });
}

if (window.matchMedia('(hover: hover)').matches) {
  initTilt('.service-card', 8);
  initTilt('.month-card', 5);
}

/* =============================================
   INTERSECTION OBSERVER — REVEAL
   ============================================= */
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

/* =============================================
   COUNTER ANIMATION (HERO STATS)
   ============================================= */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

/* =============================================
   PORTFOLIO FILTER
   ============================================= */
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hidden');
        item.style.animation = 'none';
        item.offsetHeight;
        item.style.animation = '';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* =============================================
   BAR CHART ANIMATION (RESULTS)
   ============================================= */
function animateBars() {
  document.querySelectorAll('.bar').forEach(bar => {
    bar.style.height = bar.dataset.value + '%';
  });
}

let barsAnimated = false;
const resultsSection = document.getElementById('results');
const barsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !barsAnimated) {
      barsAnimated = true;
      setTimeout(animateBars, 300);
    }
  });
}, { threshold: 0.3 });
if (resultsSection) barsObserver.observe(resultsSection);

/* =============================================
   YEAR TOGGLE (RESULTS)
   ============================================= */
document.querySelectorAll('.year-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const year = btn.dataset.year;
    document.querySelectorAll('.bar-wrap').forEach(wrap => {
      const bar = wrap.querySelector('.bar');
      if (!bar) return;
      if (year === 'comparison') wrap.style.display = 'flex';
      else if (year === '2025') wrap.style.display = bar.classList.contains('bar-2025') ? 'flex' : 'none';
      else if (year === '2026') wrap.style.display = bar.classList.contains('bar-2026') ? 'flex' : 'none';
    });
  });
});

/* =============================================
   CONTACT FORM (BASIC UI FEEDBACK)
   ============================================= */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #4ade80, #22d3ee)';
    btn.style.color = '#000';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}

/* =============================================
   SMOOTH ACTIVE NAV HIGHLIGHT ON SCROLL
   ============================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
});
