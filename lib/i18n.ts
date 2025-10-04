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
      greeting: "Hello There!",
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
    history: {
      title: "History",
      work: "Work",
      education: "Education",
      certification: "Certification",
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
    history: {
      title: "Historique",
      work: "Travail",
      education: "Éducation",
      certification: "Certification",
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
    history: {
      title: "Geschichte",
      work: "Arbeit",
      education: "Bildung",
      certification: "Zertifizierung",
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}
