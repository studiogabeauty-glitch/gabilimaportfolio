$ cat /home/user/lehua12/styles.css

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #080808;
  --surface: #111111;
  --surface2: #1a1a1a;
  --text: #EDE9DF;
  --muted: rgba(237,233,223,0.42);
  --accent: #C9A44A;
  --accent-lite: rgba(201,164,74,0.1);
  --accent-glow: rgba(201,164,74,0.25);
  --red: #E05C45;
  --border: rgba(255,255,255,0.07);
  --border-accent: rgba(201,164,74,0.18);
  --radius: 16px;
  --radius-sm: 8px;
  --font: 'DM Sans', sans-serif;
  --font-display: 'Playfair Display', serif;
  --t: 0.38s;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
}

html { scroll-behavior: smooth; }
body { font-family: var(--font); background: var(--bg); color: var(--text); overflow-x: hidden; line-height: 1.6; cursor: none; }
@media (hover: none), (pointer: coarse) { body { cursor: auto; } .cursor-dot, .cursor-ring { display: none !important; } }
::selection { background: var(--accent); color: #000; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
.section { padding: 120px 0; }

/* ─── CUSTOM CURSOR ─── */
.cursor-dot {
  position: fixed; top: 0; left: 0; z-index: 9999;
  width: 8px; height: 8px;
  background: var(--accent); border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  will-change: left, top;
  transition: width 0.2s var(--ease), height 0.2s var(--ease), background 0.2s;
}
.cursor-ring {
  position: fixed; top: 0; left: 0; z-index: 9998;
  width: 38px; height: 38px;
  border: 1.5px solid rgba(201,164,74,0.4);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  will-change: left, top;
  transition: width 0.3s var(--ease), height 0.3s var(--ease), border-color 0.3s;
}
.cursor-hover .cursor-dot { width: 14px; height: 14px; background: var(--accent); }
.cursor-hover .cursor-ring { width: 64px; height: 64px; border-color: var(--accent); }
.cursor-click .cursor-dot { background: #fff; width: 6px; height: 6px; }

/* ─── NAV ─── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 500;
  padding: 24px 48px;
  display: flex; align-items: center; justify-content: space-between;
  transition: background var(--t) var(--ease), padding var(--t) var(--ease), border-color var(--t);
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(8,8,8,0.88);
  backdrop-filter: blur(24px) saturate(180%);
  padding: 16px 48px;
  border-bottom-color: var(--border);
}
.nav-logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -0.03em; color: var(--text); }
.dot { color: var(--accent); }
.nav-links { display: flex; list-style: none; gap: 40px; align-items: center; }
.nav-links a { font-size: 0.875rem; font-weight: 500; color: var(--muted); transition: color var(--t); }
.nav-links a:hover { color: var(--text); }
.nav-cta {
  background: var(--accent) !important; color: #000 !important;
  padding: 10px 26px; border-radius: 100px;
  font-weight: 700 !important;
  transition: opacity var(--t), transform var(--t) !important;
}
.nav-cta:hover { opacity: 0.85 !important; transform: translateY(-1px) !important; }
.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
.hamburger span { display: block; width: 24px; height: 2px; background: var(--text); border-radius: 2px; transition: var(--t); }
.mobile-menu {
  position: fixed; inset: 0; z-index: 499;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none; transition: opacity var(--t);
}
.mobile-menu.open { opacity: 1; pointer-events: all; }
.mobile-menu ul { list-style: none; text-align: center; }
.mobile-menu li { margin: 24px 0; }
.mobile-link {
  font-size: 3rem; font-weight: 900; color: var(--text);
  font-family: var(--font-display); font-style: italic;
  transition: color var(--t);
}
.mobile-link:hover { color: var(--accent); }

/* ─── HERO ─── */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; position: relative;
  padding: 160px 32px 100px; overflow: hidden;
  background: var(--bg);
}
.hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.parallax-layer { position: absolute; inset: 0; will-change: transform; transition: transform 0.1s linear; }
.geo { position: absolute; }
.geo-1 {
  width: 700px; height: 700px;
  border: 1px solid rgba(201,164,74,0.07);
  border-radius: 50%;
  top: -250px; left: -250px;
}
.geo-2 {
  width: 500px; height: 500px;
  border: 1px solid rgba(201,164,74,0.05);
  border-radius: 50%;
  bottom: -150px; right: -150px;
}
.geo-3 {
  width: 280px; height: 280px;
  background: radial-gradient(circle, rgba(201,164,74,0.09), transparent 70%);
  border-radius: 50%;
  top: 18%; right: 12%;
  filter: blur(50px);
}
.geo-4 {
  width: 360px; height: 360px;
  background: radial-gradient(circle, rgba(224,92,69,0.07), transparent 70%);
  border-radius: 50%;
  bottom: 20%; left: 8%;
  filter: blur(70px);
}
.geo-5 {
  width: 1px; height: 220px;
  background: linear-gradient(to bottom, transparent, rgba(201,164,74,0.3), transparent);
  top: 12%; right: 22%;
}
.geo-6 {
  width: 60px; height: 60px;
  border: 1px solid rgba(201,164,74,0.12);
  border-radius: 12px;
  transform: rotate(45deg);
  top: 30%; left: 8%;
  animation: geoFloat 8s ease-in-out infinite;
}
.geo-7 {
  width: 24px; height: 24px;
  background: rgba(201,164,74,0.15);
  border-radius: 50%;
  top: 60%; right: 8%;
  animation: geoFloat 6s ease-in-out infinite 2s;
}
@keyframes geoFloat { 0%, 100% { transform: rotate(45deg) translateY(0); } 50% { transform: rotate(45deg) translateY(-16px); } }

.hero-content { position: relative; z-index: 2; max-width: 940px; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 10px;
  background: rgba(201,164,74,0.08);
  border: 1px solid rgba(201,164,74,0.22);
  color: var(--accent);
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
  padding: 9px 22px; border-radius: 100px; margin-bottom: 44px;
}
.hero-badge::before {
  content: '';
  width: 6px; height: 6px; background: var(--accent); border-radius: 50%;
  animation: badgePulse 2.5s ease-in-out infinite;
}
@keyframes badgePulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(0.6); } }

