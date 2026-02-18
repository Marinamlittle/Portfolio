import React from 'react';
import { misDatos } from '../data/misDatos';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiNetlify } from "react-icons/si";

import proyectoImagen from '../img/FRESHESSENCE.png';
import todo2 from '../img/ToDo.png';
import blackjack from '../img/blackjack.png';

const proyectosRealizados = [
    {
        id: 1,
        titulo: "Fresh Essence - Pagina Web con Sistema de Citas",
        descripcion: "Mi primer gran paso en el desarrollo. Una aplicación enfocada en la lógica de estados y la organización de componentes para gestionar citas.",
        imagen: proyectoImagen,
        tecnologias: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        url: "https://github.com/Marinamlittle/Proyecto-Fresh-Essence",
    },
    {
        id: 2,
        titulo: "To-Do List App",
        descripcion: "Aplicación funcional de gestión de tareas con persistencia de datos y una interfaz intuitiva centrada en la experiencia de usuario.",
        imagen: todo2,
        tecnologias: ["HTML", "CSS", "JavaScript"],
        url: "https://todoappmml.netlify.app/",
    },
    {
        id: 3,
        titulo: "BlackJack",
        descripcion: "Se trata de una aplicación web del juego de cartas Blackjack, desarrollada utilizando JavaScript moderno y Vite como herramienta de construcción.",
        imagen: blackjack,
        tecnologias: ["HTML", "CSS", "JavaScript"],
        url: "https://marinamlittle.github.io/js-blackjack-vite-main/",
    }
];

export function Proyectos() {
    return (
        <section className='proyecto' id='proyectos'>
            <div className="caja-izquierda">
                <h2>Mis Proyectos</h2>
                <h3>{misDatos.profesion}</h3>
                <p className="intro-proyectos">
                    Construyendo bases sólidas a través del código, proyecto a proyecto
                </p>

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
                    <article key={proyecto.id} className="card-proyecto">
                        <a 
                            href={proyecto.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="card-link"
                        >
                            <div className="proyecto-screenshot">
                                <img src={proyecto.imagen} alt={proyecto.titulo} />
                            </div>
                    
                            <div className="proyecto-info">
                                <h4>{proyecto.titulo}</h4>
                                <p>{proyecto.descripcion}</p>
                                <div className="proyecto-tecnologias">
                                    {proyecto.tecnologias.map((tech, indexTech) => (
                                        <span key={indexTech} className="tag-tech">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Proyectos;