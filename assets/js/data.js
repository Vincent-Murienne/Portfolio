const STACK = [
  { name: "TypeScript",       category: "Language" },
  { name: "Python",           category: "Language" },
  { name: "Angular",          category: "Frontend" },
  { name: "HTML5",            category: "Frontend" },
  { name: "CSS3",             category: "Frontend" },
  { name: "Node.js",          category: "Backend" },
  { name: "Express",          category: "Backend" },
  { name: "Java Spring Boot", category: "Backend" },
  { name: "PostgreSQL",       category: "Database" },
  { name: "MySQL",            category: "Database" },
  { name: "ElasticSearch",    category: "Database" },
  { name: "Docker",           category: "DevOps" },
  { name: "Jenkins",          category: "DevOps" },
  { name: "Grafana",          category: "DevOps" },
  { name: "Microsoft Azure",  category: "Cloud" },
  { name: "Git",              category: "Tools" },
];


// status : "done" | "in-progress" | "planned"
// icon   : clé ICONS de secours si img est null (shield, globe, smartphone, cloud, database, layers, gamepad2, layoutDashboard, sparkles)
const PROJECTS = [
  {
    id: "p1", cat: "personal",
    title: { fr: "AI Watcher", en: "AI Watcher" },
    desc:  { fr: "Outil d’envoi quotidien d’e-mails de veille en IA et cybersécurité, optimisés pour une publication sur LinkedIn.", en: "A tool for sending daily emails on AI and cybersecurity trends, optimized for LinkedIn posting." },
    tags: ["TypeScript", "GitHub Actions"], year: 2026, repo: "https://github.com/Vincent-Murienne/ai-watcher",
    status: "done", icon: "sparkles", img: "assets/images/projet/personnel/ai-watcher.png",
  },
  {
    id: "p2", cat: "personal",
    title: { fr: "Pokemon Ultimate", en: "Pokemon Ultimate" },
    desc:  { fr: "REMAKE : Jeu Pokémon avec une nouvelle histoire et de nouvelles cartes, une difficulté accrue, incluant tous les dresseurs et Pokémon de toutes les générations.", en: "REMAKE: Pokémon game with a new story and new cards, increased difficulty, including all trainers and Pokémon from all generations." },
    tags: ["RPG Maker XP", "Ruby"], year: 2025, repo: "https://github.com/Vincent-Murienne/pokemon-ultimate",
    status: "in-progress", icon: "gamepad2", img: "assets/images/projet/personnel/pokemon-ultimate.png",
  },
  {
    id: "p3", cat: "personal",
    title: { fr: "Portfolio", en: "Portfolio" },
    desc:  { fr: "Le portfolio que vous consultez actuellement.", en: "The portfolio you are currently viewing." },
    tags: ["HTML", "CSS", "JS", "GitHub Pages"], year: 2023, repo: "https://github.com/Vincent-Murienne/Portfolio",
    status: "done", icon: "layoutDashboard", img: "assets/images/projet/personnel/portfolio.png",
  },
  {
    id: "p4", cat: "personal",
    title: { fr: "REMAKE : Street Fighter", en: "REMAKE : Street Fighter" },
    desc:  { fr: "Réalisé au lycée, l’objectif était de recréer une version simplifiée du gameplay de Street Fighter avec les personnages de Ryu et Ken.", en: "Created in high school, the goal was to recreate a simplified version of Street Fighter gameplay using the characters Ryu and Ken." },
    tags: ["Python"], year: 2021, repo: "https://github.com/Vincent-Murienne/py-street-fighter",
    status: "done", icon: "gamepad2", img: "assets/images/projet/personnel/street-fighter.png",
  },
  // {
  //   id: "pr1", cat: "professional",
  //   title: { fr: "Plateforme SaaS B2B", en: "B2B SaaS Platform" },
  //   desc:  { fr: "Refonte complète d'une plateforme de gestion de flotte. Front Next.js, back Node.js, infra AWS.", en: "End-to-end rebuild of a fleet-management platform. Next.js front, Node.js back, AWS infra." },
  //   tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"], year: 2026, featured: true, role: { fr: "Lead Front-End", en: "Lead Front-End" },
  //   img: null, status: "in-progress",
  // },
  // {
  //   id: "pr2", cat: "professional",
  //   title: { fr: "E-commerce headless", en: "Headless E-commerce" },
  //   desc:  { fr: "Migration d'un e-commerce monolithique vers une architecture headless (Next + Shopify Storefront API).", en: "Migration of a monolithic e-commerce to a headless architecture (Next + Shopify Storefront API)." },
  //   tags: ["Next.js", "GraphQL", "Shopify", "Stripe"], year: 2025, featured: true, role: { fr: "Full-Stack", en: "Full-Stack" },
  //   img: null, status: "in-progress",
  // },
  // {
  //   id: "pr3", cat: "professional",
  //   title: { fr: "Dashboard analytics", en: "Analytics Dashboard" },
  //   desc:  { fr: "Dashboard analytics temps réel pour une équipe data, avec WebSockets et graphes interactifs.", en: "Real-time analytics dashboard for a data team, with WebSockets and interactive charts." },
  //   tags: ["React", "D3.js", "WebSockets", "Redis"], year: 2023, role: { fr: "Front-End Senior", en: "Senior Front-End" },
  //   img: null, status: "in-progress",
  // },
  {
    id: "s1", cat: "school",
    title: { fr: "Horizon BP", en: "Horizon BP" },
    desc:  { fr: "Projet de fin d’année M2 — application bancaire mobile pour les 18–35 ans combinant gestion de budget, apprentissage financier et impact écologique.", en: "Final year M2 project — mobile banking application for 18–35 year olds combining budget management, financial learning and ecological impact." },
    tags: ["Java Spring Boot", "React Native", "Docker", "Keycloak", "TrueLayer"], year: 2026, repo: "https://gitlab.com/adrien.houede/horizon-bp",
    status: "in-progress", icon: "smartphone", img: "assets/images/projet/scolaire/horizon-bp.png",
  },
  {
    id: "s2", cat: "school",
    title: { fr: "DevSecOps CI/CD", en: "DevSecOps CI/CD"},
    desc:  { fr: "Mise en place de pipelines CI/CD pour automatiser la livraison de mon application BeatZone. Sécurisation du cycle de développement par la détection et la correction des vulnérabilités.", en: "Implementation of CI/CD pipelines to automate the delivery of my BeatZone application. Securing the development cycle through vulnerability detection and remediation." },
    tags: ["Microsoft Azure", "Ansible", "Debian + Ubuntu", "Kubernetes", "GitLeaks", "Snyk", "Greenbone", "ZAP Proxy", "SBOM : Syft + Grift", "Vault", "Trivy"], year: 2026, repo: "https://gitlab.com/vmurienne/beatzone",
    status: "done", icon: "shield", img: "assets/images/projet/scolaire/beatzone-ci-cd.png",
  },
  {
    id: "s3", cat: "school",
    title: { fr: "Azure-Terraform", en: "Azure-Terraform" },
    desc:  { fr: "Projet d’infrastructure Azure automatisé avec Terraform (VM, réseau) et Ansible (Docker, Nginx) pour déployer un serveur web accessible en HTTP.", en: "Automated Azure infrastructure project with Terraform (VM, network) and Ansible (Docker, Nginx) to deploy a web server accessible via HTTP." },
    tags: ["Microsoft Azure", "Terraform", "Ansible", "Nginx", "Docker"], year: 2026, repo: "https://github.com/Vincent-Murienne/azure-terraform",
    status: "done", icon: "cloud", img: "assets/images/projet/scolaire/azure-terraform.png",
  },
  {
    id: "s4", cat: "school",
    title: { fr: "Pokedex", en: "Pokedex" },
    desc:  { fr: "Pokédex développé en Spring Boot qui ajuste les statistiques des Pokémon selon la météo (WeatherAPI), avec cache Redis, monitoring Prometheus/Grafana et déploiement via Docker.", en: "Pokédex developed in Spring Boot which adjusts the stats of Pokémon according to the weather (WeatherAPI), with Redis cache, Prometheus/Grafana monitoring and deployment via Docker." },
    tags: ["Java Spring Boot", "Docker", "Redis", "Grafana", "Prometheus"], year: 2025, repo: "https://github.com/Vincent-Murienne/pokedex",
    status: "done", icon: "database", img: null,
  },
  {
    id: "s5", cat: "school",
    title: { fr: "PRJ_NODE_PSG", en: "PRJ_NODE_PSG" },
    desc:  { fr: "Projet full-stack d’entrainement au technologies (Node.js + MySQL + React + mobile Flutter) conteneurisé avec Docker.", en: "Full-stack training project in technologies (Node.js + MySQL + web client + Flutter mobile) containerized with Docker." },
    tags: ["React", "Flutter + Dart", "TypeScript", "Express", "MySQL", "Docker"], year: 2025, repo: "https://github.com/Vincent-Murienne/PRJ_NODE_PSG",
    status: "done", icon: "layers", img: null,
  },
  {
    id: "s6", cat: "school",
    title: { fr: "NoSQL", en: "NoSQL" },
    desc:  { fr: "Projet pour nous apprendre les bases de MongoDB, Redis et Neo4j via Docker et Python. ELK Stack déployée pour l’analyse et la visualisation de logs et données en temps réel.", en: "This project teaches us the basics of MongoDB, Redis, and Neo4j using Docker and Python. The ELK Stack is deployed for analyzing and visualizing logs and real-time data." },
    tags: ["ELK Stack", "MongoDB", "Redis", "Neo4j", "Docker", "Python"], year: 2025, repo: "https://github.com/Vincent-Murienne/NoSQL",
    status: "done", icon: "database", img: "assets/images/projet/scolaire/nosql-logo.png",
  },
  {
    id: "s7", cat: "school",
    title: { fr: "Site web : Àirneis, e-commerce", en: "Web site : Àirneis, e-commerce" },
    desc:  { fr: "Àirneis est une marque fictive de meubles développant un site e-commerce international. Le projet inclut un site web avec back-office et une application Android.", en: "Àirneis is a fictional furniture brand developing an international e-commerce site. The project includes a website with a back office and an Android application." },
    tags: ["React", "PHP", "Java + Android Studio", "MySQL", "Stripe"], year: 2024, repo: "https://github.com/Vincent-Murienne/Projet-E-commerce",
    status: "done", icon: "globe", img: "assets/images/projet/scolaire/airneis.png",
  },
  {
    id: "s8", cat: "school",
    title: { fr: "Site web : Zoo de Cerza", en: "Web site : Cerza zoo" },
    desc:  { fr: "Site web réalisé en groupe (front et back) dans le cadre de mon BTS SIO, visant à concevoir une plateforme de gestion pour le Zoo de Cerza.", en: "Website created in a group as part of my BTS SIO, aiming to design a management platform for the Cerza Zoo." },
    tags: ["React", "Node.js", "Express", "MySQL"], year: 2023, repo: "https://github.com/Vincent-Murienne/AP---tkt-ReactJS",
    status: "done", icon: "globe", img: "assets/images/projet/scolaire/zoo-cerza-tkt.png",
  },
  {
    id: "s9", cat: "school",
    title: { fr: "Site web : Comeleon", en: "Web site : Comeleon" },
    desc:  { fr: "Premier site web réalisé en groupe (front et back), avec l’agence Comeleon pour la société de terrassement TerraBat.", en: "First website created as a group, with the Comeleon agency for the earthmoving company TerraBat." },
    tags: ["Symfony PHP", "HTML", "CSS"], year: 2023, repo: "https://github.com/Vincent-Murienne/Git_AP_SocieteTerrassement",
    status: "done", icon: "globe", img: "assets/images/projet/scolaire/terrassement-comeleon.png",
  },
];

