# Portfolio — Vincent Murienne

Portfolio statique HTML/CSS/JS déployé sur GitHub Pages.

## Stack

- **HTML5 / CSS3 / JavaScript** vanilla — aucun framework, aucun build
- **i18n maison** — FR/EN persisté en `localStorage`
- **PostHog** — analytics (injecté au déploiement via GitHub Actions secrets)

## Mettre à jour le contenu

Tout le contenu est centralisé dans **`assets/js/data.js`** :

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` gère tout automatiquement.

### 1. Activer GitHub Pages

Sur le repo GitHub → **Settings → Pages → Source** → **GitHub Actions**.

### 2. Secrets PostHog

**Settings → Secrets and variables → Actions** :

- `POSTHOG_KEY`  — clé du projet (récupérée sur [app.posthog.com](https://app.posthog.com))
- `POSTHOG_HOST` — l'host

Le workflow se déclenche, le site est déployé et l'URL apparaît dans **Settings → Pages**.

> URL du site : `https://vincent-murienne.github.io/Portfolio/`