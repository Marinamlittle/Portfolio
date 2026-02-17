import React, { useEffect, useRef, useState } from 'react';
import { misDatos } from '../data/misDatos';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiNetlify } from "react-icons/si";

import proyectoImagen from '../img/FRESHESSENCE.png';
import todo2 from '../img/ToDo.png';
import blackjack from '../img/blackjack.png';
import 'animate.css';

const proyectosRealizados = [
    {
        id: 1,
        titulo: "Fresh Essence - Pagina Web con Sistema de Citas",
        descripcion: "Mi primer gran paso en el desarrollo. Una aplicación enfocada en la lógica de estados y la organización de componentes para gestionar citas.",
        imagen: proyectoImagen,
        tecnologias: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        url: "https://github.com/Marinamlittle/Proyecto-Fresh-Essence",
        github: "https://github.com/Marinamlittle/Proyecto-Fresh-Essence"
    },
    {
        id: 2,
        titulo: "To-Do List App",
        descripcion: "Aplicación funcional de gestión de tareas con persistencia de datos y una interfaz intuitiva centrada en la experiencia de usuario.",
        imagen: todo2,
        tecnologias: ["HTML", "CSS", "JavaScript"],
        url: "https://todoappmml.netlify.app/",
        github: "https://github.com/tu-usuario/tu-repo"
    },
    {
        id: 3,
        titulo: "BlackJack",
        descripcion: "Se trata de una aplicación web del juego de cartas Blackjack, desarrollada utilizando JavaScript moderno y Vite como herramienta de construcción.",
        imagen: blackjack,
        tecnologias: ["HTML", "CSS", "JavaScript"],
        url: "https://marinamlittle.github.io/js-blackjack-vite-main/",
        github: "https://github.com/Marinamlittle/js-blackjack-vite-main"
    }
];

export function Proyectos() {
    // Estado para controlar cuándo activar las animaciones
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Si la sección entra en el campo de visión (al menos un 20%)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Dejamos de observar para que no se repita
                }
            },
            { threshold: 0.2 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Clase base para los elementos que se van a animar
    const animatedBase = isVisible ? 'animate__animated' : '';

    return (
        <section className='proyecto' ref={sectionRef}>
            <div className="caja-izquierda">
                <h2 className={`${animatedBase} ${isVisible ? 'animate__bounceInLeft' : ''}`}
                    style={{ opacity: isVisible ? 1 : 0 }}>
                    Mis Proyectos
                </h2>
                
                <h3 className={`${animatedBase} ${isVisible ? 'animate__fadeIn' : ''}`}
                    style={{ opacity: isVisible ? 1 : 0, animationDelay: '0.4s' }}>
                    {misDatos.profesion}
                </h3>
                
                <p className={`intro-proyectos ${animatedBase} ${isVisible ? 'animate__fadeIn' : ''}`}
                   style={{ opacity: isVisible ? 1 : 0, animationDelay: '0.6s' }}>
                    Construyendo bases sólidas a través del código, proyecto a proyecto
                </p>

                <div className="boton-seccion-proyectos" id='proyectos'>
                    <a href={misDatos.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hvr-icon-pulse-grow">
                        <FaGithub className="social-icon hvr-icon" />
                    </a>
                    <a href={misDatos.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hvr-icon-pulse-grow">
                        <FaLinkedin className="social-icon hvr-icon" />
                    </a>
                    <a href={misDatos.netlify} target="_blank" rel="noreferrer" aria-label="Netlify" className="hvr-icon-pulse-grow">
                        <SiNetlify className="social-icon hvr-icon" />
                    </a>
                </div>
            </div>

            <div className="caja-derecha">
                {proyectosRealizados.map((proyecto, index) => (
                    <article 
                        key={proyecto.id}
                        className={`card-proyecto hvr-float ${animatedBase} ${isVisible ? 'animate__fadeInUp' : ''}`} 
                        style={{ 
                            opacity: isVisible ? 1 : 0,
                            /* El delay aumenta por cada proyecto (index) para crear el efecto cascada */
                            animationDelay: `${0.8 + (index * 0.2)}s` 
                        }}
                    >
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
                                        <span key={indexTech} className="tag-tech hvr-grow">{tech}</span>
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