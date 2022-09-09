import './App.css';
import  Github  from "./GitHub-Mark/PNG/GitHub-Mark-120px-plus.png";
import Chatapp from "./styles/Chatapp.png";



function App() {
  return (
    <div className="App">
      <header className="app-header">
        <nav>
          <ul className="navigation">
            <li className="navigation__item">
              <a href="#about">
                <div lang='hr' tabIndex="0">O MENI</div>
                <div lang='en' tabIndex="0">ABOUT</div>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#showcase">
                <div lang='hr' tabIndex="0">RADIONICA</div>
                <div lang='en' tabIndex="0">SHOWCASE</div>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#contacts">
                <div lang='hr' tabIndex="0">KONTAKTI</div>
                <div lang='en' tabIndex="0">CONTACTS</div>
              </a>
            </li>
          </ul>
        </nav>
        <div className="fake-slider"></div>
        <h1 className="app-header__h1" lang='hr'>
          <strong>Pozdrav</strong> <i>,</i> <br />
          i <em>dobrodošli</em>.
        </h1>
        <h1 className="app-header__h1" lang='en'>
          <strong>Hello</strong> <i>there,</i> <br />
          and <em>welcome</em>.
        </h1>
      </header>
      <div className="back-ground-image"></div>
      <div className="about" id="about" tabIndex="0">
        <h2 className="about__h2" lang='hr'>
        Ja sam junior front-end developer iz <br />
        Vinkovaca, Hrvatska.        </h2>
        <h2 className="about__h2" lang='en'>
          I am a junior front-end developer from <br />
          Vinkovci, Croatia.
        </h2>
        <p className="about__p" lang='hr'>
          Odmalena sam volio računala i igranje na njima dok sam maštao o tome da jednog dana možda i radim na njima. Početkom ove godine konačno sam odlučio promijeniti svoju profesionalnu karijeru i pokušati stvarno kodirati, točnije kao frontend developer. Završio sam 3-mjesečni tečaj za HTM CSS i React i trenutno sam u potrazi za poslom, a ujedno nadograđujem svoje vještine i znanja iz područja web developmenta, uz mrvicu dizajna.
        </p>
        <p className="about__p" lang='en'>
          Since I was a kid, I always loved computers and playing on them while dreaming about maybe, someday, i actually also work on them.
          At the start of this year I finally decided to change my professional career, and try coding for real, namely as frontend developer.
          I finished a 3 months course for HTM CSS and React and I am currently searching for a job, while also upgrading mine skills and knowledge in the field of web development, with a smidge of design in it.
        </p>
      </div>
      <div className="showcase" id="showcase" tabIndex="0">
        <a href="https://mariomustapicchat-app.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src= { Chatapp } alt="Link to Chat-app" className='chat-app-logo' />
        </a>
        <a href="https://github.com/MarioMustapic" target="_blank" rel="noopener noreferrer">
          <img src= { Github } alt="" className='' />
        </a>

      </div>
      <div className="contacts" id="contacts" tabIndex="0">
        <a href="https://github.com/MarioMustapic" target="_blank" rel="noopener noreferrer">
          <img src= { Github } alt="Link to Github" className='github-logo' />
        </a>
      </div>
    </div>
  );
}

export default App;
