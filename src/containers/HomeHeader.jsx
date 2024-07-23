import { useEffect } from 'react';

const HomeHeader = () => {
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
          <li>
            <a href="#about">Über mich</a>
          </li>
          <li>
            <a href="#skills">Fähigkeiten</a>
          </li>
          <li>
            <a href="#projects">Projekte</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
          <div className="close-menu">
            <i className="fa fa-times"></i>
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default HomeHeader;
