import React, { useState, useEffect } from 'react';
import { nombre, profesion } from './PrimerComponente';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Encabezado = () => {
  const [textoAnimado, setTextoAnimado] = useState('');
  const textoCompleto = profesion;

  useEffect(() => {
    let indice = 0;
    
    const maquinaDeEscribir = setInterval(() => {
      setTextoAnimado((prev) => textoCompleto.slice(0, indice + 1));
      indice++;

      if (indice >= textoCompleto.length) {
        clearInterval(maquinaDeEscribir);
      }
    }, 150);

    return () => clearInterval(maquinaDeEscribir);
  }, [textoCompleto]);

  return (
    <div>
      <section id="inicio" className="seccion-inicio">
        
        <h2 className="titulo-seccion">{textoAnimado}</h2>
        <h2 className="nombre-seccion">{nombre}</h2>

        <div className="boton-seccion">
          <a href="https://www.linkedin.com/in/marina-mateo-lara-1b2213284/" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>         
          <a href="https://github.com/Marinamlittle" target="_blank" rel="noreferrer" title="GitHub">
          <FaGithub className="social-icon" />
          </a>
        </div>
      </section>
    </div>
  );
};