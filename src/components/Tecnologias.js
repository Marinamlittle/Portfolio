import React, { useEffect } from 'react';
import { DiMysql } from 'react-icons/di';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPhp, FaWordpress, FaSass } from 'react-icons/fa';
import figmaIcon from '../img/figma.png';

export function Tecnologias() {

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
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
        { id: 5, name: 'Sass', icono: <FaSass size={40} color="#CC6699" /> },

    ];

    const backendlist = [
        { id: 1, name: 'PHP', icono: <FaPhp size={40} color="#777BB4" /> },
        { id: 2, name: 'MySQL', icono: <DiMysql size={40} color="#4479A1" /> },
    ];
    
    const herramientas = [
        { id: 4, name: 'WordPress', icono: <FaWordpress size={40} color="#21759B" /> },
        { id: 6, name: 'Figma', icono: <img src={figmaIcon} alt="Figma" style={{ width: '40px', height: '40px' }} /> },
        { id: 5, name: 'Git/GitHub', icono: <FaGithub size={40} color="#FFFFFF" /> }

    ];

    const RenderIcons = ({ list }) => (
        <div className="grid-iconos">
            {list.map((tech) => (
                <div key={tech.id} className="item-tecnologia">
                    <div className="icono-tech">
                        {tech.icono}
                    </div>
                    <span className="nombre-tech">{tech.name}</span>
                </div>
            ))}
        </div>
    );

    return (
        <section className='fondo-tecnologias' >
            
            <h2 className="titulo-tecnologias" >Tecnologías</h2>
            <p className="descripcion"  id="tecnologias">Mi trabajo se centra en el punto donde el diseño y la funcionalidad se encuentran. Como Frontend Developer, me especializo en construir interfaces que no solo sean visualmente atractivas, sino también intuitivas y accesibles. Mi objetivo es que cada interacción del usuario sea fluida, utilizando arquitecturas modernas para garantizar que el rendimiento sea óptimo en cualquier dispositivo."</p>

            <div className="contenedor-cards">

                <div className='card-grupo area-frontend'>
                    <h3 className="titulo-card seccion-frontend">Frontend</h3>
                    <RenderIcons list={frontendlist} />
                </div>

                <div className='card-grupo area-backend'>
                    <h3 className="titulo-card seccion-backend">Backend</h3>
                    <RenderIcons list={backendlist} />
                </div>

                <div className='card-grupo area-herramientas'>
                    <h3 className="titulo-card seccion-herramientas">Herramientas</h3>
                    <RenderIcons list={herramientas} />
                </div>

            </div>
            
        </section>
    );
}

export default Tecnologias;