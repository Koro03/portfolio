import { CardProjectInfo, PresentationProject, Project, } from "@/types/project";


export const projects: Project[] = [
  {
    slug: "wiki-app",
    title: "wiki-app",
    summary: "Application mobile qui propose chaque jour un nouvel article Wikipédia à découvrir. Les utilisateurs peuvent liker leurs articles favoris et les retrouver facilement. L’application intègre également des quiz interactifs pour tester et améliorer ses connaissances. Un projet axé sur la découverte, l’apprentissage et l’engagement quotidien. ",
    mainImage: {
      src: " /assets/images/mockup-expo.png",
      width: undefined,
      heigth: undefined,
      alt: undefined
    },
    time: "en cours",
    technos: [
      {
        image: {
          src: " /assets/images/react.png",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "react-native"
      },
      {
        image: {
          src: " /assets/images/Tailwind_CSS_Logo.svg.png",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "tailwind"
      },
      {
        image: {
          src: " /assets/images/expo-svgrepo-com.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "expo"
      },
      {
        image: {
          src: " /assets/images/typescript-icon-svgrepo-com.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "typescript"
      },

    ],
    type:"personnal"
  },
  {
    slug: "subCut",
    title: "subCut",
    summary: "Outil en ligne de commande permettant de transformer n’importe quelle vidéo en format vertical type TikTok. Il supporte aussi bien les vidéos locales que celles provenant de YouTube. Le projet se concentre sur l’automatisation du découpage et du reformatage vidéo. Une solution rapide et efficace pour créer du contenu short-form.",
    mainImage: {
      src: " /assets/images/mockup-subcut.png",
      width: 24,
      heigth: 24,
      alt: undefined
    },
    time: "4 jours",
    technos: [
      {
        image: {
          src: " /assets/images/python-5.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "python"
      },

    ],
    type:"personnal"

  },
  {
    slug: "transparent-bg",
    title: "transparent-bg",
    summary: "Application permettant de supprimer automatiquement l’arrière-plan d’une image. L’image finale est exportée avec un fond transparent, prête à être utilisée. Le projet met l’accent sur le traitement d’image et la simplicité d’utilisation. Idéal pour le e-commerce, le design ou les visuels marketing.",
    mainImage: {
      src: " /assets/images/mockup-transparentBg.png",
      width: undefined,
      heigth: undefined,
      alt: undefined
    },
    time: "2 jours",
    technos: [
      {
        image: {
          src: " /assets/images/python-5.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "python"
      },
    ],
    type:"personnal"
  },
  {
    slug: "loarwenn",
    title: "loarwenn",
    summary: "Loarwenn est une application web de gestion d’annonces d’activités, pensée comme un équivalent de Tripadvisor. Elle permet de consulter, publier et gérer des annonces liées à des activités culturelles, sportives ou de loisirs. Le projet met l’accent sur la structuration des données, la gestion des utilisateurs et une séparation claire entre front-office et back-office. Il vise à proposer une expérience fluide aussi bien pour les visiteurs que pour les administrateurs. Loarwenn a été conçu dans un contexte de travail en équipe, avec une approche orientée projet réel.",
    mainImage: {
      src: " /assets/images/mockup-loarwenn.png",
      width: undefined,
      heigth: undefined,
      alt: undefined
    },
    time: "1 mois",
    technos: [
      {
        image: {
          src: " /assets/images/php-svgrepo-com.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "php"
      },
      {
        image: {
          src: " /assets/images/js-svgrepo-com.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "javascript"
      },
      {
        image: {
          src: " /assets/images/docker-svgrepo-com.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "docker"
      },
      {
        image: {
          src: " /assets/images/postgresql-logo-svgrepo-com.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "postgresql"
      },
    ],
    type:"school"
  },
  {
    slug: "sudoku",
    title: "sudoku",
    summary: "Ce projet consiste en la réalisation d’un jeu de Sudoku en langage C, jouable directement en ligne de commande. Il propose plusieurs niveaux de difficulté et une gestion complète du déroulement d’une partie. L’objectif était de renforcer les bases du langage C à travers un projet concret et structuré. Le projet met l’accent sur la logique, la gestion mémoire et la robustesse du programme. Il s’agit d’un excellent exercice pour comprendre les fondements de la programmation bas niveau.",
    mainImage: {
      src: " /assets/images/mockup-c.png",
      width: undefined,
      heigth: undefined,
      alt: undefined
    },
    time: "2 mois",
    technos: [
      {
        image: {
          src: " /assets/images/c-1.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "C"
      },
    ],
    type:"school"
  },
  {
    slug: "reseaux-et-web",
    title: "reseaux et web",
    summary: "Ce projet porte sur la mise en place complète d’un serveur web sécurisé. Il vise à comprendre le fonctionnement d’un serveur Apache et les enjeux liés à la sécurité réseau. L’accent a été mis sur la gestion des erreurs, la protection contre les attaques et l’administration du serveur. Le projet aborde à la fois les aspects techniques et les bonnes pratiques en production. Il permet de mieux comprendre les fondements de l’hébergement web",
    mainImage: {
      src: " /assets/images/foundation_highres.png",
      width: undefined,
      heigth: undefined,
      alt: undefined
    },
    verticalImage:{
      src:" /assets/images/foundation_highres_crop.png",
      width: undefined,
      heigth: undefined,
      alt: undefined
    },
    time: "2 semaine",
    technos: [
      {
        image: {
          src: " /assets/images/debian-svgrepo-com.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "debian"
      },
      {
        image: {
          src: " /assets/images/apache-svgrepo-com.svg",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "apache"
      },
      {
        image: {
          src: " /assets/images/virtualBox.png",
          width: 24,
          heigth: 24,
          alt: undefined
        },
        name: "virtualBox"
      },
    ],
    type:"school"
  },
]


export const cardProjects: CardProjectInfo[] = projects.map(
  (project, index) => ({
    ...project,
    rigth: index % 2 === 0,
    link: `/projects/${project.slug}`,
  })
);


export const presentationProject: PresentationProject[] = [
  {
    ...projects[0],
    description: `
      wiki-app est une application mobile qui propose chaque jour un nouvel article Wikipédia
      à découvrir, favorisant la curiosité et l’apprentissage continu.
      Les utilisateurs peuvent enregistrer leurs articles favoris et tester leurs connaissances
      grâce à une section de quiz intégrée.
      Le projet met l’accent sur l’engagement quotidien et la découverte de contenus variés,
      tout en proposant une interface claire et agréable.
      L’application repose sur la consommation d’API externes et une expérience mobile fluide.
      `,


    features: [
      "Découverte quotidienne d’un nouvel article Wikipédia",
      "Sauvegarde et accès rapide aux articles favoris",
      "Quiz interactifs pour tester et renforcer ses connaissances",
    ],


    learnings: [
      "Développement mobile avec React Native",
      "Utilisation de TypeScript pour renforcer la robustesse du code",
      "Consommation et gestion de données issues d’API externes",
      "Structuration d’une application mobile scalable",
      "Gestion des états et de la navigation dans une app mobile",
      "Affinement de l’expérience utilisateur sur mobile",
    ],


    challenges: [
      "Mettre en forme et normaliser des données issues de l’API Wikipédia",
      "Créer des animations UI fluides et cohérentes",
      "Maintenir un code lisible et propre malgré la complexité croissante",
      "Optimiser les performances sur différents appareils",
      "Concevoir une UX engageante sur un usage quotidien",
    ],



  },
  {
    ...projects[1],
    description: `
      subCut est un outil en ligne de commande conçu pour automatiser la transformation de vidéos
      classiques en formats verticaux adaptés aux plateformes comme TikTok ou Shorts.
      Le projet prend en charge des vidéos locales ainsi que des vidéos issues de YouTube,
      en s’appuyant sur une configuration flexible via des variables d’environnement.
      L’objectif était de proposer une solution rapide, reproductible et entièrement scriptable,
      sans interface graphique, pensée pour des workflows de création de contenu.
      subCut se concentre sur l’efficacité, la simplicité d’utilisation et l’automatisation
      de tâches habituellement longues et répétitives.
      `,


    features: [
      "Découpage automatique de vidéos en segments verticaux optimisés",
      "Génération et intégration automatique de sous-titres",
      "Ajout dynamique de texte pour des vidéos prêtes à publier",
    ],


    learnings: [
      "Compréhension et intégration de modèles d’IA vocale pour la génération de sous-titres",
      "Calibration fine de modèles IA via différents paramètres (langue, précision, timing)",
      "Découverte et implémentation de plusieurs formats de sous-titres (SRT, VTT, incrustés)",
      "Traitement vidéo avancé avec Python et outils multimédia",
      "Gestion de pipelines automatisés pour le traitement de médias",
      "Structuration d’un outil CLI configurable et réutilisable",
    ],


    challenges: [
      "Trouver le bon équilibre entre qualité des sous-titres et vitesse de génération",
      "Calibrer correctement les modèles d’IA pour éviter les erreurs de synchronisation",
      "Optimiser les performances sur des vidéos longues ou lourdes",
      "Gérer la diversité des sources vidéo et des formats d’entrée",
      "Maintenir une expérience CLI simple malgré une logique complexe en arrière-plan",
    ],

  },
  {
    ...projects[2],
    description: `
      transparent-bg est une application dotée d’une interface graphique permettant de supprimer
      automatiquement l’arrière-plan blanc d’images JPEG pour les convertir en PNG transparents.
      L’objectif était de proposer un outil simple, rapide et accessible, utilisable sans
      connaissances techniques particulières.
      Ce projet vise à rendre le traitement d’image automatisé facilement accessible,
      notamment pour des usages en e-commerce, design ou création de visuels marketing.
      L’accent a été mis sur la rapidité d’exécution et la clarté de l’expérience utilisateur.
      `,


    features: [
      "Suppression automatique de l’arrière-plan d’images",
      "Support d’images locales ou via URL",
      "Export en PNG transparent prêt à l’emploi",
    ],


    learnings: [
      "Traitement automatique d’images avec Python",
      "Détection et suppression d’arrière-plan de manière programmatique",
      "Manipulation de formats d’images (JPEG, PNG, transparence)",
      "Gestion de la qualité visuelle lors de la conversion",
      "Création d’une interface graphique simple pour des actions techniques complexes",
    ],


    challenges: [
      "Gérer des images avec des fonds imparfaits ou non uniformes",
      "Préserver la qualité des contours après suppression du fond",
      "Trouver un bon compromis entre précision et rapidité du traitement",
      "Assurer une expérience utilisateur fluide malgré un traitement potentiellement lourd",
    ],

  },
  {
    ...projects[3],
    description: `
      L’application repose sur deux parties distinctes : un front-office, dédié à la recherche et à la consultation des annonces, et un back-office, réservé à leur gestion.
      Les administrateurs peuvent créer, modifier, activer ou désactiver des annonces selon leur visibilité sur le site.
      Le front-office permet aux utilisateurs de parcourir les annonces via différents filtres et catégories.
      Un système de partage par QR code facilite la diffusion des annonces.
      Le projet s’inscrit dans une logique de plateforme évolutive et modulaire.
      `,


    features: [
      "Création et gestion de différents types d’annonces (culturelles, sportives, etc.)",

      "Activation et désactivation des annonces depuis le back-office",

      "Génération de QR codes pour le partage des annonces",

      "Système de likes pour les annonces",

      "Filtrage et tri des annonces côté front-office",
    ],


    learnings: [
      "Développement backend en PHP",

      "Conception et utilisation de bases de données relationnelles",

      "Structuration d’un projet web complet",

      "Utilisation de Docker pour l’environnement de développement",

      "Séparation claire des responsabilités entre front et back-office"
    ],


    challenges: [
      "Travailler efficacement en équipe",

      "Appliquer une méthodologie agile",

      "Maintenir une bonne communication entre les membres du projet",

      "Concevoir une architecture claire et maintenable",
    ],

  },
  {
    ...projects[4],
    description: `
      Le jeu permet de générer des grilles de Sudoku avec différents niveaux de difficulté.
      L’utilisateur interagit via le terminal pour remplir la grille et progresser dans la partie.
      Le programme gère les erreurs de saisie, les conditions de victoire et la fin de partie.
      Il est également possible de recommencer une partie à tout moment.
      Une documentation automatique a été générée pour faciliter la compréhension du code.
      `,


    features: [
      "Génération de grilles de Sudoku",

      "Plusieurs niveaux de difficulté",

      "Gestion des fins de partie (victoire / échec)",

      "Possibilité de recommencer une partie",

      "Interface en ligne de commande (CLI)",
    ],


    learnings: [
      "Programmation en C",

      "Manipulation des pointeurs",

      "Création de types personnalisés",

      "Organisation du code et modularité",

      "Génération de documentation automatique",
    ],


    challenges: [
      "Maîtriser les pointeurs en C",

      "Gérer les différents cas de victoire et d’erreur",

      "Optimiser la logique du jeu",

      "Assurer la stabilité du programme en toutes circonstances",
    ],

  },
  {
    ...projects[5],
    description: `
      Le serveur web a été configuré avec Apache, incluant la gestion des erreurs HTTP comme les pages 404.
      Des mécanismes de sécurité ont été mis en place, notamment Fail2Ban pour limiter les tentatives d’intrusion.
      La configuration permet de gérer plusieurs utilisateurs et des droits d’administration distincts.
      Les règles de redirection et de contrôle ont été définies via des fichiers .htaccess.
      L’objectif était de concilier sécurité, performance et stabilité.
      `,


    features: [
      "Gestion personnalisée des erreurs (404, redirections)",

      "Mise en place de Fail2Ban",

      "Support de plusieurs utilisateurs",

      "Configuration avancée via .htaccess",

      "Administration sécurisée du serveur",
    ],


    learnings: [
      "Configuration de Fail2Ban",

      "Gestion des fichiers .htaccess",

      "Compréhension des requêtes réseau",

      "Administration de serveur web",

      "Principes de sécurité informatique",
    ],


    challenges: [
      "Trouver l’équilibre entre sécurité et performance",

      "Configurer un serveur stable et fiable",

      "Comprendre les impacts des règles réseau",

      "Anticiper les failles de sécurité courantes",
    ],

  }
]