.hero-title {
  font-size: clamp(3rem, 7.5vw, 6.5rem);
  font-weight: 900; line-height: 1.04; letter-spacing: -0.04em;
  margin-bottom: 28px; color: var(--text);
}
.gradient-text {
  font-style: italic; font-family: var(--font-display);
  color: var(--accent); -webkit-text-fill-color: var(--accent);
}
.hero-sub {
  font-size: 1.125rem; color: var(--muted);
  max-width: 560px; margin: 0 auto 56px; line-height: 1.82;
}
.hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 80px; }
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 36px; border-radius: 100px;
  font-size: 0.9375rem; font-weight: 600;
  transition: all var(--t) var(--ease);
  cursor: none; border: none; font-family: var(--font);
  position: relative; overflow: hidden;
}
.btn-primary { background: var(--accent); color: #000; }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 44px var(--accent-glow); }
.btn-ghost { background: transparent; color: var(--text); border: 1.5px solid rgba(255,255,255,0.14); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-3px); }
.btn-full { width: 100%; justify-content: center; }

.hero-stats {
  display: flex; align-items: center; justify-content: center;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 20px; padding: 32px 44px; gap: 0; flex-wrap: wrap;
}
.stat { display: flex; flex-direction: column; align-items: center; padding: 0 44px; }
.stat-num { font-size: 2.75rem; font-weight: 900; letter-spacing: -0.05em; color: var(--accent); line-height: 1; }
.stat-suffix { font-size: 1.75rem; font-weight: 900; color: var(--accent); }
.stat-label { font-size: 0.7rem; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 6px; }
.stat-divider { width: 1px; height: 52px; background: var(--border); }
.scroll-indicator {
  position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  color: var(--muted); font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase;
  animation: scrollBounce 2.5s ease-in-out infinite;
}
.scroll-line { width: 1px; height: 44px; background: linear-gradient(to bottom, var(--accent), transparent); }
@keyframes scrollBounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(10px); } }

