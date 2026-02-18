import React, { useEffect } from 'react'; 

import { Aboutme } from './components/Aboutme';
import { Carousel } from './components/Carousel';
import { Encabezado } from './components/Encabezado';
import { PrimerComponente } from './components/PrimerComponente';
import { Tecnologias } from './components/Tecnologias';
import { Proyectos } from './components/Proyectos';

import './css/style.css';

function App() {
  
  useEffect(() => {
    const trail = document.querySelector('.cursor-trail');
    
    const moveCursor = (e) => {
      if (trail) {
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className='main-container'>

      <header>
        <PrimerComponente />
        <Encabezado />
        <Carousel />
        <Aboutme />
        <Tecnologias />
        <Proyectos />
      </header>

      <div className="cursor-trail"></div>
    </div>
  );
}

export default App;