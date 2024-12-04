import './App.css';
import Header from './components/Header/Header';
import logoAviaseils from './image/aviaseils.png';
import logoAirport from './image/S7 Logo.svg';
import logoAeroflot from './image/aeroflot.png';
import logoUtairfrom from './image/utair.png';
import Main from './components/Main/Main';

function App() {
  let logo = [logoAirport, logoAeroflot, logoUtairfrom];
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header logoAviaseils={logoAviaseils} />
        <Main logo={logo} />
      </div>
    </div>
  );
}

export default App;
