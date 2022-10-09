import React, { useEffect, useState } from 'react'
import { Accordion, Box, Heading } from '@chakra-ui/react'
import { Proyecto } from './Proyecto'
import {proyectos } from '../../assets/data/proyectosData'
import { animated, config, useSpring } from 'react-spring'
import { useTranslation } from 'react-i18next'


export const ProyectosMain = () => {

  const [t] = useTranslation("global");
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    
    const handleScroll = ( ) => { 
      if (window.pageYOffset >= 800) {
        setAnimation(true);
      } else {
        // setAnimation(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
  }
  }, [])

  const AnimatedHeading= animated(Heading);
  const spring = useSpring({
    from:animation &&  {y: -100, opacity: 0},
    to: animation && {y:0, opacity: 1},
    config : config.slow
  })

  return (
    <Box id='proyectos'  pt='1rem'  h={{base:'100%'}} >

      {animation
        ?<AnimatedHeading style={spring} fontSize='2.2rem' align='center'> {t("projectsMain.title")} </AnimatedHeading>
        :<Box h='2.2rem'></Box>
      }
        <Accordion allowToggle mt='1rem'>
        {
            proyectos.map((proyecto, i) => <Proyecto frontPage={proyecto.frontPage} 
            title={proyecto.title} 
            shortDescription={t("projectsMain.projects."+ proyecto.title + ".shortDescription" , {returnObjects: true})} 
            technologies={proyecto.technologies}   
            origen={t("projectsMain.projects."+ proyecto.title + ".origen", {returnObjects: true})} 
            funcionalidades={t("projectsMain.projects."+ proyecto.title + ".functionalities", {returnObjects: true})} 
            otrasTecnologias={proyecto.otrasTecnologias} 
            // Imgs={} 
            data={proyecto.data} 
            left={proyecto.left}  
            code={proyecto.code} 
            production={proyecto.production} 
            key={i} 
            animation={animation} />   )
        }
        </Accordion>
    </ Box >
  )
}

