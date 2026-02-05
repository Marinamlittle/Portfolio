import './App.css';
import { Aboutme } from './components/Aboutme';
import { Carousel } from './components/Carousel';
import { Encabezado } from './components/Encabezado';
import { PrimerComponente } from './components/PrimerComponente';
import './css/style.css';


function App() {
  return (
    <div >
      <header >
        
        <PrimerComponente />
        <Encabezado />
        <Carousel />
        <Aboutme />

      </header>
    </div>
  );
}

export default App;
