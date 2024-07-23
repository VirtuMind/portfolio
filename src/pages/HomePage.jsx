import { useTranslation } from 'react-i18next';
import checkCircle from './../../assets/check-circle.png';
import htmlIcon from './../../assets/skills-icons/html.png';
import phpIcon from './../../assets/skills-icons/php.png';
import databaseIcon from './../../assets/skills-icons/database.png';
import umlIcon from './../../assets/skills-icons/uml2.png';
import cssIcon from './../../assets/skills-icons/css.png';
import laravelIcon from './../../assets/skills-icons/laravel.png';
import javaIcon from './../../assets/skills-icons/java.png';
import gitIcon from './../../assets/skills-icons/git.png';
import jsIcon from './../../assets/skills-icons/js.png';
import bootstrapIcon from './../../assets/skills-icons/bootstrap.png';
import cppIcon from './../../assets/skills-icons/c++.png';
import githubIcon from './../../assets/github.png';
import portrait from './../../assets/portrait.png';
import wavingHand from './../../assets/waving-hand.png';
import resumeIcon from './../../assets/resume.png';
import linkedinIcon from './../../assets/linkedin.png';
import resumePDF from './../../assets/Lebenslauf_Younes_Khoubaz.pdf';
import experienceIcon from './../../assets/experience.png';
import educationIcon from './../../assets/education.png';
import emailIcon from './../../assets/email.png';
import linkedinSquaredIcon from './../../assets/linkedin-squared.png';
import phoneIcon from './../../assets/phone-call.png';
import project1Cover from './../../assets/project1.png';
import project2Cover from './../../assets/project2.png';
import project3Cover from './../../assets/project3.png';
import foreignIcon from './../../assets/foreign.png';
import codingIcon from './../../assets/coding.png';
import arrowIcon from './../../assets/arrow.png';
import HomeHeader from '../containers/HomeHeader';
import CopyrightFooter from '../containers/CopyrightFooter';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <HomeHeader />
      <section id="profile">
        <div className="portrait-container">
          <img src={portrait} alt="Younes Khoubaz profile picture" />
        </div>
        <div className="text-container">
          <p className="normal-text">
            Hallo&nbsp;
            <img src={wavingHand} alt="Wave emote" id="wave" />
            &nbsp;, ich bin
          </p>
          <h1 className="header">Younes Khoubaz</h1>
          <h2 className="header2">Fachinformatiker</h2>
          <div className="btn-container">
            <button
              className="btn btn-cv"
              onClick={() => window.open(resumePDF)}
            >
              <div>
                <img src={resumeIcon} alt="Download icon" id="download-icon" />
              </div>
              Lebenslauf herunterladen
            </button>
            <button
              className="btn btn-contact"
              onClick={() => (window.location.href = '#contact')}
            >
              Kontaktinformationen
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
              href="https://github.com/younes-47"
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
        <h1 className="header">Über mich</h1>
        <div className="about-details-container">
          <div className="exp-edu-containers">
            <div className="exp-edu-container">
              {/* experience container  */}
              <img
                src={experienceIcon}
                alt="Experience Icon"
                className="icon"
              />
              <h3>Erfahrung</h3>
              <p>4 Monate Praktikum</p>
              <p>Anwendungsentwecklung</p>
            </div>
            <div className="exp-edu-container">
              {/* education container */}
              <img src={educationIcon} alt="Education Icon" className="icon" />
              <h3>Ausbildung</h3>
              <p>Hochschulabschluss der Technologie</p>
              <p>Computertechnik</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Ich bin ein hochqualifizierter und erfahrener IT-Entwickler aus
              Kénitra Marokko, mit Leidenschaft für die Entwicklung innovativer
              und benutzerfreundlicher Software. Ich habe ein solides
              Verständnis des Softwareentwicklung und bin ich in einer Vielzahl
              von Programmiersprachen und Technologien versiert. Ich bin auch
              ein Teamplayer und immer bereit, neue Dinge zu lernen.
              <br />
              <br />
              Ich bin ein schneller Lerner und immer bereit, neue
              Herausforderungen anzunehmen. Ich bin auch ein hochmotivierter und
              ergebnisorientierter Mensch. Ich bin zuversichtlich, dass ich
              einen bedeutenden Beitrag zu Ihrem Team leisten kann.
            </p>
          </div>
        </div>
      </section>
      <section id="skills">
        <h1 className="header">Fähigkeiten</h1>
        <div className="skills-section-container">
          <div className="skill-sets-container">
            <div className="personal-skill-set">
              <h3 className="header2">persönliche Fähigkeiten</h3>
              <div className="personal-skill-set-container">
                <div className="actual-personal-skills">
                  <article>
                    <img
                      src={checkCircle}
                      alt="Check circle"
                      className="icon"
                    />
                    <h3>Zuverlässigkeit</h3>
                  </article>
                  <article>
                    <img
                      src={checkCircle}
                      alt="Check circle"
                      className="icon"
                    />
                    <h3>Teamfähigkeit</h3>
                  </article>
                  <article>
                    <img
                      src={checkCircle}
                      alt="Check circle"
                      className="icon"
                    />
                    <h3>Lernbereitschaft</h3>
                  </article>
                  <article>
                    <img
                      src={checkCircle}
                      alt="Check circle"
                      className="icon"
                    />
                    <h3>Zeitmanagement</h3>
                  </article>
                  <article>
                    <img
                      src={checkCircle}
                      alt="Check circle"
                      className="icon"
                    />
                    <h3>Deutschkentnisse</h3>
                  </article>
                  <article>
                    <img
                      src={checkCircle}
                      alt="Check circle"
                      className="icon"
                    />
                    <h3>Englischkentnisse</h3>
                  </article>
                </div>
              </div>
            </div>
            <div className="technologies-skill-set">
              <h3 className="header2">Werkzeuge und Technologien</h3>
              <div className="technologies-skill-set-container">
                <div className="column">
                  <img src={htmlIcon} alt="HTML icon" className="icon" />
                  <br />
                  <p>HTML</p>
                  <img
                    src={phpIcon}
                    alt="PHP icon"
                    className="icon"
                    id="php-img"
                  />
                  <br />
                  <p>PHP</p>
                  <img
                    src={databaseIcon}
                    alt="DATABASE Icon"
                    className="icon"
                  />
                  <br />
                  <p>SQL</p>
                  <img src={umlIcon} alt="UML Icon" className="icon" />
                  <br />
                  <p>UML</p>
                </div>
                <div className="column">
                  <img src={cssIcon} alt="CSS icon" className="icon" />
                  <br />
                  <p>CSS</p>
                  <img src={laravelIcon} alt="Laravel icon" className="icon" />
                  <br />
                  <p>Laravel</p>
                  <img src={javaIcon} alt="JAVA Icon" className="icon" />
                  <br />
                  <p>Java</p>
                  <img src={gitIcon} alt="git icon" className="icon" />
                  <br />
                  <p>Git</p>
                </div>
                <div className="column">
                  <img src={jsIcon} alt="Javascript icon" className="icon" />
                  <p>Javascript</p>
                  <img
                    src={bootstrapIcon}
                    alt="bootstrap icon"
                    className="icon"
                  />
                  <p>Bootstrap</p>
                  <img src={cppIcon} alt="c++ icon" className="icon" />
                  <p>C++</p>
                  <img src={githubIcon} alt="github icon" className="icon" />
                  <p>Github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <h1 className="header">Projekte, die ich abgeschlossen habe</h1>
        {/* Praktikumsprojekt Berufungsgericht */}
        <div className="project-widget-container">
          <div className="project-widget">
            <div className="project-media-title">
              <div className="widget-img-container">
                <img src={project1Cover} />
              </div>
              <h3>Management System</h3>
            </div>
            <div className="project-details">
              <p>
                In meiner früheren Rolle als Praktikant in der IT-Abteilung
                des&nbsp;
                <a
                  href="http://www.cakenitra.ma/"
                  target="_blank"
                  style={{ color: '#e69600', textDecoration: 'none' }}
                >
                  Berufungsgerichts in Kénitra
                </a>
                , ich damit beauftragt, eine neue Webanwendung zu entwickeln und
                einzuführen, die im lokalen Netzwerk des Gerichts bereitgestellt
                wird, die Personalressourcen und bereitgestellten Bürogeräte von
                der Regierung verwaltet, um die Effizienz im Arbeitsablauf zu
                steigern und bei der Entscheidungsfindung zu helfen.
              </p>
              <div className="links-container">
                <div className="code-link-container">
                  <a
                    href="http://management-system.great-site.net/"
                    target="_blank"
                    className="code-link underline"
                  >
                    <img src={foreignIcon} className="icon" />
                    &nbsp;live sehen
                  </a>
                </div>
                <div className="code-link-container">
                  <a
                    href="https://github.com/younes-47/Praktikumsprojekt"
                    className="code-link underline"
                    target="_blank"
                  >
                    <img src={codingIcon} alt="" className="icon" />
                    &nbsp;Quellcode sehen
                  </a>
                </div>
                <div className="details-link-container">
                  <a
                    href="projects-details/praktikumsprojekt.html"
                    className="details-link"
                  >
                    <img src={arrowIcon} alt="" className="icon" />
                    &nbsp;Mehr Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Abschlussprojekt eine Plattform  */}
        <div className="project-widget-container">
          <div className="project-widget">
            <div className="project-media-title">
              <div className="widget-img-container">
                <img src={project2Cover} alt="" />
              </div>
              <h3>eine Plattform für meine Hochschule</h3>
            </div>
            <div className="project-details">
              <p>
                Für mein Abschlussprojekt habe ich eine Full-Stack-Anwendung
                entwickelt. Eine Plattform, die Projekte des Studienabschlusses
                von Studenten
                <a
                  href="https://est.uit.ac.ma/"
                  target="_blank"
                  style={{ color: '#e69600', textDecoration: 'none' }}
                >
                  &nbsp;meiner Hochshule&nbsp;
                </a>
                mit Benutzerauthentifizierung und Mehrere Berechtigungen System
                verwaltet, bei der sich der Administrator, die Professoren und
                die Studenten anmelden und auf wichtige Informationen zugreifen
                sowie verschiedene Aufgaben ausführen können.
              </p>
              <div className="links-container">
                <div className="code-link-container">
                  <a
                    href="http://abschlussprojekt.great-site.net"
                    target="_blank"
                    className="code-link underline"
                  >
                    <img src={foreignIcon} alt="" className="icon" />
                    &nbsp;live sehen
                  </a>
                </div>
                <div className="code-link-container">
                  <a
                    href="https://github.com/younes-47/Abschlussprojekt"
                    target="_blank"
                    className="code-link underline"
                  >
                    <img src={codingIcon} alt="" className="icon" />
                    &nbsp;Quellcode sehen
                  </a>
                </div>
                <div className="details-link-container">
                  <a
                    href="projects-details/abschlussprojekt.html"
                    className="details-link"
                  >
                    <img src={arrowIcon} alt="" className="icon" />
                    &nbsp;Mehr Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Praktikumsprojekt Reisebüro-landingpage */}
        <div className="project-widget-container">
          <div className="project-widget">
            <div className="project-media-title">
              <div className="widget-img-container">
                <img src={project3Cover} alt="" />
              </div>
              <h3>Reisebüro Landingpage</h3>
            </div>
            <div className="project-details">
              <p>
                Als Praktikant bei
                <a
                  href="https://www.linkedin.com/company/digiload3/"
                  target="_blank"
                  style={{ color: '#e69600', textDecoration: 'none' }}
                >
                  &nbsp;digiload&nbsp;
                </a>
                Unternehmen und während meines ersten Jahres an der EST
                Hochschule wurde ich beauftragt, eine Landing Page für ein
                Reisebüro zu entwickeln. Die Landing Page dient dazu, die
                Informationen des Reisebüros, ihre Reiseziele und Preise
                darzustellen, die Möglichkeit, sie zu kontaktieren und eine
                Buchung vorzunehmen.
              </p>
              <div className="links-container">
                <div className="code-link-container">
                  <a
                    href="http://voyyage-reiseburo.great-site.net"
                    target="_blank"
                    className="code-link underline"
                  >
                    <img src={foreignIcon} alt="" className="icon" />
                    &nbsp;live sehen
                  </a>
                </div>
                <div className="code-link-container">
                  <a
                    href="https://github.com/younes-47/Reiseburo-Landingpage"
                    className="code-link underline"
                    target="_blank"
                  >
                    <img src={codingIcon} alt="" className="icon" />
                    &nbsp;Quellcode sehen
                  </a>
                </div>
                <div className="details-link-container">
                  <a
                    href="projects-details/reisebüro-landingpage-projekt.html"
                    className="details-link"
                  >
                    <img src={arrowIcon} alt="" className="icon" />
                    &nbsp;Mehr Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact-container">
          <h1 className="header">meine Kontaktinformationen</h1>
          <h3 className="header2">
            ich würde mich freuen, von Ihnen zu hören!
          </h3>
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
    </>
  );
};

export default HomePage;
