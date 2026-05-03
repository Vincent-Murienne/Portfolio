# V2 — Next.js 14 + shadcn/ui + Static Export

Migration de proto vers Next.js + shadcn/ui, déployé en static export sur **vincentmurienne.github.io**.

## Stack

- **Next.js 14** (App Router) avec `output: "export"`
- **TypeScript** strict
- **Tailwind CSS** + design tokens shadcn/ui (HSL, dark mode via `class`)
- **shadcn/ui** components inlinés (`components/ui/*`) — pas de CLI nécessaire pour le build
- **next-themes** — dark/light avec préférence système
- **lucide-react** — icônes (remplace les SVG inline du proto)
- **PostHog** — analytics + heatmaps + session replay (1M events/mois gratuit)
- **i18n maison** via Context React (FR/EN persisté en `localStorage`)

## Installation

```bash
cd v2-nextjs
npm install
cp .env.local.example .env.local
# édite .env.local avec ta clé PostHog
npm run dev
```

## Build statique

```bash
npm run build
# génère le dossier out/ prêt à servir sur GitHub Pages
```

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` à la racine du repo s'occupe de tout :

1. **Crée le repo `vincentmurienne.github.io`** sur GitHub
2. **Settings → Pages** → Source = **GitHub Actions**
3. **Settings → Secrets and variables → Actions** → ajoute :
   - `NEXT_PUBLIC_POSTHOG_KEY` (récupéré sur app.posthog.com)
   - `NEXT_PUBLIC_POSTHOG_HOST` (par ex. `https://eu.i.posthog.com`)
4. **Push** sur `main` → le workflow build et déploie automatiquement
5. Site dispo à **https://vincentmurienne.github.io**

> Repo en *user-page* (`vincentmurienne.github.io`) → pas besoin de `basePath`. Si tu utilises un *project-page* (`vincentmurienne.github.io/portfolio`), décommente `basePath` et `assetPrefix` dans `next.config.js`.

## Workflow contact form

`.github/workflows/contact.yml` (à la racine) envoie un email via Gmail SMTP sur réception d'un `repository_dispatch`. Pour relier le form :

- **Option simple** : Formspree / Web3Forms (gratuit, juste un endpoint à mettre dans le `fetch` du form)
- **Option self-hosted** : Cloudflare Worker (gratuit) qui reçoit le POST et appelle l'API GitHub `repository_dispatch` avec un PAT serveur

Secrets nécessaires pour `contact.yml` : `GMAIL_USER`, `GMAIL_APP_PASS`, `CONTACT_TO`.

## PostHog : ce qui est tracké

- **Pageviews** auto sur chaque page
- **Pageleave** (engagement / bounce)
- **Autocapture** (clics, soumissions)
- **Session replay** (avec inputs masqués pour RGPD)
- Events custom : `contact_submitted` (CV download, theme/lang toggles à brancher si besoin)

Va sur **app.posthog.com** → ton projet → **Web Analytics** pour voir les visites, et **Heatmaps** pour les clics.

## Structure

```
v2-nextjs/
├── app/
│   ├── layout.tsx          # root + providers + nav/footer
│   ├── page.tsx            # /
│   ├── projects/page.tsx   # /projects
│   ├── certifications/page.tsx
│   ├── cv/page.tsx
│   ├── contact/page.tsx
│   └── globals.css         # tokens shadcn + glass
├── components/
│   ├── ui/                 # button, card, badge, input (shadcn)
│   ├── layout.tsx          # NavBar + Footer
│   └── providers.tsx       # ThemeProvider + I18nProvider + PostHogInit
├── lib/
│   ├── data.ts             # TOUTES les données (typées)
│   ├── i18n.tsx            # Context FR/EN
│   ├── posthog.tsx         # init client
│   └── utils.ts            # cn()
├── next.config.js          # output: "export"
├── tailwind.config.js
└── tsconfig.json
```

Pour mettre à jour un projet, une certif ou une expérience → éditer **`lib/data.ts`** uniquement. Tout le rendu en hérite.
