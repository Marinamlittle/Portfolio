import React, { useState } from 'react';
import foto from '../img/mmldev.png';
import { misDatos } from '../data/misDatos';

export const PrimerComponente = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const menuItems = [
    // { id: 'inicio', label: 'Inicio' },
    { id: 'sobremi', label: 'Sobre mí' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'proyectos', label: 'Proyectos' },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100); 
  };

  return (
    <header id='inicio'>
      <nav className="navbar"> 
        
        <div className="limite-ancho">

            <div className="intro">
              <img
                src={foto}
                className="foto-encabezado"
                alt="Foto Marina Mateo Lara"
              />
              <div className="texto-encabezado">
                <h1 className="nombre-encabezado">{misDatos.nombre}</h1>
                <h2 className="profesion-encabezado">{misDatos.profesion}</h2>
              </div>
            </div>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
              <span className={`bar ${isOpen ? 'open' : ''}`}></span>
              <span className={`bar ${isOpen ? 'open' : ''}`}></span>
              <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            </button>

            <ul className={`menu ${isOpen ? 'active' : ''}`}>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={(e) => handleScroll(e, item.id)}
                    className="menu-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

        </div>
      </nav>
    </header>
  );
};