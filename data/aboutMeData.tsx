import { TimelineItemData } from "@/types/timeline";

import { 
    bf ,
    coding,
    travel,
    movie,
    sports,
    basketBall,
    pythonBanner,
    army,
    univ
} from "@/public/assets/images";
export const timelineItemData: TimelineItemData[] = [
  {
    title: "Développeur Full-Stack - Ministère des armées",
    period: "2024 – 2026",
    image: {
      src: army,
      alt: "ministère des armées"
    },
    summary: (
      <span className="my-4 mr-8 text-base md:text-lg text-white">
        Mon alternance en développement web m’a permis de travailler sur des projets concrets avec Symfony, aussi bien en backend qu’en frontend.
        J’y ai développé mes compétences techniques tout en apprenant le travail en équipe et la gestion de projets réels.
        Les échanges avec les clients ont également renforcé ma communication et ma compréhension des besoins métiers.
      </span>
    ),
    details: (
      <span className="my-4 mr-8 text-base md:text-lg text-white">
        Cette expérience m’a permis de développer des fonctionnalités complètes, de la conception à la mise en production, tout en respectant des contraintes réelles de délais et de qualité.
        J’ai pu approfondir mes compétences en backend, notamment sur la logique métier, les bases de données, les API et la structuration d’un projet robuste.
        En parallèle, j’ai également travaillé sur la partie frontend, ce qui m’a permis de mieux comprendre l’interaction entre le client et le serveur, ainsi que l’importance de l’expérience utilisateur.
        Cette alternance m’a appris à travailler en équipe, à collaborer avec d’autres développeurs, designers et chefs de projet, et à utiliser des outils de gestion de projet et de versioning.
        J’ai aussi été confronté aux échanges avec les clients, ce qui m’a permis de mieux comprendre leurs besoins, de proposer des solutions adaptées et de communiquer efficacement.
        Cette expérience a renforcé mon autonomie, ma rigueur et ma capacité à m’adapter à différents contextes techniques et humains.
      </span>
    )
  },{
    title: "BUT Informatique - Lannion",
    period: "2023 – 2026",
    image: {
      src: univ,
      alt: "BUT informatique"
    },
    summary: (
        <span className="my-4 mr-8 text-base md:text-lg text-white">
          Le BUT Informatique m’a permis de construire une base solide et polyvalente en informatique, en abordant le développement d’applications, l’optimisation des performances et l’administration de systèmes complexes. 
          Cette formation m’a appris à concevoir des solutions complètes, fiables et maintenables, tout en comprenant les enjeux techniques derrière chaque choix. 
          L’alternance a renforcé ces apprentissages en les confrontant à des problématiques réelles d’entreprise.
        </span>
    ),
    details: (
      <span className="my-4 mr-8 text-base md:text-lg text-white">
        J’y ai développé une approche structurée du développement logiciel, allant de l’architecture des applications à la qualité du code, en intégrant de bonnes pratiques de conception et de maintenance. 
        Les notions d’optimisation m’ont sensibilisé à la performance, à l’efficacité des algorithmes et à la gestion des ressources.

        La formation m’a également permis d’aborder l’administration de systèmes communicants, la virtualisation et la compréhension des environnements d’exécution modernes. La gestion des données et la communication autour de l’information ont renforcé ma capacité à travailler sur des projets cohérents et exploitables.

        Enfin, le travail en équipe et la conduite de projet ont occupé une place centrale, développant mon autonomie, mon sens de l’organisation et ma capacité à collaborer efficacement dans un contexte professionnel, notamment grâce à l’alternance qui a remplacé le stage classique.
      </span>
    )
  },
  {
    title: "Premier projet Informatique",
    period: "2021",
    image: {
      src: pythonBanner,
      alt: "Projet informatique"
    },
    summary: (
      <span className="my-4 mr-8 text-base md:text-lg text-white">
        Mon premier projet a été un autoclicker en Python.
        Il m’a permis de découvrir les threads, l’utilisation de librairies externes et la gestion des événements.
        C’est ce projet qui m’a réellement donné le goût du développement informatique.
      </span>
    ),
    details: (
      <span className="my-4 mr-8 text-base md:text-lg text-white">
        un projet simple en apparence mais extrêmement formateur.
        J’ai commencé par comprendre comment simuler des clics de souris à l’aide de bibliothèques externes comme pyautogui.
        Très vite, j’ai été confronté à un problème majeur : comment lancer et arrêter l’autoclicker sans bloquer le programme.
        C’est à ce moment-là que j’ai découvert le concept de threads, qui m’a permis d’exécuter plusieurs tâches en parallèle.
        J’ai appris à gérer le cycle de vie d’un thread, à le démarrer proprement et à l’arrêter sans provoquer de bugs.
        Ce projet m’a aussi fait comprendre l’importance des événements clavier pour contrôler l’application en temps réel.
        J’ai découvert la documentation officielle des librairies, appris à lire des exemples et à les adapter à mon besoin.
        L’autoclicker m’a également sensibilisé aux problèmes de performance et de stabilité.
        Ce projet a marqué le début de ma compréhension de la programmation « réelle », au-delà des simples scripts.
        Il m’a surtout donné l’envie de continuer à créer des outils utiles par moi-même.
      </span>
    )
  },
  
]