const CERTIFICATIONS = [
  {
    id: "c1", org: "ANSSI", date: "2023-03", status: "done",
    title: {
      fr: "ANSSI SecNum académie : Formation sur les bases de la cybersécurité et les bonnes pratiques numériques.",
      en: "ANSSI SecNum Academic: Training on the fundamentals of cybersecurity and digital best practices.",
    },
    badgeImg: "assets/images/certifs/anssi-secnum-academie.jpg",
    verifyUrl: "https://e.pcloud.link/publink/show?code=XZ4IuhZMa3NbVFttqVUd3YxrY00lpuduYlV",
  },
  {
    id: "c2", org: "PIX", date: "2023-01", status: "done",
    title: {
      fr: "PIX : Certification évaluant le niveau de maîtrise de l’informatique et des outils numériques. Score obtenu : 536 sur 768.",
      en: "PIX: Certification assessing digital literacy and mastery of IT tools. Score: 536 out of 768.",
    },
    badgeImg: "assets/images/certifs/pix.png",
    verifyUrl: "https://e.pcloud.link/publink/show?code=XZ458hZzIeMgN573RQDzQnK8bi7OYTjPUcy",
  },
  {
    id: "c3", org: "CNIL", date: "2023-01", status: "done",
    title: {
      fr: "Atelier RGPD : Formation en cybersécurité, décomposé en 5 modules.",
      en: "GDPR Workshop: Cybersecurity training divided into 5 modules.",
    },
    badgeImg: "assets/images/certifs/cnil-atelier-rgpd.png",
    verifyUrl: "https://e.pcloud.link/publink/show?code=XZJIuhZRXBGxsxJAHhaBK6LlybE7bYEDRvy",
  },
  {
    id: "c4", org: "CISCO", date: "2022-05", status: "done",
    title: {
      fr: "CISCO Cybersecurity Essentials : Certification approfondissant les connaissances en cybersécurité.",
      en: "CISCO Cybersecurity Essentials: In-depth certification on cybersecurity knowledge.",
    },
    badgeImg: "assets/images/certifs/cisco-cybersecurity-essentials.png",
    verifyUrl: "https://e.pcloud.link/publink/show?code=XZK58hZjpf4LqMluJHmz02ysJa4cYOEaNwV",
  },
  {
    id: "c5", org: "CISCO", date: "2022-02", status: "done",
    title: {
      fr: "CISCO IT Essentials : Certification générique sur les logiciels et les matériels informatiques.",
      en: "CISCO IT Essentials: General-purpose certification covering computer software and hardware.",
    },
    badgeImg: "assets/images/certifs/cisco-it-essentials.png",
    verifyUrl: "https://e.pcloud.link/publink/show?code=XZT58hZHQElQde0mcFhPppwcQdfXVkW8vQX",
  },
  {
    id: "c6", org: "CISCO", date: "2022-01", status: "done",
    title: {
      fr: "CISCO Introduction to Cybersecurity : Certification sur les connaissances de base en cybersécurité.",
      en: "CISCO Introduction to Cybersecurity: Certification covering the fundamentals of cybersecurity.",
    },
    badgeImg: "assets/images/certifs/cisco-introduction-to-cybersecurity.png",
    verifyUrl: "https://e.pcloud.link/publink/show?code=XZC58hZNG4rxWixMobfqLXyKvXIO4thFaLX",
  },
];

const MONTHS = {
  fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  en: ["January", "February", "March ", "April", "May", "Jun", "July", "August ", "September", "October", "November", "December"],
};

function fmtDate(d, lang) {
  const [y, m] = d.split("-").map(Number);
  return `${MONTHS[lang][m - 1]} ${y}`;
}
