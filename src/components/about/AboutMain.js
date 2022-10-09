import React, { useEffect, useState } from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SoftSkills } from './SoftSkills';
import { Tecnologias } from './Tecnologias';


export const AboutMain = () => {
    const fuenteColor = useColorModeValue( 'brand.darkBlue','brand.white');
    const [animation, setAnimation] = useState(false);
    const [t] = useTranslation("global");
  
    useEffect(() => {
      const handleScroll = ( ) => { 
        if (window.pageYOffset >= 600) {
          setAnimation(true);
        } 
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
    }
    }, [])

  return (
    <Box id='about' pr='15%' pl='15%' pt='12rem' minH={{base:'115rem', lg:'100vh'}} >
        <Text color={fuenteColor}  textAlign='justify' >
        {'\u00A0'+ t("about.aboutMe")} 
        </Text>
        <Box display={{base:'block', lg: 'flex'}} justifyContent='space-between' alignItems='center'>
          <Tecnologias  animation={animation} /> 
          <SoftSkills animation={animation} />
        </Box>
    </Box>
  )
}
