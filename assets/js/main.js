const POSTHOG_KEY    = ""; // injecté par GitHub Actions
const POSTHOG_HOST   = ""; // injecté par GitHub Actions

function initPostHog() {
  if (!POSTHOG_KEY) return;
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]);t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+" (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId setPersonProperties".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||(window.posthog=[]));
  posthog.init(POSTHOG_KEY, {
    api_host:        POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
    persistence:     "localStorage",
  });
}

/* ============================================================
  SVG ICONS (Lucide MIT)
============================================================ */
const ICONS = {
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  code2: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  graduationCap: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  shield:          `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  globe:           `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  smartphone:      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>`,
  cloud:           `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  database:        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  layers:          `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  gamepad2:        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="17" x2="17.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>`,
  layoutDashboard: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  gitlab: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22.5 20.2 16.3c.4-.3.6-.8.4-1.3L19 9.2c-.1-.3-.4-.5-.7-.5s-.6.2-.7.5l-1.5 4.4H7.9L6.4 9.2c-.1-.3-.4-.5-.7-.5s-.6.2-.7.5L3.4 15c-.2.5 0 1 .4 1.3L12 22.5z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
};

/* ============================================================
  THEME CONTROLLER
============================================================ */
const theme = {
  current: "light",
  init() {
    this.current = localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    this._apply();
  },
  toggle() {
    this.current = this.current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", this.current);
    this._apply();
  },
  _apply() {
    document.documentElement.classList.toggle("dark", this.current === "dark");
  },
};

/* ============================================================
  NAVBAR
============================================================ */
const NAV_LINKS = [
  { href: "index.html",          key: "nav.home"           },
  { href: "projects.html",       key: "nav.projects"       },
  { href: "certifications.html", key: "nav.certifications" },
  { href: "cv.html",             key: "nav.cv"             },
  { href: "contact.html",        key: "nav.contact"        },
];

function initNavbar() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const navLinks = NAV_LINKS.map(n =>
    `<a href="${n.href}" data-i18n="${n.key}">${i18n.t(n.key)}</a>`
  ).join("");

  const mobileLinks = NAV_LINKS.map(n =>
    `<a href="${n.href}" data-i18n="${n.key}">${i18n.t(n.key)}</a>`
  ).join("");

  header.innerHTML = `
    <div class="navbar">
      <div class="container navbar-inner">
        <a href="index.html" class="navbar-logo">
          vincent<span class="logo-muted">.murienne</span>
        </a>
        <nav class="navbar-nav" aria-label="Navigation principale">
          ${navLinks}
        </nav>
        <div class="navbar-actions">
          <div class="lang-switcher" aria-label="Langue">
            <button data-lang-btn="fr" onclick="i18n.setLang('fr')" aria-label="Français">fr</button>
            <button data-lang-btn="en" onclick="i18n.setLang('en')" aria-label="English">en</button>
          </div>
          <button class="theme-toggle" onclick="theme.toggle()" aria-label="Basculer le thème">
            <span class="icon-sun">${ICONS.sun}</span>
            <span class="icon-moon">${ICONS.moon}</span>
          </button>
          <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Menu" aria-expanded="false">
            <span id="mobile-menu-icon">${ICONS.menu}</span>
          </button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu" role="navigation">
        ${mobileLinks}
      </div>
    </div>
  `;

  setNavActive();
  i18n._updateLangBtns();

  document.getElementById("mobile-menu-btn").addEventListener("click", () => {
    const menu = document.getElementById("mobile-menu");
    const btn  = document.getElementById("mobile-menu-btn");
    const icon = document.getElementById("mobile-menu-icon");
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    icon.innerHTML = open ? ICONS.close : ICONS.menu;
  });
}

function initFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  const socialIcons = {
    github: ICONS.github, linkedin: ICONS.linkedin,
    gitlab: ICONS.gitlab, mail: ICONS.mail,
  };

  const socials = [
    { href: "https://github.com/Vincent-Murienne",      icon: "github",   label: "GitHub"   },
    { href: "https://gitlab.com/muriennevincent",      icon: "gitlab",   label: "GitLab"   },
    { href: "https://www.linkedin.com/in/vincent-murienne-97a478210/", icon: "linkedin", label: "LinkedIn" },
    { href: "mailto:muriennevincent@gmail.com",        icon: "mail",     label: "Email"    },
  ].map(s => `
    <a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">
      ${socialIcons[s.icon]}
    </a>
  `).join("");

  footer.innerHTML = `
    <div class="site-footer">
      <div class="container footer-inner">
        <div class="footer-copy">
          <span class="footer-year">© ${new Date().getFullYear()} Vincent Murienne</span>
          <span class="footer-rights" data-i18n="footer.rights">${i18n.t("footer.rights")}</span>
        </div>
        <div class="footer-socials">${socials}</div>
      </div>
    </div>
  `;
}

function setNavActive() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nav a, .mobile-menu a").forEach(a => {
    const href = a.getAttribute("href").split("/").pop();
    const isHome = (path === "" || path === "index.html") && (href === "index.html");
    a.classList.toggle("active", href === path || isHome);
  });
}

/* ============================================================
  FADE-IN (Intersection Observer)
============================================================ */
function initFadeIn() {
  const els = document.querySelectorAll(".fade-in:not(.visible)");
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || "0", 10);
        setTimeout(() => el.classList.add("visible"), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  els.forEach(el => observer.observe(el));
}

