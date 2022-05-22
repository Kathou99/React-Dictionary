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
        <Dictionary />
      </main>
      <footer className="text-center">Coded By KathouQC</footer>
      </div>
    </div>
  );
}

export default App;
