import logo from './logo-dic3.png';
import logo2 from './book.png';
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo2" alt="logo2" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
          <footer className="App-footer">
          <small>
      ©CopyRight 2022 {" "}
            <a
              href="https://github.com/Kathou99/React-Dictionary"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            by {" "}
            <a
              href="https://kathouqccode.ca/"
              target="_blank"
              rel="noreferrer"
            >
              KathouQC
            </a>
             
          </small>
          </footer>
      </div>
    </div>
  );
}

export default App;
