import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { misDatos } from '../data/misDatos';

export const Encabezado = () => {
  const [textoAnimado, setTextoAnimado] = useState('');
  const textoCompleto = misDatos.profesion;

  useEffect(() => {
    let indice = 0;
    
    const maquinaDeEscribir = setInterval(() => {
      setTextoAnimado(textoCompleto.slice(0, indice + 1));
      indice++;

      if (indice >= textoCompleto.length) {
        clearInterval(maquinaDeEscribir);
      }
    }, 150);

    return () => clearInterval(maquinaDeEscribir);
  }, [textoCompleto]);

  return (
    <section id="inicio" className="seccion-inicio">
      <h2 className="titulo-seccion">{textoAnimado}</h2>
      <h2 className="nombre-seccion">{misDatos.nombre}</h2>

      <div className="boton-seccion">
        <a 
          href={misDatos.linkedin}
          target="_blank" 
          rel="noreferrer" 
          className="hvr-icon-down" 
          aria-label="Visitar perfil de LinkedIn"
        >
          <FaLinkedin className="social-icon hvr-icon" /> 
        </a> 
        
        <a 
          href={misDatos.github}
          target="_blank" 
          rel="noreferrer" 
          className="hvr-icon-down"
          aria-label="Visitar perfil de GitHub"
        >
          <FaGithub className="social-icon hvr-icon" /> 
        </a>
    </div>
    </section>
  );
};