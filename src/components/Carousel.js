import React from 'react'
/**TODO: CAMBIAR LAS EXPORTACIONES INNECESARIAS POR ICONOS REACT */
import html5Icon from '../img/html5.png';
import css3Icon from '../img/css3.png';
import jsIcon from '../img/js.png';
import reactIcon from '../img/react.png';
import figmaIcon from '../img/figma.png';
import githubIcon from '../img/github.png';
import wordpressIcon from '../img/wordpress.png';

const icons = [
  { src: html5Icon, alt: "HTML5" },
  { src: css3Icon, alt: "CSS3" },
  { src: jsIcon, alt: "JS" },
  { src: reactIcon, alt: "React" },
  { src: figmaIcon, alt: "Figma" },
  { src: githubIcon, alt: "GitHub" },
  { src: wordpressIcon, alt: "WordPress" },
];

export const Carousel = () => {
  // Renderizamos el contenido de los iconos una vez
  const content = icons.map((icon, index) => (
    <div className="card" key={index}>
      <img src={icon.src} alt={icon.alt} width="40" height="40" />
    </div>
  ));

  return (
    <div className="carousel">
      <div className="group">{content}</div>
      <div className="group" aria-hidden="true">{content}</div>
    </div>
  );
};
