import React, { useEffect } from 'react';
import { DiMysql } from 'react-icons/di';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPhp, FaWordpress, FaBootstrap, FaSass } from 'react-icons/fa';
import { TbApi } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCanva, SiTypescript } from "react-icons/si";
import figmaIcon from '../img/figma.png';

export function Tecnologias() {

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Buscamos todas las tarjetas dentro de esta sección
                    const cards = entry.target.querySelectorAll('.card-grupo');
                    
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const section = document.querySelector('#tecnologias');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const frontendlist = [
        { id: 1, name: 'HTML5', icono: <FaHtml5 size={40} color="#E34F26" /> },
        { id: 2, name: 'CSS3', icono: <FaCss3Alt size={40} color="#1572B6" /> },
        { id: 3, name: 'JavaScript', icono: <FaJs size={40} color="#F7DF1E" /> },
        { id: 4, name: 'React', icono: <FaReact size={40} color="#61DAFB" className="react-icon-spin" /> },
        { id: 5, name: 'Sass', icono: <FaSass size={40} color="#CC6699" /> }
    ];

    const backendlist = [
        { id: 1, name: 'PHP', icono: <FaPhp size={40} color="#777BB4" /> },
        { id: 2, name: 'MySQL', icono: <DiMysql size={40} color="#4479A1" /> },
        { id: 3, name: 'APIs', icono: <TbApi size={40} color="#D8B554" /> }
    ];
    
    const aprendiendo = [
        { id: 1, name: 'TypeScript', icono: <SiTypescript size={40} color="#3178C6" /> },
        { id: 2, name: 'Bootstrap', icono: <FaBootstrap size={40} color="#7952B3" /> },
        { id: 3, name: 'Tailwind CSS', icono: <RiTailwindCssFill size={40} color="#38B2AC" /> }
    ];

    const herramientas = [
        { id: 1, name: 'WordPress', icono: <FaWordpress size={40} color="#21759B" /> },
        { id: 2, name: 'Figma', icono: <img src={figmaIcon} alt="Figma" style={{ width: '40px', height: '40px' }} /> },
        { id: 3, name: 'GitHub', icono: <FaGithub size={40} color="#FFFFFF" /> },
        { id: 4, name: 'Canva', icono: <SiCanva size={40} color="#7630D7" /> }        
    ];

    const secciones = [
        { titulo: 'Frontend', claseColor: 'seccion-frontend', data: frontendlist },
        { titulo: 'Aprendiendo', claseColor: 'seccion-aprendiendo', data: aprendiendo },
        { titulo: 'Backend', claseColor: 'seccion-backend', data: backendlist },
        { titulo: 'Herramientas', claseColor: 'seccion-herramientas', data: herramientas },
    ];

    return (
        <section className='fondo-tecnologias' id="tecnologias">
            <h2 className="titulo-tecnologias">Tecnologías</h2>
            <p className="descripcion">
                Vestibulum nec metus urna. Aenean volutpat mauris vitae ligula euismod dictum. 
                Ut vel rutrum neque, quis semper metus. Vivamus sit amet lacinia ante.
            </p>

            <div className="contenedor-cards">
                {secciones.map((seccion, index) => (
                    <div key={index} className='card-grupo'>
                        <h3 className={`titulo-card ${seccion.claseColor}`}>{seccion.titulo}</h3>
                        <div className="grid-iconos">
                            {seccion.data.map((tech) => (
                                <div key={tech.id} className="item-tecnologia">
                                    <div className="icono-tech">{tech.icono}</div>
                                    <span className="nombre-tech">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Tecnologias;