export type Language = "en" | "fr" | "de";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      resume: "Resume",
      history: "History",
    },
    about: {
      greeting: "Hello there!",
      paragraph1:
        "I guess you're curious to know a bit about me if you've made it this far, thanks for checking out my site. I'm just someone who happens to be passionate about building software, especially the kind that keeps you thinking long after you've logged off. While I have a favorite tech stack, I care more about using the right tools to solve the right problems.",
      paragraph2:
        "I often spend more time than I'd like to admit trying to understand how things work, from low-level hardware to global systems (and a lot of non-tech stuff too). If you didn't find any of this boring, you're probably the kind of person I enjoy working or hanging out with.",
      findMe: "Find me on X:",
      email: "Or email me at:",
    },
    projects: {
      title: "Projects",
      viewCode: "View Code",
      findMore: "Find out other projects",
    },
    resume: {
      title: "Resume",
      download: "Download Resume",
      selectLanguage: "Select Language",
    },
    notFound: {
      title: "404 - There is nothing to show here",
      message: "Nice to meet you tho!",
    },
    history: {
      title: "History",
      events: [
        {
          id: 1,
          title: "University diploma of technology (DUT)",
          dateRange: "2020 - 2022",
          location: "High Institute of Technology - Kénitra, Morocco",
          description:
            "Majoring in computer engineering. Focus on computer architecture, data structures, cybersecurity, networks, and software design patterns.",
          type: "Education",
        },
        {
          id: 2,
          title: "Software Developer Intern",
          dateRange: "April 2022 - June 2022",
          location: "Court of appeal - Kénitra, Morocco",
          description:
            "Implemented a resource management system optimizing equipment distribution by tracking stock, introduced employee tracking between workplaces, and an archive functionality to enhance workflow efficiency.",
          type: "Internship",
        },
        {
          id: 3,
          title: "Bachelor's degree in mathematics and computer science",
          dateRange: "2023 - 2024",
          location: "Faculty of Sciences - University of Ibn Tofail",
          description:
            "Graduated with honors. Focus on advanced database principles, compiler fundamentals, system programming, networking and OOP.",
          type: "Education",
        },
        {
          id: 4,
          title: "Software Developer Intern",
          dateRange: "October 2023 - March 2024",
          location: "CITIC Dicastal - Kénitra (Free Zone), Morocco",
          description:
            "Created a business travel validation system aimed to reduce the time spent on the validation process, made handling requests much easier by eliminating paper usage, and enabled data tracking.",
          type: "Internship",
        },
        {
          id: 5,
          title: "Master's in Software Engineering for Cloud Computing",
          dateRange: "2024 - Present",
          location: "Faculty of Sciences - University of Ibn Tofail",
          description:
            "Currently pursuing a master's degree with a focus on machine learning, deep learning, cloud computing, web services, and DevOps practices.",
          type: "Education",
        },
      ],
    },
  },
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      resume: "CV",
      history: "Historique",
    },
    about: {
      greeting: "Bonjour!",
      paragraph1:
        "Je suppose que vous êtes curieux d'en savoir un peu plus sur moi si vous êtes arrivé jusqu'ici, merci d'avoir consulté mon site. Je suis simplement quelqu'un qui se passionne pour la création de logiciels, en particulier ceux qui vous font réfléchir longtemps après vous être déconnecté. Bien que j'aie une pile technologique préférée, je me soucie davantage d'utiliser les bons outils pour résoudre les bons problèmes.",
      paragraph2:
        "Je passe souvent plus de temps que je ne voudrais l'admettre à essayer de comprendre comment les choses fonctionnent, du matériel de bas niveau aux systèmes mondiaux (et beaucoup de choses non techniques aussi). Si vous n'avez trouvé rien de tout cela ennuyeux, vous êtes probablement le genre de personne avec qui j'aime travailler ou passer du temps.",
      findMe: "Retrouvez-moi sur X:",
      email: "Ou envoyez-moi un email à:",
    },
    projects: {
      title: "Projets",
      viewCode: "Voir le code",
      findMore: "Découvrir d'autres projets",
    },
    resume: {
      title: "CV",
      download: "Télécharger le CV",
      selectLanguage: "Sélectionner la langue",
    },
    notFound: {
      title: "404 - Il n'y a rien à afficher ici",
      message: "Ravi de vous rencontrer quand même!",
    },
    history: {
      title: "Historique",
      events: [
        {
          id: 1,
          title: "Diplôme universitaire de technologie (DUT)",
          dateRange: "2020 - 2022",
          location: "Ecole Supérieure de Technologie - Kénitra, Maroc",
          description:
            "Spécialisation en génie informatique. Concentration sur l'architecture des ordinateurs, les structures de données, la cybersécurité, le réseau informatique et les modèles de conception de logiciels.",
          type: "Education",
        },
        {
          id: 2,
          title: "Stagiaire développeur logiciel",
          dateRange: "Avril 2022 - Juin 2022",
          location: "Cour d'appel - Kénitra, Maroc",
          description:
            "Mise en œuvre d'un système de gestion des ressources humaines et matérielles optimisant la distribution des équipements par le suivi des stocks, introduction du suivi des employés entre les lieux de travail et d'une fonctionnalité d'archivage pour améliorer l'efficacité du flux de travail.",
          type: "Stage",
        },
        {
          id: 3,
          title: "Licence en mathématiques et informatique",
          dateRange: "2023 - 2024",
          location: "Faculté des Sciences - Université Ibn Tofail",
          description:
            "Diplômé avec mention. Concentration sur les principes avancés des bases de données, les fondamentaux des compilateurs, la programmation système, les réseaux et la POO.",
          type: "Education",
        },
        {
          id: 4,
          title: "Stagiaire développeur logiciel",
          dateRange: "Octobre 2023 - Mars 2024",
          location: "CITIC Dicastal - Kénitra (Zone Franche), Maroc",
          description:
            "Création d'un système de validation des voyages d'affaires visant à réduire le temps consacré au processus de validation, facilitation du traitement des demandes en éliminant l'utilisation du papier et activation du suivi des données.",
          type: "Stage",
        },
        {
          id: 5,
          title: "Master en génie logiciel pour le cloud computing",
          dateRange: "2024 - Présent",
          location: "Faculté des Sciences - Université Ibn Tofail",
          description:
            "Actuellement en master avec une concentration sur le machine learning, le deep learning, le cloud computing, web services et les pratiques DevOps.",
          type: "Education",
        },
      ],
    },
  },
  de: {
    nav: {
      about: "Über",
      projects: "Projekte",
      resume: "Lebenslauf",
      history: "Geschichte",
    },
    about: {
      greeting: "Hallo!",
      paragraph1:
        "Ich nehme an, Sie sind neugierig, ein bisschen mehr über mich zu erfahren, wenn Sie es so weit geschafft haben. Danke, dass Sie meine Seite besucht haben. Ich bin einfach jemand, der leidenschaftlich gerne Software entwickelt, besonders die Art, die Sie noch lange nach dem Ausloggen zum Nachdenken bringt. Obwohl ich einen bevorzugten Tech-Stack habe, ist es mir wichtiger, die richtigen Werkzeuge zu verwenden, um die richtigen Probleme zu lösen.",
      paragraph2:
        "Ich verbringe oft mehr Zeit als ich zugeben möchte damit, zu verstehen, wie Dinge funktionieren, von Low-Level-Hardware bis zu globalen Systemen (und vielen nicht-technischen Dingen auch). Wenn Sie nichts davon langweilig fanden, sind Sie wahrscheinlich die Art von Person, mit der ich gerne arbeite oder Zeit verbringe.",
      findMe: "Finden Sie mich auf X:",
      email: "Oder schreiben Sie mir eine E-Mail an:",
    },
    projects: {
      title: "Projekte",
      viewCode: "Code ansehen",
      findMore: "Weitere Projekte entdecken",
    },
    resume: {
      title: "Lebenslauf",
      download: "Lebenslauf herunterladen",
      selectLanguage: "Sprache auswählen",
    },
    notFound: {
      title: "404 - Hier gibt es nichts zu sehen",
      message: "Schön, dich trotzdem kennenzulernen!",
    },
    history: {
      title: "Geschichte",
      events: [
        {
          id: 1,
          title: "Universitätsdiplom für Technologie (DUT)",
          dateRange: "2020 - 2022",
          location: "Hochinstitut für Technologie - Kénitra, Marokko",
          description:
            "Hauptfach Informatik. Schwerpunkt auf Computerarchitektur, Datenstrukturen, Cybersicherheit, Netzwerke und Softwaredesignmuster.",
          type: "Bildung",
        },
        {
          id: 2,
          title: "Praktikant Softwareentwickler",
          dateRange: "April 2022 - Juni 2022",
          location: "Berufungsgericht - Kénitra, Marokko",
          description:
            "Implementierung eines Ressourcenmanagementsystems zur Optimierung der Geräteverteilung durch Bestandsverfolgung, Einführung der Mitarbeiterverfolgung zwischen Arbeitsplätzen und einer Archivfunktion zur Verbesserung der Arbeitsablaufeffizienz.",
          type: "Praktikum",
        },
        {
          id: 3,
          title: "Bachelor-Abschluss in Mathematik und Informatik",
          dateRange: "2023 - 2024",
          location: "Fakultät für Wissenschaften - Universität Ibn Tofail",
          description:
            "Abschluss mit Auszeichnung. Schwerpunkt auf fortgeschrittene Prinzipien von Datenbanken, Compiler-Grundlagen, Systemprogrammierung, Netzwerken und OOP.",
          type: "Bildung",
        },
        {
          id: 4,
          title: "Praktikant Softwareentwickler",
          dateRange: "Oktober 2023 - März 2024",
          location: "CITIC Dicastal - Kénitra (Freizone), Marokko",
          description:
            "Entwicklung eines Geschäftsreise-Validierungssystems zur Reduzierung der für den Validierungsprozess aufgewendeten Zeit, Erleichterung der Antragsbearbeitung durch Eliminierung der Papiernutzung und Ermöglichung der Datenverfolgung.",
          type: "Praktikum",
        },
        {
          id: 5,
          title: "Master in Software Engineering für Cloud Computing",
          dateRange: "2024 - Gegenwart",
          location: "Fakultät für Wissenschaften - Universität Ibn Tofail",
          description:
            "Derzeit Master-Studium mit Schwerpunkt auf maschinellem Lernen, Deep Learning, Cloud Computing, Webdiensten und DevOps-Praktiken.",
          type: "Bildung",
        },
      ],
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}