/* ─── MARQUEE ─── */
.marquee-strip {
  background: var(--accent); padding: 18px 0;
  overflow: hidden; white-space: nowrap;
}
.marquee-track {
  display: inline-flex; align-items: center;
  animation: marqueeScroll 28s linear infinite;
  will-change: transform;
}
.marquee-track span {
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: #000; padding: 0 28px;
}
.marquee-dot { color: rgba(0,0,0,0.3) !important; font-size: 0.5rem !important; padding: 0 6px !important; letter-spacing: 0 !important; }
@keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ─── REVEAL ─── */
.reveal-up, .reveal-left, .reveal-right {
  opacity: 0; transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);
}
.reveal-up { transform: translateY(50px); }
.reveal-left { transform: translateX(-60px); }
.reveal-right { transform: translateX(60px); }
.reveal-up.visible, .reveal-left.visible, .reveal-right.visible { opacity: 1; transform: translate(0); }
[style*="--delay"] { transition-delay: var(--delay); }

/* ─── SECTION COMMON ─── */
.section-header { text-align: center; margin-bottom: 72px; }
.section-label {
  display: inline-block; font-size: 0.7rem; font-weight: 700;
  letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 14px;
}
.section-title {
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 900; letter-spacing: -0.03em; line-height: 1.1;
  margin-bottom: 18px; color: var(--text);
}
.section-title em { font-style: italic; font-family: var(--font-display); color: var(--accent); }
.section-sub { font-size: 1.0625rem; color: var(--muted); max-width: 520px; margin: 0 auto; }

