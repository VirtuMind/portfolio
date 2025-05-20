import { useTranslation } from 'react-i18next';
import htmlIcon from '/assets/skills-icons/html.png';
import reduxIcon from '/assets/skills-icons/redux.svg';
import reduxSagaIcon from '/assets/skills-icons/redux-saga.svg';
import entityFrameworkIcon from '/assets/skills-icons/EF.png';
import phpIcon from '/assets/skills-icons/php.png';
import umlIcon from '/assets/skills-icons/uml2.svg';
import cssIcon from '/assets/skills-icons/css.png';
import laravelIcon from '/assets/skills-icons/laravel.png';
import javaIcon from '/assets/skills-icons/java.png';
import gitIcon from '/assets/skills-icons/git.png';
import tsqlIcon from '/assets/skills-icons/tsql.svg';
import plsqlIcon from '/assets/skills-icons/plsql.svg';
import csharpIcon from '/assets/skills-icons/csharp.png';
import jsIcon from '/assets/skills-icons/js.svg';
import reactIcon from '/assets/skills-icons/react.svg';
import dotnetIcon from '/assets/skills-icons/dotnet.png';
import azureIcon from '/assets/skills-icons/azure.png';
import jwtIcon from '/assets/skills-icons/jwt2.svg';
import githubIcon from '/assets/icons/github.png';
import wavingHand from '/assets/icons/waving-hand.png';
import resumeIcon from '/assets/icons/resume.png';
import linkedinIcon from '/assets/icons/linkedin.png';
import emailIcon from '/assets/icons/email.png';
import linkedinSquaredIcon from '/assets/icons/linkedin-squared.png';
import phoneIcon from '/assets/icons/phone-call.png';
import foreignIcon from '/assets/icons/foreign.png';
import codingIcon from '/assets/icons/coding.png';
import arrowIcon from '/assets/icons/arrow.png';
import portrait from '/assets/portrait.png';
import project1Cover from '/assets/court-management-system/showcase.png';
import project2Cover from '/assets/graduation-theses-platform/showcase.png';
import project3Cover from '/assets/coursify/showcase.png';
import project4Cover from '/assets/otas/showcase.png';
import cv_de from '/assets/resumes/Lebenslauf_Younes_Khoubaz.pdf';
import cv_en from '/assets/resumes/Resume_Younes_Khoubaz.pdf';
import cv_fr from '/assets/resumes/CV_Younes_Khoubaz.pdf';
import HomeHeader from '../containers/HomeHeader';
import CopyrightFooter from '../containers/CopyrightFooter';
import { Slide } from 'react-slideshow-image';
import SkillCard from '../components/SkillCard';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
import {
  courtProjectSlides,
  graduationThesesSlides,
  coursifySlides,
  otasSlides,
} from '../components/ProjectsSlides';
import { Captions, Zoom, Fullscreen } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import Chip from '../components/Chip';

