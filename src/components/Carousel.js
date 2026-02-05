import React from 'react'

import html5Icon from '../img/html5.png';
import css3Icon from '../img/css3.png';
import jsIcon from '../img/js.png';
import reactIcon from '../img/react.png';
import figmaIcon from '../img/figma.png';
import githubIcon from '../img/github.png';
import wordpressIcon from '../img/wordpress.png';


export const Carousel = () => {
  return (
      <div className="carousel">
            <div className='group'>
              <div className="card"> <img src= {html5Icon} alt="HTML5" width="40" height="40" />   </div>
              <div className="card"> <img src= {css3Icon} alt="css" width="40" height="40" /></div>
              <div className="card"> <img src= {jsIcon} alt="js" width="40" height="40" /></div>
              <div className="card"> <img src= {reactIcon} alt="react" width="40" height="40" /></div>
              <div className="card"> <img src= {figmaIcon} alt="figma" width="40" height="40" /></div>
              <div className="card"> <img src= {githubIcon} alt="github" width="40" height="40" /></div>
              <div className="card"> <img src= {wordpressIcon} alt="wordpress" width="40" height="40" /></div>
            </div>
            <div className='group'>
              <div className="card"> <img src= {html5Icon} alt="HTML5" width="40" height="40" />   </div>
              <div className="card"> <img src= {css3Icon} alt="css" width="40" height="40" /></div>
              <div className="card"> <img src= {jsIcon} alt="js" width="40" height="40" /></div>
              <div className="card"> <img src= {reactIcon} alt="react" width="40" height="40" /></div>
              <div className="card"> <img src= {figmaIcon} alt="figma" width="40" height="40" /></div>
              <div className="card"> <img src= {githubIcon} alt="github" width="40" height="40" /></div>
              <div className="card"> <img src= {wordpressIcon} alt="wordpress" width="40" height="40" /></div>
            </div>
          </div>    
  )
}