/* ─── ABOUT ─── */
.about { background: var(--surface); }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.about-image-wrap { position: relative; }
.about-img-placeholder {
  width: 100%; aspect-ratio: 4/5;
  background: var(--surface2); border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden; position: relative;
  display: flex; align-items: center; justify-content: center;
}
.about-img-placeholder::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 55%, rgba(8,8,8,0.5));
  pointer-events: none; z-index: 1;
}
.img-overlay-text { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.15em; color: var(--muted); text-transform: uppercase; }
.about-tag {
  position: absolute;
  background: rgba(8,8,8,0.85); backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  padding: 10px 20px; border-radius: 100px;
  font-size: 0.8rem; font-weight: 600; white-space: nowrap; color: var(--text);
  z-index: 2;
}
.tag-1 { top: 24px; right: -16px; border-color: var(--border-accent); color: var(--accent); }
.tag-2 { bottom: 84px; left: -16px; }
.tag-3 { bottom: 28px; right: 20px; background: var(--accent); border-color: var(--accent); color: #000; }
.about-text .section-title { text-align: left; }
.about-text .section-label { display: block; }
.about-desc { color: var(--muted); margin-bottom: 16px; line-height: 1.88; font-size: 1.0625rem; }
.skills-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
.skill-pill {
  background: var(--accent-lite); border: 1px solid var(--border-accent);
  color: var(--accent); padding: 8px 20px; border-radius: 100px;
  font-size: 0.8125rem; font-weight: 600;
  transition: background var(--t), color var(--t), transform var(--t);
  cursor: none;
}
.skill-pill:hover { background: var(--accent); color: #000; transform: translateY(-2px); }

/* ─── SERVICES ─── */
.services { background: var(--bg); }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.service-card {
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 40px 32px; position: relative; overflow: hidden;
  transition: border-color var(--t), box-shadow var(--t), transform 0.15s var(--ease);
  transform-style: preserve-3d;
  will-change: transform;
}
.service-card::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(201,164,74,0.08), transparent 60%);
  opacity: 0; transition: opacity var(--t);
}
.service-card:hover { border-color: var(--border-accent); box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
.service-card:hover::before { opacity: 1; }
.service-icon { width: 44px; height: 44px; color: var(--accent); margin-bottom: 24px; }
.service-icon svg { width: 100%; height: 100%; }
.service-card h3 { font-size: 1.125rem; font-weight: 700; margin-bottom: 12px; letter-spacing: -0.02em; color: var(--text); }
.service-card p { font-size: 0.9rem; color: var(--muted); line-height: 1.8; margin-bottom: 24px; }
.service-tag {
  display: inline-block;
  background: var(--accent-lite); border: 1px solid var(--border-accent);
  color: var(--accent); font-size: 0.68rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 5px 14px; border-radius: 100px;
}

/* ─── PORTFOLIO ─── */
.portfolio { background: var(--surface); }
.filter-tabs { display: flex; gap: 8px; justify-content: center; margin-bottom: 52px; flex-wrap: wrap; }
.filter-btn {
  background: transparent; border: 1px solid var(--border);
  color: var(--muted); padding: 10px 28px; border-radius: 100px;
  font-size: 0.875rem; font-weight: 500; cursor: none;
  transition: all var(--t); font-family: var(--font);
}
.filter-btn:hover, .filter-btn.active { background: var(--accent); border-color: var(--accent); color: #000; font-weight: 700; }
.portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.portfolio-item {
  border-radius: var(--radius); overflow: hidden;
  transition: transform var(--t) var(--ease), box-shadow var(--t);
  border: 1px solid var(--border);
}
.portfolio-item:hover { transform: translateY(-8px); box-shadow: 0 28px 64px rgba(0,0,0,0.55); }
.portfolio-item.hidden { display: none; }
.portfolio-thumb { position: relative; aspect-ratio: 4/3; overflow: hidden; cursor: none; }
.social-thumb { aspect-ratio: 1/1; }
.video-thumb { aspect-ratio: 9/16; }
.video-embed { width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
.video-embed iframe { width: 100%; height: 100%; border: 0; display: block; }
.thumb-placeholder {
  width: 100%; height: 100%; background: var(--surface2);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
}
.thumb-placeholder span { font-size: 0.875rem; font-weight: 600; color: var(--muted); }
.thumb-placeholder small { font-size: 0.7rem; color: rgba(237,233,223,0.2); }
.portfolio-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.5) 50%, transparent 100%);
  display: flex; align-items: flex-end; padding: 24px;
  opacity: 0; transition: opacity var(--t);
}
.portfolio-item:hover .portfolio-overlay { opacity: 1; }
.overlay-cat { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); display: block; margin-bottom: 6px; }
.overlay-content h4 { font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.overlay-content p { font-size: 0.8125rem; color: var(--muted); }

/* ─── RESULTS ─── */
.results { background: var(--bg); }
.year-toggle { display: flex; gap: 8px; justify-content: center; margin-bottom: 52px; flex-wrap: wrap; }
.year-btn {
  background: transparent; border: 1px solid var(--border);
  color: var(--muted); padding: 10px 28px; border-radius: 100px;
  font-size: 0.875rem; font-weight: 600; cursor: none;
  transition: all var(--t); font-family: var(--font);
}
.year-btn:hover, .year-btn.active { background: var(--accent); border-color: var(--accent); color: #000; }
.results-months { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 36px; }
.month-card {
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 36px 28px; transition: border-color var(--t), transform 0.15s var(--ease);
  will-change: transform; transform-style: preserve-3d;
}
.month-card:hover { border-color: var(--border-accent); }
.month-label { font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 28px; color: var(--text); }
.month-bars { margin-bottom: 28px; }
.bar-group { display: flex; gap: 12px; align-items: flex-end; height: 160px; }
.bar-wrap { flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; gap: 8px; }
.bar {
  width: 100%; border-radius: 6px 6px 0 0; position: relative;
  display: flex; align-items: flex-start; justify-content: center; padding-top: 8px;
  transition: height 1.4s cubic-bezier(0.4,0,0.2,1); height: 0;
}
.bar-2025 { background: linear-gradient(to top, var(--red), rgba(224,92,69,0.35)); }
.bar-2026 { background: linear-gradient(to top, var(--accent), rgba(201,164,74,0.35)); }
.bar-value { font-size: 0.6rem; font-weight: 700; color: rgba(255,255,255,0.85); white-space: nowrap; }
.bar-year { font-size: 0.68rem; font-weight: 700; color: var(--muted); letter-spacing: 0.05em; }
.month-growth {
  display: flex; align-items: center; gap: 8px;
  padding: 14px 18px;
  background: rgba(201,164,74,0.06); border: 1px solid rgba(201,164,74,0.12);
  border-radius: var(--radius-sm);
}
.month-growth svg { width: 18px; height: 18px; color: var(--accent); flex-shrink: 0; }
.growth-pct { font-size: 1rem; font-weight: 800; color: var(--accent); letter-spacing: -0.02em; }
.growth-label { font-size: 0.75rem; color: var(--muted); }
.results-legend { display: flex; justify-content: center; gap: 32px; margin-bottom: 20px; }
.legend-item { display: flex; align-items: center; gap: 10px; font-size: 0.875rem; font-weight: 500; color: var(--muted); }
.legend-dot { width: 12px; height: 12px; border-radius: 3px; }
.dot-2025 { background: var(--red); }
.dot-2026 { background: var(--accent); }
.results-note { text-align: center; }
.results-note p { font-size: 0.8rem; color: rgba(237,233,223,0.22); font-style: italic; }

/* ─── CONTACT ─── */
.contact { background: var(--surface); }
.contact-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.contact-desc { color: var(--muted); line-height: 1.88; margin-bottom: 40px; font-size: 1.0625rem; }
.contact-links { display: flex; flex-direction: column; gap: 14px; }
.contact-link {
  display: flex; align-items: center; gap: 14px;
  color: var(--muted); font-size: 0.9375rem;
  padding: 18px 22px;
  border: 1px solid var(--border); border-radius: var(--radius-sm);
  background: var(--surface2);
  transition: color var(--t), border-color var(--t), transform var(--t);
}
.contact-link svg { width: 20px; height: 20px; color: var(--accent); flex-shrink: 0; }
.contact-link:hover { color: var(--text); border-color: var(--border-accent); transform: translateX(4px); }
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-size: 0.8125rem; font-weight: 600; color: var(--muted); letter-spacing: 0.04em; }
.form-group input, .form-group select, .form-group textarea {
  background: var(--surface2); border: 1px solid var(--border);
  border-radius: var(--radius-sm); color: var(--text);
  font-family: var(--font); font-size: 0.9375rem;
  padding: 14px 20px; transition: border-color var(--t);
  outline: none; width: 100%;
}
.form-group select { appearance: none; cursor: none; }
.form-group input::placeholder, .form-group textarea::placeholder { color: rgba(237,233,223,0.2); }
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--accent); }
.form-group textarea { resize: vertical; min-height: 120px; }

