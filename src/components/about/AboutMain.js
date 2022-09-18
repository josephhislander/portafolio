import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SoftSkills } from './SoftSkills';
import { Tecnologias } from './Tecnologias';


export const AboutMain = () => {
    const fuenteColor = useColorModeValue( 'brand.darkBlue','brand.white');
    const [animation, setAnimation] = useState(false)
  
    useEffect(() => {
    
      const handleScroll = ( ) => { 
        if (window.pageYOffset >= 600) {
          // console.log(animation)
          setAnimation(true);
          // console.log(animation)
        } else {
          // setAnimation(false)
        }
      }
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
    }
    }, [])

  return (
    <Box id='about' pr='15%' pl='15%' pt='12rem' h={{base:'100%', md:'100vh'}}>
        <Text color={fuenteColor}  textAlign='justify' >
        {'\u00A0'}Soy un desarrollador de software autodidacta,  eterno aprendiz , fanático de la eficiencia y automatización,  enfocado en optimizar procesos y  resolver necesidades a través del desarrollo de software  usando como herramientas el lenguaje Javascript y el ecosistema que le rodea, las principales tecnologías de las que me sirvo para crear y hacer crecer proyectos son:  
        </Text>
        <Box display={{base:'block', lg: 'flex'}} justifyContent='space-between' alignItems='center'>
          <Tecnologias  animation={animation} /> 
          <SoftSkills animation={animation} />
        </Box>
    </Box>
  )
}
