import React, { useState } from 'react';
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { SiGmail } from 'react-icons/si';
import CV_Icono from '../img/CV.png';


export const Aboutme = () => {
  // const [discordCopiado, setDiscordCopiado] = useState(false);

  // const copiarDiscord = () => {
  //   const usuarioDiscord = "Marinamlittle#5322";
  //   navigator.clipboard.writeText(usuarioDiscord);
  //   setDiscordCopiado(true);
    
  //   setTimeout(() => setDiscordCopiado(false), 2000);
  // };

  return (
    <section className="aboutme-container" >

      <div className='card-border-animated' >
        <div className='contenido' id='sobremi'>
          <h2 className="titulo-aboutme" >Sobre mí</h2>
          <div className='texto-aboutme' >
            <p>
              Me llamo <strong>Marina Mateo</strong>, tengo 24 años y soy de La Línea de la Concepción (Cádiz)
              <img src="https://flagcdn.com/w20/es.png" alt="España" style={{ marginLeft: '8px', width: '18px', verticalAlign: 'baseline' }}  /> .
            </p>
            <p>
              Descubrí el mundo de la programación en un momento en el que no tenía claro a qué quería dedicarme. 
              Fue entonces cuando mi hermano me lanzó una pregunta sencilla que lo cambió todo: <strong>“¿Por qué no programas?”</strong>. 
              Desde ese momento, empecé a interesarme por el desarrollo web y en crear experiencias digitales.
            </p>
            <p>
              En junio finalicé el <strong>Grado Superior en Desarrollo de Aplicaciones Web</strong>, una etapa que 
              considero en gran parte <strong>autodidacta</strong>, ya que el aprendizaje surgió de la investigación personal, 
              la práctica constante y la resolución de problemas reales más allá del aula.
            </p>
            <p>
              Cuento con experiencia en la creación de páginas web mediante CMS, especialmente <strong>WordPress</strong>. 
              Durante mis prácticas profesionales diseñé y desarrollé más de 10 páginas web para clientes reales, 
              además de adquirir conocimientos en SEO y publicidad digital.
            </p>
            
            {/* BOTON CV */}
            <a 
                href="/MMLCV.pdf"
                download="CV_Marina_Mateo.pdf"
                className="CV" 
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={CV_Icono} alt="Icono CV" width="20" height="20" />
                <span>Descargar CV</span>
            </a> 

          </div>
        </div>
      </div>

            {/* Hablamos? */}
      <div className='hablamos'>
          <p className='texto-hablamos'>¿Hablamos?</p>
          <div className='iconos-hablamos'>
            <a href="mailto:marinaml201101@gmail.com" title="Enviar Correo">
                <SiGmail className="social-icon" />
            </a>
            <a href="tel:+34601377978" title="LLamar">
                <MdOutlinePhoneEnabled className="social-icon" />
            </a>
          </div>
      </div>

    </section>
  );
};