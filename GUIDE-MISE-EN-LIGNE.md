# 🚀 FABIUS IMPORT-EXPORT — Guide de mise en ligne étape par étape

Le site est **100 % statique** (HTML / CSS / JS + images) : aucun serveur spécial, aucune base de
données, aucun abonnement payant. Il fonctionne sur n'importe quel hébergeur.

---

## 📦 Contenu du ZIP

```
fabius-import-export.zip
├── index.html          → la page du site
├── styles.css          → le design (palette ivoirienne, animations, responsive)
├── app.js              → le moteur (animations, filtres, lightbox, menu, contenu)
├── content.js          → ⭐ VOTRE tableau de bord : tous les textes & légendes modifiables
├── images/             → 37 visuels optimisés (logo, parc réel, véhicules premium, couture, icônes)
├── GUIDE-MISE-EN-LIGNE.md   → ce guide
└── RECAPITULATIF-CHOIX.md   → palette, typographies, animations, images
```

---

## ✍️ Avant de publier : personnaliser (2 minutes)

1. Ouvrez **`content.js`** avec un éditeur de texte (Bloc-notes, VS Code…).
2. Modifiez librement : slogan, présentation, services, téléphones (WhatsApp, téléphone,
   atelier couture), email, adresse, liens réseaux sociaux.
3. **Chaque légende sous image** = champ `details` : modifiez-la librement.
4. Pour changer une image : remplacez le fichier dans `images/` **en gardant le même nom**,
   ou indiquez un nouveau chemin dans le champ `image`.
5. Testez en local : double-cliquez sur `index.html`.

---

## 🅰️ Option 1 — Netlify Drop (le plus simple, gratuit, ~3 minutes)

1. Dézippez le ZIP sur votre ordinateur.
2. Allez sur **https://app.netlify.com/drop**.
3. Glissez-déposez le **dossier dézippé** dans la zone prévue.
4. Netlify publie immédiatement : `https://fabius-import-export.netlify.app` (nom modifiable).
5. Mises à jour : *Deploys → drag & drop* du dossier modifié.

## 🅱️ Option 2 — GitHub Pages (gratuit)

1. Créez un dépôt public sur **https://github.com** (ex. `fabius-import-export`).
2. Uploadez **tout le contenu du dossier dézippé** (index.html à la racine).
3. *Settings → Pages → Branch `main` / root → Save*.
4. Le site vit sur `https://votre-pseudo.github.io/fabius-import-export/`.

## 🅲 Option 3 — Hébergeur classique (Hostinger, o2switch, LWS, cPanel…)

1. Panneau **cPanel / hPanel** → *Gestionnaire de fichiers* (ou FileZilla en FTP).
2. Ouvrez **`public_html`** (ou `www` / `htdocs`).
3. Uploadez **le contenu du dossier dézippé** : `index.html` directement dans `public_html`.
4. Votre domaine affiche le site ; activez le **SSL/Let's Encrypt** (gratuit) pour le cadenas 🔒.

## 🅳 Option 4 — Vercel / Cloudflare Pages (gratuit, très rapide)

1. Compte sur **vercel.com** ou **pages.cloudflare.com**.
2. *New Project → Import* le dépôt GitHub, ou `npx vercel deploy --prod` depuis le dossier.
3. Framework : *None / Static* — aucune commande de build — HTTPS automatique.

---

## 🌍 Nom de domaine personnalisé (recommandé)

1. Achetez par ex. `fabius-import-export.ci` ou `.com` (Namecheap, OVH, Hostinger…).
2. DNS : pointez le domaine vers l'hébergeur (assistant Netlify/Vercel, ou nameservers hébergeur).
3. Propagation : 10 min → 24 h. Vérifiez le HTTPS.

---

## ✅ Check-list finale

- [ ] Textes, numéros WhatsApp/téléphone et liens réseaux relus dans `content.js`
- [ ] Test sur téléphone : menu burger, bouton WhatsApp flottant, filtres catalogue tactiles
- [ ] Clic sur chaque numéro (`tel:`) et chaque réseau social
- [ ] HTTPS actif (cadenas)
- [ ] Fiche **Google Business Profile** : « Fabius Import-Export, C9W9+8V6 B308, Korhogo »
      + Google Search Console → visibilité locale maximale
- [ ] Après 48 h : rechercher `site:mon-domaine.com` pour confirmer l'indexation

---

## 🛠️ Questions fréquentes

- **Modifications non visibles ?** Videz le cache (Ctrl + F5 / Cmd + Shift + R).
- **Image absente ?** Vérifiez chemin + majuscules/minuscules dans `content.js` vs `images/`.
- **Changer les couleurs ?** Tout est dans le bloc `:root` en tête de `styles.css`
  (`--orange`, `--vert`, `--or`, `--rubis`, `--rose`, `--cristal`…).
- **Filtres du catalogue ?** Automatiques : toute image dont le nom contient « couture »
  est classée dans l'onglet *Haute couture*, sinon *Véhicules*.
- **Sans connexion ?** Le site s'ouvre en local depuis `index.html` : idéal en rendez-vous client.
