import React from 'react';
import foto from '../img/mml2.jpg';
import { misDatos } from '../data/misDatos';

export const PrimerComponente = () => {

  // 1. CREAMOS UNA LISTA DE DATOS (Array)
    const menuItems = [
      { id: 'inicio', label: 'Inicio' },
      { id: 'sobremi', label: 'Sobre mí' },
      { id: 'tecnologias', label: 'Tecnologías' },
      { id: 'proyectos', label: 'Proyectos' },
    ];

  // 2. FUNCIÓN PARA EL SCROLL SUAVE
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header id='inicio'>
      <nav className="navbar"> 
        <div className="intro">
          
          <img
            src={foto}
            className="foto-encabezado"
            alt="Foto Marina Mateo Lara"
            width="150"
            height="150"
          />

          <div className="texto-encabezado">
            <h1 className="nombre-encabezado">{misDatos.nombre}</h1>
            <h2 className="profesion-encabezado">{misDatos.profesion}</h2>
          </div>
        </div>

        {/* 3. RENDERIZADO DINÁMICO DEL MENÚ */}
        <ul className="menu">
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
      </nav>
    </header>
  );
};