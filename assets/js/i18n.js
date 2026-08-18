const I18N = {
  fr: {
    "nav.home": "Accueil", "nav.projects": "Projets", "nav.certifications": "Certifications",
    "nav.cv": "CV", "nav.contact": "Contact",
    "hero.available": "Disponible dès maintenant — Recherche un CDI",
    "hero.title.line1": "Développeur Web", "hero.title.line2": "Full-Stack",
    "hero.subtitle": "Je développe des applications web de bout en bout — TypeScript, Angular, React, Java Spring Boot, Node.js — et j'automatise leur livraison avec des pratiques DevOps et DevSecOps.",
    "hero.cta.projects": "Voir mes projets", "hero.cta.contact": "Me contacter",
    "about.eyebrow": "À propos", "about.title": "Quelques mots sur moi",
    "about.p1": "Développeur web full-stack à l’aise aussi bien côté frontend (TypeScript, Angular, React) que backend (Java Spring Boot, Node.js/Express) et bases de données (PostgreSQL, MySQL, Elasticsearch). J’ai consolidé ces compétences en entreprise et tout au long de ma formation, à laquelle j’ai ajouté une dimension DevOps et DevSecOps : CI/CD, conteneurisation, virtualisation et monitoring.",
    "about.p2": "Je cherche à rejoindre une équipe ambitieuse où je pourrai mettre à profit mon expérience et mes compétences dans un nouvel environnement. Curieux par nature, je suis de près les évolutions de l'IA et leur impact sur nos métiers et nos pratiques de développement.",
    "stack.eyebrow": "Stack", "stack.title": "Technologies que j'utilise",
    "stack.lead": "Une sélection des outils que je manipule au quotidien.",
    "projects.eyebrow": "Projets", "projects.title": "Sélection de réalisations",
    "projects.lead": "Une vue d'ensemble de mes projets personnels et scolaires.",
    "projects.featured": "Projets phares",
    "projects.cat.personal": "Personnels", "projects.cat.professional": "Professionnels", "projects.cat.school": "Scolaires",
    "projects.code": "Code", "projects.live": "Live", "projects.view": "Voir le projet →",
    "status.done": "Terminé", "status.in-progress": "En cours", "status.planned": "Planifié",
    "certs.eyebrow": "Certifications", "certs.title": "Certifications & formations",
    "certs.lead": "Mes certifications obtenues, validées par des organismes reconnus.",
    "certs.recent": "Certifications récentes", "certs.verify": "Vérifier",
    "cv.eyebrow": "Parcours",
    "cv.download": "Télécharger en PDF",
    "contact.eyebrow": "Contact", "contact.title": "Me contacter",
    "contact.lead": "Vous recherchez un développeur full-stack avec une approche DevOps et DevSecOps ? Je serais ravi d’échanger avec vous.",
    "contact.location": "Localisation",
    "contact.phone": "Téléphone",
    "contact.openMap": "Ouvrir dans Google Maps",
    "footer.tagline": "Développeur Web Full-Stack", "footer.rights": "Tous droits réservés.",
    "home.featuredCertsLead": "Mes certifications les plus récentes.",
    "home.viewProjects": "Voir tous les projets", "home.viewCerts": "Toutes les certifications",
    "home.viewCV": "Voir le CV complet",
    "home.cvLead": "Consultez mon parcours, mes expériences professionnelles et ma formation en détail.",
  },
  en: {
    "nav.home": "Home", "nav.projects": "Projects", "nav.certifications": "Certifications",
    "nav.cv": "Resume", "nav.contact": "Contact",
    "hero.available": "Available now — Looking for a permanent position",
    "hero.title.line1": "Full-Stack", "hero.title.line2": "Web Developer",
    "hero.subtitle": "I build end-to-end web applications — TypeScript, Angular, React, Java Spring Boot, Node.js — and automate their delivery with DevOps and DevSecOps practices.",
    "hero.cta.projects": "View my work", "hero.cta.contact": "Get in touch",
    "about.eyebrow": "About", "about.title": "A few words about me",
    "about.p1": "Full-stack web developer equally comfortable with frontend (TypeScript, Angular, React), backend (Java Spring Boot, Node.js/Express), and databases (PostgreSQL, MySQL, Elasticsearch). I honed these skills through work experience and my formal education, which also included DevOps and DevSecOps expertise: CI/CD, containerization, virtualization, and monitoring.",
    "about.p2": "I am looking to join an ambitious team where I can leverage my experience and skills in a new environment. Naturally curious, I closely follow the evolution of AI and its impact on our industry and development practices.",
    "stack.eyebrow": "Stack", "stack.title": "Technologies I use",
    "stack.lead": "A handful of tools I work with on a daily basis.",
    "projects.eyebrow": "Projects", "projects.title": "Selected work",
    "projects.lead": "An overview of my personal and school projects.",
    "projects.featured": "Featured projects",
    "projects.cat.personal": "Personal", "projects.cat.professional": "Professional", "projects.cat.school": "School",
    "projects.code": "Code", "projects.live": "Live", "projects.view": "View project →",
    "status.done": "Done", "status.in-progress": "In Progress", "status.planned": "Planned",
    "certs.eyebrow": "Certifications", "certs.title": "Certifications & training",
    "certs.lead": "Certifications earned, issued by recognized organizations.",
    "certs.recent": "Latest certifications", "certs.verify": "Verify",
    "cv.eyebrow": "Journey",
    "cv.download": "Download as PDF",
    "contact.eyebrow": "Contact", "contact.title": "Contact me",
    "contact.lead": "Looking for a full-stack developer with a DevOps and DevSecOps approach? I would be happy to discuss this with you.",
    "contact.location": "Location",
    "contact.phone": "Phone",
    "contact.openMap": "Open in Google Maps",
    "footer.tagline": "Full-Stack Web Developer", "footer.rights": "All rights reserved.",
    "home.featuredCertsLead": "My most recent certifications.",
    "home.viewProjects": "View all projects", "home.viewCerts": "All certifications",
    "home.viewCV": "View full resume",
    "home.cvLead": "Browse my career path, work experience and education in detail.",
  },
};


class I18nController {
  constructor() {
    this.lang = "fr";
  }

  init() {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") {
      this.lang = saved;
    } else if (navigator.language?.startsWith("en")) {
      this.lang = "en";
    }
    document.documentElement.lang = this.lang;
  }

  t(key) {
    return (I18N[this.lang]?.[key]) || (I18N.en?.[key]) || key;
  }

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    this._applyStatic();
    this._updateLangBtns();
    if (typeof globalThis.renderPage === "function") {
      globalThis.renderPage();
    }
    // Re-init fade-in for newly rendered elements
    setTimeout(initFadeIn, 50);
  }

  _applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = this.t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      el.innerHTML = this.t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      el.placeholder = this.t(el.dataset.i18nPlaceholder);
    });
  }

  _updateLangBtns() {
    document.querySelectorAll("[data-lang-btn]").forEach(btn => {
      btn.classList.toggle("lang-active", btn.dataset.langBtn === this.lang);
    });
  }
}

const i18n = new I18nController();
