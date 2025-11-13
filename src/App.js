import logo from './logo.png';
import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo image-fluid" alt="logo" />
      </header>
<main>
  <Dictionary defaultKeyword="sunrise"/>
</main>

<footer className="App-footer">
  <small>
  Coded by Erica Mbiti
  </small>
  </footer>

    </div>
    </div>
  );
}

export default App;
