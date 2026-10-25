# 🎨 FABIUS IMPORT-EXPORT — Récapitulatif des choix appliqués

## 1. Palette (conforme au brief)

| Rôle | Couleur | Code | Usage |
|---|---|---|---|
| Énergie & prestige ivoirien | **Orange premium luxueux** | `#FF6F00` (+ `#FF9A3D`, `#C65500`) | CTA principaux, accents, halos, filtres actifs |
| Transparence & pureté | **Blanc diamant** | `#FFFFFF` | Textes, section Maison Couture (fond lumineux) |
| Stabilité & croissance | **Vert profond** | `#009739` (`#004D1D`, `#022B12`) | Fond section Services, ruban tricolore |
| Puissance & modernité | **Noir perle** | `#000000` | Fonds principaux, header, footer |
| Luxe & réussite | **Or premium+** | `#FFD700` | Slogan, filets, badges, CTA devis |
| Intensité & passion | **Rubis** | `#AA0114` | CTA couture, légendes section claire |
| Détails décoratifs | **Cristal & diamant rose** | `#DFF3FF` / `#F7C5D1` | Gemmes flottantes du hero, sparkles couture, cadres |

**Touche identitaire** : ruban tricolore **orange-blanc-vert** (drapeau ivoirien) sous le header
et au-dessus du footer.

## 2. Typographies

- **Montserrat** (400 → 900) : titres, navigation, boutons, corps → modernité & impact.
- **Playfair Display** (italique) : slogan, citations, mots « prestige » → signature haut de gamme.
- Google Fonts avec `preconnect` + repli système hors-ligne.

## 3. Animations & interactions

| Animation | Où |
|---|---|
| Fade-in / slide cascading au scroll (IntersectionObserver) | Toutes sections |
| Parallaxe fluide (requestAnimationFrame) | Bandeau showroom cristal |
| Ken Burns (respiration) | Image hero (parc auto) |
| Gemmes cristal/diamant rose flottantes | Hero (décor) |
| Header transparent → verre fumé orange au scroll | Navigation fixe |
| Menu latéral glissant + burger animé | Mobile |
| Marquee marques infini (pause au survol) | Bandeau brands |
| Filtres de catalogue **Tous / Véhicules / Haute couture** | Galerie (24 visuels) |
| Lightbox (clic, clavier ‹ › Esc) | Galerie |
| Survol cartes : élévation + zoom + liseré or | Services & catalogue |
| Boutons : reflet balayant + élévation | Tous CTA |
| Scrollspy, preloader « F », WhatsApp pulsé, retour haut | Global |
| `prefers-reduced-motion` respecté | Accessibilité |

## 4. Images (37 fichiers optimisés, ≈ 3,2 Mo)

**Photos réelles fournies (13)** — authenticité :
- `hero-parc.jpg` : parc auto de Korhogo (hero) ; `apropos-bureau.jpg`, `apropos-marques.jpg`
  (à propos) ; `partenaire.jpg` (enseigne Canada's Car Import) ; `location.jpg`, `vente.jpg`
  (services) ; `catalogue1-6.jpg` : stock réel (Palisade, Wrangler 4xe, Range Rover Sport,
  Sienna Hybrid, Q5, Seltos) ; `logo.jpg` + `favicon.png`.

**Visuels premium générés (20)** — brief respecté :
- Audi : `audi.jpg` (rubis), `audi-noir.jpg` (noir perle), `audi-cristal.jpg` (cristal)
- BMW : `bmw.jpg` (or premium+), `bmw-blanc.jpg` (blanc diamant)
- Mercedes-Benz : `mercedes.jpg` (noir perle), `mercedes-rose.jpg` (diamant rose)
- Toyota `toyota.jpg`, Kia `kia.jpg`, Range Rover `range.jpg` (orange premium luxueux)
- Showrooms : `showroom-cristal.jpg`, `showroom-diamant.jpg` (décor cristal & diamant)
- `import.jpg` : navire Canada ↔ Côte d'Ivoire
- **Haute couture (7)** : `couture.jpg` (atelier), `couture_homme1/2.jpg`,
  `couture_dame1/2.jpg`, `couture_enfant1/2.jpg` — éditions mode studio, résolution parfaite.

**Icônes réseaux** : SVG officiels (Simple Icons) → nets à toutes tailles.

**Chaque image a sa légende descriptive sous elle**, modifiable dans `content.js`
(champ `details`), reprise comme attribut `alt` pour le SEO.

## 5. Structure du site

1. **Hero** — titre, slogan or, présentation, CTA, photo du parc + badge « Garanti 100 % ».
2. **Marquee** — Toyota, Ford, Honda, Hyundai, Kia, Audi, BMW, Mercedes-Benz, Range Rover.
3. **À propos** — mission + 4 piliers (Garanti 100 %, Expertise internationale, Transparence,
   Identité ivoirienne) + 2 visuels légendés.
4. **Services** (fond vert profond) — 4 cartes : vente, location, import-export, couture.
5. **Bandeau parallaxe** — citation + CTA devis.
6. **Maison Couture** (fond blanc diamant, sparkles rose/cristal) — texte, 3 téléphones
   atelier cliquables, visuel atelier, CTA vers les créations filtrées.
7. **Catalogue** — 24 visuels filtrables (18 véhicules / 6 couture) + lightbox.
8. **Contact** — WhatsApp, téléphone, email, atelier couture, adresse + Google Maps
   (plus code), enseigne partenaire, 4 réseaux sociaux.
9. **Footer** — marque, navigation, contact direct, ruban tricolore, copyright auto.

## 6. SEO & qualité

- `title`, `meta description`, `keywords`, Open Graph, Twitter Card, `theme-color`, canonical.
- Schema.org **AutoDealer** (téléphones, adresse Korhogo, réseaux).
- `lang="fr"`, H1/H2/H3, `alt` 100 %, `loading="lazy"`, contenu statique de secours sans JS.
- **Vérifié en navigateur headless réel** : desktop 1440 px & mobile 375 px →
  0 erreur console, 0 requête échouée, 0 débordement horizontal, filtres 6/18/24 OK,
  lightbox & menu OK, textes non tronqués.

## 7. Fichiers livrés

`index.html` · `styles.css` · `app.js` · `content.js` · `images/` ·
`GUIDE-MISE-EN-LIGNE.md` · `RECAPITULATIF-CHOIX.md`