/* ============================================================
  LANGUAGE BAR ANIMATION
============================================================ */
function initLangBars() {
  const bars = document.querySelectorAll(".lang-bar-fill");
  if (!bars.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("animated"), 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(b => observer.observe(b));
}

const CAT_COLORS = { personal: "#a78bfa", school: "#38bdf8", professional: "#34d399" };

function projectInitials(title) {
  const words = title.split(/[\s\-_:\/]+/).filter(w => /[a-zA-ZÀ-ÿ0-9]/.test(w));
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words.slice(0, 2).map(w => w[0].toUpperCase()).join("");
}

function browserBarUrl(p) {
  const raw = p.live || (p.repo && p.repo !== "#" ? p.repo : null);
  if (!raw) return "preview";
  const parts = raw.replace(/^https?:\/\//, "").split("/");
  return parts.length >= 2 ? `${parts[0]}/${parts[parts.length - 1]}` : parts[0];
}

function projectCover(p, lang) {
  if (p.img) {
    const ctaHref = p.live || (p.repo && p.repo !== "#" ? p.repo : null);
    const overlay = ctaHref
      ? `<a href="${ctaHref}" target="_blank" rel="noopener" class="screen-overlay"><span>${i18n.t("projects.view")}</span></a>`
      : "";
    return `
      <div class="browser-mockup">
        <div class="browser-bar">
          <div class="browser-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="browser-url">${browserBarUrl(p)}</div>
        </div>
        <div class="browser-screen">
          <img src="${p.img}" alt="${p.title[lang]}" />
          ${overlay}
        </div>
      </div>`;
  }
  if (p.icon && ICONS[p.icon]) {
    const color = CAT_COLORS[p.cat] || "var(--muted-foreground)";
    return `<div class="project-card-img project-card-cover"><span class="project-cover-icon" style="color:${color}">${ICONS[p.icon]}</span></div>`;
  }
  return `<div class="project-card-img project-card-cover"><span class="project-cover-initials">${projectInitials(p.title[lang])}</span></div>`;
}

function renderProjectCard(p, delay = 0) {
  const lang = i18n.lang;
  const tags = p.tags.map(t => `<span class="badge badge-outline">${t}</span>`).join("");
  const meta = [p.role ? p.role[lang] : null, p.year].filter(Boolean);
  const repoLink = p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener" class="project-link">${ICONS.code2} ${i18n.t("projects.code")}</a>` : "";
  const liveLink = p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="project-link">${ICONS.externalLink} ${i18n.t("projects.live")}</a>` : "";
  const links = (p.repo || p.live) ? `<div class="project-links">${repoLink}${liveLink}</div>` : "";
  const cover = projectCover(p, lang);

  return `
    <div class="fade-in dir-up" data-delay="${delay}">
      <div class="card hover-lift overflow-hidden" id="${p.id}" style="display:flex;flex-direction:column;height:100%">
        <div style="position:relative">
          ${cover}
          ${p.status ? `<span class="status-badge status-badge--${p.status}">${i18n.t(`status.${p.status}`)}</span>` : ""}
        </div>
        <div class="card-body" style="display:flex;flex-direction:column;flex:1">
          <div class="project-meta">
            ${meta.map((m, i) => `${i > 0 ? '<span>·</span>' : ''}${m}`).join(" ")}
          </div>
          <h3 class="mt-2">${p.title[lang]}</h3>
          <p class="mt-2 text-sm text-muted" style="flex:1">${p.desc[lang]}</p>
          <div class="flex flex-wrap gap-1 mt-4">${tags}</div>
          ${links}
        </div>
      </div>
    </div>`;
}

function renderCertCard(c, delay = 0) {
  const lang = i18n.lang;
  const dateStr = fmtDate(c.date, lang);
  const scoreHtml = c.score
    ? `<span class="font-mono font-semibold text-xs">${c.score}</span>`
    : `<span style="color:var(--muted-foreground)">${ICONS.check}</span>`;

  return `
    <div class="fade-in dir-up" data-delay="${delay}">
      <div class="card hover-lift" style="display:flex;flex-direction:column;height:100%">
        <div class="flex gap-4 p-6" style="padding-bottom:1rem;position:relative">
          <div class="cert-badge">
            <img src="${c.badgeImg}" alt="${c.org}" class="cert-badge-img" />
          </div>
          <div style="flex:1">
            <div class="font-mono text-xs uppercase tracking-wider text-muted">${c.org}</div>
            <div class="font-mono font-medium mt-1 text-sm">${dateStr}</div>
          </div>
          ${c.status ? `<span class="status-badge status-badge--${c.status}" style="position:static;align-self:flex-start">${i18n.t(`status.${c.status}`)}</span>` : ""}
        </div>
        <div class="px-6 pb-4 text-sm font-semibold" style="flex:1;padding-left:1.5rem;padding-right:1.5rem;padding-bottom:1rem">${c.title[lang]}</div>
        <div class="flex items-center justify-between border-t p-4" style="padding:1rem 1.5rem">
          <a href="${c.verifyUrl}" target="_blank" rel="noopener" class="cert-verify">
            ${ICONS.externalLink} <span data-i18n="certs.verify">${i18n.t("certs.verify")}</span>
          </a>
          ${scoreHtml}
        </div>
      </div>
    </div>`;
}

function initApp() {
  // Analytics (avant tout le reste)
  initPostHog();

  theme.init();

  i18n.init();

  initNavbar();
  initFooter();

  if (typeof window.renderPage === "function") {
    window.renderPage();
  }

  requestAnimationFrame(() => {
    initFadeIn();
    initLangBars();
  });
}

document.addEventListener("DOMContentLoaded", initApp);
