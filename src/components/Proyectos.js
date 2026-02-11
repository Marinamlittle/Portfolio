import React from 'react'
import { misDatos } from '../data/misDatos';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiNetlify } from "react-icons/si";

import proyectoImagen from '../img/FRESHESSENCE.png';
import basicfit from '../img/basicfit.png'
import festi from '../img/festi.png'
import nike from '../img/nike.png'

const proyectosRealizados = [
    {
        id: 1,
        titulo: "Fresh Essence - Pagina Web con Sistema de Citas",
        descripcion: "Mi primer gran paso en el desarrollo. Una aplicación enfocada en la lógica de estados y la organización de componentes para gestionar citas.",
        imagen: proyectoImagen,
        tecnologias: ["Html", "Css", "JavaScript", "PHP", "MySQL"],
        url: "https://github.com/Marinamlittle/Proyecto-Fresh-Essence"
    },
    {
        id:2, 
        titulo: "BasicFit - Pagina Web ",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna urna, efficitur non euismod sit amet, volutpat ac neque.",
        imagen: basicfit,
        tecnologias: ["React", "Css", "JavaScript"]
    },
    {
        id:3, 
        titulo: "Festival de Málaga - Pagina Web ",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna urna, efficitur non euismod sit amet, volutpat ac neque.",
        imagen: festi,
        tecnologias: ["Angular", "Css", "JavaScript", "Tailwind"]
    },
    {
        id:4, 
        titulo: "Nike - Pagina Web ",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna urna, efficitur non euismod sit amet, volutpat ac neque.",
        imagen: nike,
        tecnologias: ["React", "Css", "JavaScript", "Bootstrap"]
    },


];

export function Proyectos() {
    return (
        <section className='proyecto' id='proyectos'>
            <div className="caja-izquierda">
                <h2>{misDatos.nombre}</h2>
                <h3>{misDatos.profesion}</h3>
                <p className="intro-proyectos">Construyendo bases sólidas a través del código, proyecto a proyecto</p>

                <div className="boton-seccion-proyectos">
                    <a href={misDatos.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href={misDatos.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href={misDatos.netlify} target="_blank" rel="noreferrer" aria-label="Netlify">
                        <SiNetlify className="social-icon" />
                    </a>
                    
                </div>
            </div>

            <div className="caja-derecha">
                {proyectosRealizados.map((proyecto) => (
                    <article className="card-proyecto" key={proyecto.id}>
                        <a 
                            href={proyecto.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="proyecto-link"
                        >
                            <div className="proyecto-screenshot">
                                <img src={proyecto.imagen} alt={proyecto.titulo} />
                            </div>

                            <div className="proyecto-info">
                                <h4>{proyecto.titulo}</h4>
                                <p>{proyecto.descripcion}</p>
                                
                                <div className="proyecto-tecnologias">
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <span key={index} className="tag-tech">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </article>
                ))}
            </div>

        </section>
    )
}

export default Proyectos;