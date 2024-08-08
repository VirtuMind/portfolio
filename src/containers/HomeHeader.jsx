import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomeHeader = () => {
  const [languageVisibile, setLanguageVisible] = useState(false);
  const [t, i18n] = useTranslation();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('#language-toggle') === null) {
        setLanguageVisible(false);
      }
    };

    if (languageVisibile) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [languageVisibile]);

  useEffect(() => {
    const navLinks = document.querySelector('.nav-links');
    const closeMenu = document.querySelector('.close-menu');
    const openMenu = document.querySelector('.open-menu');
    const menuItems = document.querySelectorAll('nav .nav-links li a');
    const show = () => {
      navLinks.style.display = 'flex';
      navLinks.style.top = '0';
    };

    const close = () => {
      navLinks.style.top = '-1000%';
    };
    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    const handleScrollIndexPage = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    document.addEventListener('scroll', handleScrollIndexPage);

    // close menu when you click on a menu item
    menuItems.forEach((item) => {
      item.addEventListener('click', close);
    });

    return () => {
      openMenu.removeEventListener('click', show);
      closeMenu.removeEventListener('click', close);
      menuItems.forEach((item) => {
        item.removeEventListener('click', close);
      });
      document.removeEventListener('scroll', handleScrollIndexPage);
    };
  }, []);

  return (
    <nav>
      <div className="logo">
        <a href="#">Younes Khoubaz</a>
      </div>
      <div className="open-menu">
        <i className="fa fa-bars"></i>
      </div>
      <div>
        <ul className="nav-links">
          <li
            id="language-toggle"
            onClick={() => setLanguageVisible(!languageVisibile)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m7.41 9l2.24 2.24l-.83 2L6 10.4l-3.3 3.3l-1.4-1.42L4.58 9l-.88-.88c-.53-.53-1-1.3-1.3-2.12h2.2c.15.28.33.53.51.7l.89.9l.88-.88C7.48 6.1 8 4.84 8 4H0V2h5V0h2v2h5v2h-2c0 1.37-.74 3.15-1.7 4.12L7.4 9zm3.84 8L10 20H8l5-12h2l5 12h-2l-1.25-3zm.83-2h3.84L14 10.4z"
              />
            </svg>
          </li>
          <li>
            <a href="#about">{t('aboutMe')}</a>
          </li>
          <li>
            <a href="#skills">{t('skills')}</a>
          </li>
          <li>
            <a href="#projects">{t('projects')}</a>
          </li>
          <li>
            <a href="#contact">{t('contact')}</a>
          </li>
          <div className="close-menu">
            <i className="fa fa-times"></i>
          </div>
        </ul>
      </div>
      <div
        className="language-list animate__animated animate__faster animate__fadeInDown"
        style={{
          display: languageVisibile ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p onClick={() => i18n.changeLanguage('en')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 64 64"
          >
            <path fill="#ed4c5c" d="M48 6.6C43.3 3.7 37.9 2 32 2v4.6z"></path>
            <path
              fill="#fff"
              d="M32 11.2h21.6C51.9 9.5 50 7.9 48 6.6H32z"
            ></path>
            <path
              fill="#ed4c5c"
              d="M32 15.8h25.3c-1.1-1.7-2.3-3.2-3.6-4.6H32z"
            ></path>
            <path
              fill="#fff"
              d="M32 20.4h27.7c-.7-1.6-1.5-3.2-2.4-4.6H32z"
            ></path>
            <path
              fill="#ed4c5c"
              d="M32 25h29.2c-.4-1.6-.9-3.1-1.5-4.6H32z"
            ></path>
            <path
              fill="#fff"
              d="M32 29.7h29.9c-.1-1.6-.4-3.1-.7-4.6H32z"
            ></path>
            <path
              fill="#ed4c5c"
              d="M61.9 29.7H32V32H2c0 .8 0 1.5.1 2.3h59.8c.1-.8.1-1.5.1-2.3c0-.8 0-1.6-.1-2.3"
            ></path>
            <path
              fill="#fff"
              d="M2.8 38.9h58.4c.4-1.5.6-3 .7-4.6H2.1c.1 1.5.3 3.1.7 4.6"
            ></path>
            <path
              fill="#ed4c5c"
              d="M4.3 43.5h55.4c.6-1.5 1.1-3 1.5-4.6H2.8c.4 1.6.9 3.1 1.5 4.6"
            ></path>
            <path
              fill="#fff"
              d="M6.7 48.1h50.6c.9-1.5 1.7-3 2.4-4.6H4.3c.7 1.6 1.5 3.1 2.4 4.6"
            ></path>
            <path
              fill="#ed4c5c"
              d="M10.3 52.7h43.4c1.3-1.4 2.6-3 3.6-4.6H6.7c1 1.7 2.3 3.2 3.6 4.6"
            ></path>
            <path
              fill="#fff"
              d="M15.9 57.3h32.2c2.1-1.3 3.9-2.9 5.6-4.6H10.3c1.7 1.8 3.6 3.3 5.6 4.6"
            ></path>
            <path
              fill="#ed4c5c"
              d="M32 62c5.9 0 11.4-1.7 16.1-4.7H15.9c4.7 3 10.2 4.7 16.1 4.7"
            ></path>
            <path
              fill="#428bc1"
              d="M16 6.6c-2.1 1.3-4 2.9-5.7 4.6c-1.4 1.4-2.6 3-3.6 4.6c-.9 1.5-1.8 3-2.4 4.6c-.6 1.5-1.1 3-1.5 4.6c-.4 1.5-.6 3-.7 4.6c-.1.8-.1 1.6-.1 2.4h30V2c-5.9 0-11.3 1.7-16 4.6"
            ></path>
            <path
              fill="#fff"
              d="m25 3l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm20 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H15l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm12 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm2.8-14l1.2-.9l1.2.9l-.5-1.5l1.2-1h-1.5L13 9l-.5 1.5h-1.4l1.2.9zm-8 12l1.2-.9l1.2.9l-.5-1.5l1.2-1H5.5L5 21l-.5 1.5h-1c0 .1-.1.2-.1.3l.8.6z"
            ></path>
          </svg>
          &nbsp;English
        </p>
        <p onClick={() => i18n.changeLanguage('de')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 64 64"
          >
            <path
              fill="#3e4347"
              d="M31.9 2C18.8 2 7.7 10.4 3.6 22h56.6C56.1 10.4 45 2 31.9 2"
            ></path>
            <path
              fill="#ffe62e"
              d="M31.9 62c13.1 0 24.2-8.3 28.3-20H3.6c4.1 11.7 15.2 20 28.3 20"
            ></path>
            <path
              fill="#ed4c5c"
              d="M3.6 22c-1.1 3.1-1.7 6.5-1.7 10s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10z"
            ></path>
          </svg>
          &nbsp;Deutsch
        </p>
        <p onClick={() => i18n.changeLanguage('fr')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 64 64"
          >
            <path
              fill="#428bc1"
              d="M1.9 32c0 13.1 8.4 24.2 20 28.3V3.7C10.3 7.8 1.9 18.9 1.9 32"
            ></path>
            <path
              fill="#ed4c5c"
              d="M61.9 32c0-13.1-8.3-24.2-20-28.3v56.6c11.7-4.1 20-15.2 20-28.3"
            ></path>
            <path
              fill="#fff"
              d="M21.9 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.8 2.6 35.5 2 31.9 2s-6.9.6-10 1.7z"
            ></path>
          </svg>
          &nbsp;Français
        </p>
      </div>
    </nav>
  );
};
export default HomeHeader;
