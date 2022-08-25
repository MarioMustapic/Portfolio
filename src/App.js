import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header__h1">
          <strong>Hello</strong> <i>there,</i> <br />
          and <em>welcome</em>.
        </h1>
      </header>
      <div className="About">
        <h2 className="About__h2">
          I am a junior front-end developer from <br />
          Vinkovci, Croatia.
        </h2>
        <p className="About__p">
          Since I was a kid, I always loved computers and playing on them while dreaming about maybe, someday, i actually also work on them.
          At the start of this year I finally decided to change my professional career, and try coding for real, namely as frontend developer.
          I finished a 3 months course for HTM CSS and React and I am currently searching for a job, while also upgrading mine skills and knowledge in the field of web development, with a smidge of design in it.
        </p>
      </div>
    </div>
  );
}

export default App;
