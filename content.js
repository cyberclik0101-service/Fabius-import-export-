// =====================================================================
//  FABIUS IMPORT-EXPORT — Contenu textuel du site vitrine
//  ---------------------------------------------------------------------
//  Ce fichier est VOTRE tableau de bord éditorial :
//  modifiez librement titres, textes, images et légendes,
//  puis rechargez la page : le site se met à jour automatiquement.
//
//  → Chaque image possède un champ « details » : c'est la légende
//    descriptive affichée sous l'image sur le site.
//  → Pour changer une image : remplacez le fichier dans /images
//    (même nom) ou indiquez un nouveau chemin dans « image ».
// =====================================================================

window.CONTENT = {

  accueil: {
    titre: "FABIUS IMPORT-EXPORT",
    slogan: "Prestige ivoirien, puissance internationale",
    presentation: "FABIUS IMPORT-EXPORT est votre passerelle premium entre le Canada et la Côte d’Ivoire. Nous proposons des véhicules haut de gamme Audi, BMW, Mercedes-Benz, Toyota, Kia, Range Rover, ainsi qu’un service couture exclusif.",
    // Visuel principal du hero (grande image d'ouverture)
    heroImage: {
      image: "images/hero-parc.jpg",
      details: "Notre parc auto de Korhogo — vente, achat et location de véhicules."
    }
  },

  apropos: {
    valeurs: "Notre mission est d’allier expertise internationale et identité ivoirienne. Nous offrons des véhicules fiables, un service transparent et une expérience client exceptionnelle.",
    // Visuels de la section « À propos » (légende modifiable)
    visuels: [
      { image: "images/apropos-bureau.jpg", details: "La direction générale — accueil et conseil personnalisés." },
      { image: "images/apropos-marques.jpg", details: "Toutes les marques premium : Toyota, Ford, Honda, Hyundai, Kia…" }
    ]
  },

  services: [
    {
      titre: "Vente de véhicules",
      description: "Sélection premium Audi, BMW, Mercedes-Benz et toutes marques.",
      image: "images/vente.jpg",
      details: "Véhicules inspectés, garantis et prêts à partir — toutes marques premium."
    },
    {
      titre: "Location de véhicules",
      description: "Solutions flexibles, tarifs compétitifs, véhicules adaptés aux particuliers comme aux entreprises.",
      image: "images/location.jpg",
      details: "Location courte ou longue durée, au départ de notre parc de Korhogo."
    },
    {
      titre: "Import-Export Canada ↔ Côte d’Ivoire",
      description: "Spécialisation dans les véhicules haut de gamme, avec accompagnement logistique complet.",
      image: "images/import.jpg",
      details: "Du Canada vers la Côte d’Ivoire : sourcing, dossier, transport et dédouanement."
    },
    {
      titre: "Haute couture",
      description: "Un service couture exclusif pour hommes, dames et enfants. Des créations modernes et traditionnelles ivoiriennes.",
      image: "images/couture.jpg",
      details: "Atelier haute couture : wax premium, bazin riche et tailoring sur mesure."
    }
  ],

  // Section « Maison Couture » : visuel + téléphones dédiés (voir contact.couture)
  couture: {
    titre: "La Maison Couture Fabius",
    texte: "Hommes, dames, enfants : des créations modernes et traditionnelles ivoiriennes, coupées et cousues dans nos ateliers de Korhogo. Wax premium, bazin riche, broderies et tailoring sur mesure pour toutes vos cérémonies.",
    image: { image: "images/couture.jpg", details: "L’atelier haute couture Fabius — tissus premium et savoir-faire ivoirien." }
  },

  catalogue: {
    galerie: [
      { image: "images/audi.jpg", details: "Audi – élégance et innovation." },
      { image: "images/bmw.jpg", details: "BMW – performance et prestige." },
      { image: "images/mercedes.jpg", details: "Mercedes-Benz – luxe et puissance." },
      { image: "images/toyota.jpg", details: "Toyota – fiabilité et accessibilité." },
      { image: "images/kia.jpg", details: "Kia – modernité et confort." },
      { image: "images/range.jpg", details: "Range Rover – robustesse et prestige." },
      { image: "images/couture_homme1.jpg", details: "Haute couture homme – élégance moderne." },
      { image: "images/couture_dame1.jpg", details: "Haute couture dame – prestige ivoirien." },
      { image: "images/couture_enfant1.jpg", details: "Haute couture enfant – créativité et tradition." },
      { image: "images/couture_homme2.jpg", details: "Style premium – tailoring parfait." },
      { image: "images/couture_dame2.jpg", details: "Robe ivoirienne – modernité et raffinement." },
      { image: "images/couture_enfant2.jpg", details: "Tenue enfant – tradition revisitée." },
      { image: "images/catalogue1.jpg", details: "Hyundai Palisade — import Canada, garanti 100 %." },
      { image: "images/catalogue2.jpg", details: "Jeep Wrangler 4xe rubis — stock premium disponible." },
      { image: "images/catalogue3.jpg", details: "Range Rover Sport — importation premium du Canada." },
      { image: "images/catalogue4.jpg", details: "Toyota Sienna Hybrid rubis — famille & prestige." },
      { image: "images/catalogue5.jpg", details: "Audi Q5 blanc diamant — élégance quatre anneaux." },
      { image: "images/catalogue6.jpg", details: "Kia Seltos AWD — modernité et confort." },
      { image: "images/audi-noir.jpg", details: "Audi noir perle — intensité cristal." },
      { image: "images/audi-cristal.jpg", details: "Audi cristal — pureté lumineuse." },
      { image: "images/bmw-blanc.jpg", details: "BMW blanc diamant — prestige absolu." },
      { image: "images/mercedes-rose.jpg", details: "Mercedes-Benz diamant rose — raffinement ultime." },
      { image: "images/showroom-cristal.jpg", details: "Showroom cristal — écrin premium de vos véhicules." },
      { image: "images/showroom-diamant.jpg", details: "Showroom diamant — livraison prestige." }
    ]
  },

  contact: {
    whatsapp: "+225 0747009412",
    telephone: "+225 0505364542",
    email: "laurentfabius47@gmail.com",
    // Téléphones de l'atelier haute couture
    couture: ["0546638864", "0142986498", "2150000936"],
    adresse: "C9W9+8V6, B308, Korhogo",
    // Visuel « partenaire » de la section contact
    partenaire: {
      image: "images/partenaire.jpg",
      details: "Partenaire Canada’s Car Import — garanti 100 %."
    },
    reseaux: [
      { nom: "TikTok", lien: "https://www.tiktok.com/@fabius", couleur: "#000000", logo: "images/tiktok.svg" },
      { nom: "Instagram", lien: "https://www.instagram.com/fabius", couleur: "#E1306C", logo: "images/instagram.svg" },
      { nom: "WhatsApp", lien: "https://wa.me/message/Y35HSJ7TF4PBC1", couleur: "#25D366", logo: "images/whatsapp.svg" },
      { nom: "Facebook", lien: "https://www.facebook.com/fabius", couleur: "#1877F2", logo: "images/facebook.svg" }
    ]
  },

  cta: "Contactez-nous dès aujourd’hui pour une expérience premium ivoirienne."
};
