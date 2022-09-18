import { Accordion, Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Proyecto } from './Proyecto'
import {proyectos } from '../../assets/data/proyectosData'
import { animated, config, useSpring } from 'react-spring'


export const ProyectosMain = () => {

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
    from:animation &&  {y: -500, opacity: 0},
    to: animation && {y:0, opacity: 1},
    config : config.slow
  })

  return (
    <Box id='proyectos'  pt='5rem'  h={{base:'100%'}} >

      {animation
        ?<AnimatedHeading style={spring} fontSize='2.2rem' align='center'>Proyectos</AnimatedHeading>
        :<Box h='2.2rem'></Box>
      }
        <Accordion allowToggle mt='1rem'>
        {
            proyectos.map((proyecto, i) => <Proyecto  {...proyecto} key={i} animation={animation} /> )
        }
        </Accordion>
    </ Box >
  )
}
