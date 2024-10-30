import './App.css';
import Header from './components/Header/Header';
import logoAviaseils from './image/aviaseils.png';
import logoAirport from './image/S7 Logo.svg';

import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header logoAviaseils={logoAviaseils} />
        <Main logoAirport={logoAirport} />
      </div>
    </div>
  );
}

export default App;
