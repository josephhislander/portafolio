import { Accordion, background, Box, Heading, Img, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { animated, config, useSpring } from 'react-spring';
import { ProyectoCard } from './ProyectoCard';
import { ProyectoDetails } from './ProyectoDetails';

export const Proyecto = ({frontPage, title, shortDescription, technologies = [], origen ,funcionalidades,otrasTecnologias, Imgs, data,left, animation,code, production}) => {

    const [t] = useTranslation("global");
    const AnimatedBox = animated(Box);  
    const spring = useSpring({
        from:animation &&  {y: 300, opacity: 0},
        to: animation && {y:0, opacity: 1},
        config : config.slow,
        
      })



  return (
   <Box  textAlign='justify'  id={title} pos='relative' zIndex={0}>
        <Box display={{base:'block', lg: 'flex'}} mt='2rem' mb='1rem' pr='15%' pl='15%' >
            
            <ProyectoCard frontPage={frontPage} left={left} code={code} production={production} />

            <Box flexGrow='1'  w={{base:'100%', lg: '100px'}} p='2rem'  >
                <Heading  align='center' mb='1rem'>{title}</Heading>
                <Text  mb='1rem'> {shortDescription}</Text>
                <Heading  mb='1rem' >{t("projectsMain.titlesOfProject.MainTechnologiesUsed")} </Heading>
                <AnimatedBox style={spring} display='flex' justifyContent='space-around' wrap='wrap' gap='1rem'>
                {technologies.map( (technology, i) => (technology.type === 'text') ?<Text fontFamily='Roboto, Arial' pt='0.6rem' title={technology.name} cursor='default' key={i} >{technology.icon}</Text> : <Img src={technology.icon}  alt={technology.name} key={i}  boxSize='4rem' title={technology.name}></Img> )}
                </AnimatedBox>
            </Box>
        </Box>
            <ProyectoDetails data={data} title={title} Imgs={Imgs} animation={animation} origen={origen} funcionalidades={funcionalidades} otrasTecnologias={otrasTecnologias} />
   </Box>
  )
}
