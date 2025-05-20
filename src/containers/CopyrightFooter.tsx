import { useTranslation } from 'react-i18next';

const CopyrightFooter = () => {
  const { i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <div className="copyright">
      <p>Copyright © {currentYear} Younes Khoubaz. All rights reserved.</p>
      <p className="language_toggle" onClick={() => i18n.changeLanguage('en')}>
        English
      </p>
      <i className="language_toggle_divider">&nbsp;&bull;&nbsp;</i>
      <p className="language_toggle" onClick={() => i18n.changeLanguage('de')}>
        Deutsch
      </p>
      <i className="language_toggle_divider">&nbsp;&bull;&nbsp;</i>
      <p className="language_toggle" onClick={() => i18n.changeLanguage('fr')}>
        Français
      </p>
    </div>
  );
};

export default CopyrightFooter;
