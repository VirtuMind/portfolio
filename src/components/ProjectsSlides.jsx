import i18n from '../../utils/i18n';

const courtProjectTranslations = () => {
  return [
    {
      src: './../../assets/Abschlussprojekt/1.jpeg',
      title: i18n.t('hello'),
      description: i18n.t('aboutParagraph'),
    },
    {
      src: './../../assets/Abschlussprojekt/2.jpeg',
      title: i18n.t('hello'),
      description: i18n.t('aboutParagraph'),
    },
  ];
};

// Initialize with the current translations
let courtProjectSlides = courtProjectTranslations();

// Listen for language changes and update translations
i18n.on('languageChanged', () => {
  courtProjectSlides = courtProjectTranslations();
});

export { courtProjectSlides };