/* ─── FOOTER ─── */
.footer { background: var(--bg); border-top: 1px solid var(--border); padding: 44px 0; }
.footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.footer-logo { font-size: 1.25rem; font-weight: 800; color: var(--text); }
.footer-copy { font-size: 0.8rem; color: var(--muted); }
.footer-socials { display: flex; gap: 12px; }
.footer-socials a {
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border); border-radius: 10px; color: var(--muted);
  transition: all var(--t);
}
.footer-socials a svg { width: 16px; height: 16px; }
.footer-socials a:hover { border-color: var(--accent); color: var(--accent); }

/* ─── RESPONSIVE ─── */
@media (max-width: 1024px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .about-grid { grid-template-columns: 1fr; gap: 56px; }
  .about-image-wrap { max-width: 480px; margin: 0 auto; }
}
@media (max-width: 768px) {
  .nav { padding: 16px 24px; }
  .nav.scrolled { padding: 14px 24px; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .section { padding: 80px 0; }
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
  .services-grid { grid-template-columns: 1fr; }
  .results-months { grid-template-columns: 1fr; }
  .contact-wrap { grid-template-columns: 1fr; gap: 56px; }
  .stat { padding: 0 24px; }
  .hero-stats { padding: 24px 20px; }
  .footer-inner { flex-direction: column; text-align: center; }
  .tag-1, .tag-2, .tag-3 { display: none; }
  body { cursor: auto; }
  .cursor-dot, .cursor-ring { display: none; }
  a, button { cursor: pointer; }
}
@media (max-width: 520px) {
  .portfolio-grid { grid-template-columns: 1fr; }
  .hero-stats { flex-direction: column; gap: 20px; }
  .stat-divider { display: none; }
  .year-toggle, .filter-tabs { flex-wrap: wrap; }
  .hero-title { font-size: 2.8rem; }
  .container { padding: 0 20px; }
}
