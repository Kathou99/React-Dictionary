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
      <footer className="text-center">Coded By KathouQC <a href="https://thunderous-yeot-538994.netlify.app/">Open-Source</a></footer>
      </div>
    </div>
  );
}

export default App;