interface SlideDetails {
  src: string;
  title: string;
  description?: string;
}

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<SlideDetails[]>([]);

  const handleDownloadCV = () => {
    switch (i18n.language) {
      case 'de':
        window.open(cv_de);
        break;
      case 'en':
        window.open(cv_en);
        break;
      case 'fr':
        window.open(cv_fr);
        break;
      default:
        window.open(cv_en);
    }
  };

  const properties = {
    prevArrow: (
      <button className="nav_btns">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.065 12.626c.254 1.211 1.608 2.082 4.315 3.822c2.945 1.893 4.417 2.84 5.61 2.475c.403-.124.775-.34 1.088-.635C20 17.418 20 15.612 20 12s0-5.418-.922-6.288a2.8 2.8 0 0 0-1.088-.635c-1.193-.365-2.665.582-5.61 2.475c-2.707 1.74-4.06 2.61-4.315 3.822c-.087.412-.087.84 0 1.252M4 4v16"
            color="black"
          ></path>
        </svg>
      </button>
    ),
    nextArrow: (
      <button className="nav_btns">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.935 12.626c-.254 1.211-1.608 2.082-4.315 3.822c-2.945 1.893-4.417 2.84-5.61 2.475a2.8 2.8 0 0 1-1.088-.635C4 17.418 4 15.612 4 12s0-5.418.922-6.288a2.8 2.8 0 0 1 1.089-.635c1.192-.365 2.664.582 5.609 2.475c2.707 1.74 4.06 2.61 4.315 3.822c.087.412.087.84 0 1.252M20 5v14"
            color="black"
          ></path>
        </svg>
      </button>
    ),
    autoplay: false,
  };

  return (
    <>
      <HomeHeader />
      <section id="profile">
        <div className="portrait-container">
          <img src={portrait} alt="Younes Khoubaz profile picture" />
        </div>
        <div className="text-container">
          <p className="normal-text">
            {t('hello')}&nbsp;
            <img src={wavingHand} alt="Wave emote" id="wave" />
            &nbsp;, {t('iam')}
          </p>
          <h1 className="header">Younes Khoubaz</h1>
          <h2 className="header2">{t('title')}</h2>
          <div className="btn-container">
            <button className="btn btn-cv" onClick={() => handleDownloadCV()}>
              <div>
                <img src={resumeIcon} alt="Download icon" id="download-icon" />
              </div>
              {t('downloadCV')}
            </button>
            <button
              className="btn btn-contact"
              onClick={() => (window.location.href = '#contact')}
            >
              {t('contactInfo')}
            </button>
          </div>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/younes-khoubaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn profile"
                className="social-icons"
              />
            </a>
            <a
              href="https://github.com/VirtuMind"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="Github profile"
                className="social-icons"
              />
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <h1 className="header">{t('aboutMe')}</h1>
        <div className="about-details-container">
          <div className="text-container">
            <p>{t('aboutParagraph1')}</p>
            <br />
            <p>{t('aboutParagraph2')}</p>
          </div>
        </div>
      </section>
      <section id="skills">
        <h1 className="header">{t('skills')}</h1>
        <div className="skills-section-container">
          <div className="skill-sets-container">
            <SkillCard name="Javascript" img={jsIcon} />
            <SkillCard name="C#" img={csharpIcon} />
            <SkillCard name="ReactJS" img={reactIcon} />
            <SkillCard name="Redux" img={reduxIcon} />
            <SkillCard name="Redux Saga" img={reduxSagaIcon} />
            <SkillCard name=".NET 8" img={dotnetIcon} />
            <SkillCard name="Entity Framework" img={entityFrameworkIcon} />
            <SkillCard name="Java" img={javaIcon} />
            <SkillCard name="HTML" img={htmlIcon} />
            <SkillCard name="CSS" img={cssIcon} />
            <SkillCard name="Azure Cloud" img={azureIcon} />
            <SkillCard name="JWT" img={jwtIcon} />
            <SkillCard name="Git" img={gitIcon} />
            <SkillCard name="T-SQL" img={tsqlIcon} />
            <SkillCard name="PL/SQL" img={plsqlIcon} />
            <SkillCard name="UML" img={umlIcon} />
          </div>
        </div>
      </section>
      <section id="projects">
        <h1 className="header">{t('completedProjects')}</h1>
        <Slide {...properties}>
          {/* Coursify */}
          <div className="project-widget-container">
            <div className="project-widget">
              <div className="project-thumbnail-title-container">
                <div
                  className="project-thumbnail-container"
                  onClick={() => {
                    setCurrentProject(coursifySlides);
                    setLightboxOpen(true);
                  }}
                >
                  <img src={project3Cover} />
                  <div className="project-overlay-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3em"
                      height="3em"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#EBEBEB"
                        d="M5 3h14v11h-2v2h-2v2H1V7h2V5h2zm13 10V4H6v9zm-3-4c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m1 6v-1H5V6H4v9zM7 6l10 6H7zm7 11v-1H3V8H2v9z"
                      />
                    </svg>
                  </div>
                </div>
                <p>{t('coursifyProject.title')}</p>
              </div>

              <div className="project-details">
                <div className="chips-container">
                  <Chip text="ReactJS" color="#58C4DC" />
                  <Chip text="Redux" color="#764ABC" />
                  <Chip text="Redux Saga" color="#89d96d" />
                  <Chip text="MUI Joy" color="#0069D2" />
                  <Chip text="Styled Components" color="#BF4F74" />
                  <Chip text="C#" color="#9F73D9" />
                  <Chip text=".NET 8" color="#613494" />
                  <Chip text="T-SQL" color="#EB1A28" />
                  <Chip text="JWT" color="#000000" />
                </div>
                <p>{t('coursifyProject.description')}</p>
                <div className="links-container">
                  <div className="link-container">
                    <a
                      href="https://github.com/VirtuMind/coursify-frontend"
                      className="underline"
                      target="_blank"
                    >
                      <img
                        src={codingIcon}
                        alt="Coding Icon"
                        className="icon"
                      />
                      &nbsp;{t('frontend')}
                    </a>
                  </div>
                  <div className="link-container">
                    <a
                      href="https://github.com/VirtuMind/coursify-backend"
                      className="underline"
                      target="_blank"
                    >
                      <img
                        src={codingIcon}
                        alt="Coding Icon"
                        className="icon"
                      />
                      &nbsp;{t('backend')}
                    </a>
                  </div>
                  <div
                    className="link-container"
                    onClick={() => {
                      setCurrentProject(coursifySlides);
                      setLightboxOpen(true);
                    }}
                  >
                    <a className="underline">
                      <img src={arrowIcon} alt="Arrow Icon" className="icon" />
                      &nbsp;{t('moreDetails')}
                    </a>
                  </div>
                  <div className="waving-link-container">
                    <a
                      className="waving-link underline"
                      href="https://coursify.azurewebsites.net/"
                      target="_blank"
                    >
                      <img
                        src={foreignIcon}
                        alt="External link Icon"
                        className="icon"
                      />
                      &nbsp;{t('liveDemo')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* OTAS */}
          <div className="project-widget-container">
            <div className="project-widget">
              <div className="project-thumbnail-title-container">
                <div
                  className="project-thumbnail-container"
                  onClick={() => {
                    setCurrentProject(otasSlides);
                    setLightboxOpen(true);
                  }}
                >
                  <img src={project4Cover} />
                  <div className="project-overlay-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3em"
                      height="3em"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#EBEBEB"
                        d="M5 3h14v11h-2v2h-2v2H1V7h2V5h2zm13 10V4H6v9zm-3-4c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m1 6v-1H5V6H4v9zM7 6l10 6H7zm7 11v-1H3V8H2v9z"
                      />
                    </svg>
                  </div>
                </div>
                <p>{t('otasProject.title')}</p>
              </div>

              <div className="project-details">
                <div className="chips-container">
                  <Chip text="ReactJS" color="#58C4DC" />
                  <Chip text="Redux" color="#764ABC" />
                  <Chip text="Redux Saga" color="#89d96d" />
                  <Chip text="MUI" color="#0069D2" />
                  <Chip text=".NET 6" color="#613494" />
                  <Chip text="C#" color="#9F73D9" />
                  <Chip text="T-SQL" color="#EB1A28" />
                  <Chip text="JWT" color="#000000" />
                </div>
                <p>{t('otasProject.description')}</p>
                <div className="links-container">
                  <div className="link-container">
                    <a
                      href="https://github.com/VirtuMind/otas-frontend"
                      className="underline"
                      target="_blank"
                    >
                      <img
                        src={codingIcon}
                        alt="Coding Icon"
                        className="icon"
                      />
                      &nbsp;{t('frontend')}
                    </a>
                  </div>
                  <div className="link-container">
                    <a
                      href="https://github.com/VirtuMind/otas-backend"
                      className="underline"
                      target="_blank"
                    >
                      <img
                        src={codingIcon}
                        alt="Coding Icon"
                        className="icon"
                      />
                      &nbsp;{t('backend')}
                    </a>
                  </div>

                  <div className="waving-link-container">
                    <a
                      className="waving-link underline"
                      onClick={() => {
                        setCurrentProject(otasSlides);
                        setLightboxOpen(true);
                      }}
                    >
                      <img src={arrowIcon} alt="Arrow Icon" className="icon" />
                      &nbsp;{t('moreDetails')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Court Management System */}
          <div className="project-widget-container">
            <div className="project-widget">
              <div className="project-thumbnail-title-container">
                <div
                  className="project-thumbnail-container"
                  onClick={() => {
                    setCurrentProject(courtProjectSlides);
                    setLightboxOpen(true);
                  }}
                >
                  <img src={project1Cover} />
                  <div className="project-overlay-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3em"
                      height="3em"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#EBEBEB"
                        d="M5 3h14v11h-2v2h-2v2H1V7h2V5h2zm13 10V4H6v9zm-3-4c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m1 6v-1H5V6H4v9zM7 6l10 6H7zm7 11v-1H3V8H2v9z"
                      />
                    </svg>
                  </div>
                </div>
                <p>{t('courtProject.title')}</p>
              </div>

              <div className="project-details">
                <div className="chips-container">
                  <Chip text="Laravel" color="#FF2D20" />
                  <Chip text="PHP" color="#7A86B8" />
                  <Chip text="Bootstrap" color="#6E2CF3" />
                  <Chip text="jQuerry" color="#00758F" />
                  <Chip text="MySQL" color="#00758F" />
                </div>
                <p>
                  {t('courtProject.description1')}&nbsp;
                  <a
                    href="http://www.cakenitra.ma/"
                    target="_blank"
                    style={{ color: '#e69600', textDecoration: 'none' }}
                  >
                    {t('courtProject.description2')}
                  </a>
                  {t('courtProject.description3')}
                </p>
                <div className="links-container">
                  <div className="link-container">
                    <a
                      href="https://github.com/VirtuMind/court-management-system"
                      className="underline"
                      target="_blank"
                    >
                      <img
                        src={codingIcon}
                        alt="Coding Icon"
                        className="icon"
                      />
                      &nbsp;{t('sourceCode')}
                    </a>
                  </div>
                  <div
                    className="waving-link-container"
                    onClick={() => {
                      setCurrentProject(courtProjectSlides);
                      setLightboxOpen(true);
                    }}
                  >
                    <a className="waving-link underline">
                      <img src={arrowIcon} alt="Coding Icon" className="icon" />
                      &nbsp;{t('moreDetails')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Graduation Theses Platform  */}
          <div className="project-widget-container">
            <div className="project-widget">
              <div className="project-thumbnail-title-container">
                <div
                  className="project-thumbnail-container"
                  onClick={() => {
                    setCurrentProject(graduationThesesSlides);
                    setLightboxOpen(true);
                  }}
                >
                  <img src={project2Cover} />
                  <div className="project-overlay-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3em"
                      height="3em"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#EBEBEB"
                        d="M5 3h14v11h-2v2h-2v2H1V7h2V5h2zm13 10V4H6v9zm-3-4c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m1 6v-1H5V6H4v9zM7 6l10 6H7zm7 11v-1H3V8H2v9z"
                      />
                    </svg>
                  </div>
                </div>
                <p>{t('thesesPlatformProject.title')}</p>
              </div>

              <div className="project-details">
                <div className="chips-container">
                  <Chip text="Laravel" color="#FF2D20" />
                  <Chip text="PHP" color="#7A86B8" />
                  <Chip text="jQuerry" color="#00758F" />
                  <Chip text="Bootstrap" color="#6E2CF3" />
                  <Chip text="MySQL" color="#00758F" />
                </div>
                <p>
                  {t('thesesPlatformProject.description1')}
                  <a
                    href="https://est.uit.ac.ma/"
                    target="_blank"
                    style={{ color: '#e69600', textDecoration: 'none' }}
                  >
                    &nbsp;{t('thesesPlatformProject.description2')}&nbsp;
                  </a>
                  {t('thesesPlatformProject.description3')}
                </p>
                <div className="links-container">
                  <div className="link-container">
                    <a
                      href="https://github.com/VirtuMind/graduation-theses-platform"
                      className="underline"
                      target="_blank"
                    >
                      <img
                        src={codingIcon}
                        alt="Coding Icon"
                        className="icon"
                      />
                      &nbsp;{t('sourceCode')}
                    </a>
                  </div>
                  <div
                    className="waving-link-container"
                    onClick={() => {
                      setCurrentProject(graduationThesesSlides);
                      setLightboxOpen(true);
                    }}
                  >
                    <a className="waving-link underline">
                      <img src={arrowIcon} alt="Arrow Icon" className="icon" />
                      &nbsp;{t('moreDetails')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
      <section id="contact">
        <div className="contact-container">
          <h1 className="header">{t('myContactInfo')}</h1>
          <h3 className="header2">{t('hearingFromYou')}</h3>
          <div className="contact-info-container">
            <div className="email-container">
              <img src={emailIcon} alt="Email Icon" className="icon" />
              <a href="mailto:younes.khoubaz@gmail.com">
                <h3 className="underline-animation">
                  younes.khoubaz@gmail.com
                </h3>
              </a>
            </div>
            <div className="linkedin-container">
              <img
                src={linkedinSquaredIcon}
                alt="LinkedIn icon"
                className="icon"
              />
              <a
                href="https://www.linkedin.com/in/younes-khoubaz/"
                target="_blank"
              >
                <h3 className="underline-animation">linkedIn</h3>
              </a>
            </div>
            <div className="phone-container">
              <img src={phoneIcon} alt="Phone icon" className="icon" />
              <a href="tel:+212687749447">
                <h3 className="underline-animation">+212 687749447</h3>
              </a>
            </div>
          </div>
        </div>
        <CopyrightFooter />
      </section>
      <Lightbox
        plugins={[Captions, Zoom, Fullscreen]}
        captions={{ showToggle: true }}
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={currentProject}
      />
    </>
  );
};

export default HomePage;
