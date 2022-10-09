import React from 'react';
import { Box, Heading, Icon, Skeleton, Text, useColorModeValue } from '@chakra-ui/react';
import { FaAngleDown,FaAngleUp } from 'react-icons/fa';
import { AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { animated,  useSpring } from 'react-spring';
import {ProyectoCarrusel} from '../../components/proyectos/ProyectoCarrusel'
import { useTranslation } from 'react-i18next';

export const ProyectoDetails = ({origen,funcionalidades,otrasTecnologias , animation, Imgs, data,title}) => {

    const barColor = useColorModeValue( 'brand.blue','brand.gray' );
    const [t] = useTranslation("global");
    
    const Funcionalidades = funcionalidades.split("$");
    const AnimatedBox = animated(Box);  
    const spring = useSpring({
        from:animation &&  {y: -5, opacity: 1},
        to: animation && {y:0, opacity: 1},
        config: { mass: 0.5, tension: 100, friction: 14 }	,
        loop: { reverse: true }
      })

  return (
        <AccordionItem borderTopStyle='none' borderBottomWidth='1rem' borderBottomColor={barColor} >
            {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton _focus={{ bg: 'none', boxShadow:'none' }} >
                        {!isExpanded ? (
                            <AnimatedBox style={spring} h='3rem' m='auto'>

                                <Icon  as={FaAngleDown}  fontSize='3rem' flex='1'  color='brand.gray'/>
                            </AnimatedBox> 
                        ) : <Box h='3rem'></Box> }
                    </AccordionButton>
                    </h2>
                    <AccordionPanel p='0'>

                        <Box pr='15%' pl='15%'>
                            <Heading as='h3'>{t("projectsMain.titlesOfProject.ApplicationSource")}</Heading>
                            <Text mt='2rem'>{origen}</Text>
                            <Heading as='h3' mt='2rem'>{t("projectsMain.titlesOfProject.Features")}</Heading>

                            {Funcionalidades.map((funcionalidad, i) =>  <Text mt='2rem' key={i} > {funcionalidad}</Text> )}
                        </Box>
                        <ProyectoCarrusel children={data} />
                            { otrasTecnologias  &&
                                <Box  pr='15%' pl='15%'>
                                    <Heading mt='2rem' mb='1rem' as='h3'>{t("projectsMain.titlesOfProject.OtherToolsAndLibrariesUsed")}</Heading>
                                    {otrasTecnologias.map((tecnologia,i) => <Text  key={i}>{tecnologia}</Text> )}
                                 </Box>
                            }
                        <a  href={'#'+title}>
                        <AccordionButton  mt='3rem'  _focus={{ bg: 'none', boxShadow:'none' }} >
                            <Icon as={FaAngleUp} fontSize='3rem' flex='1' textAlign='center' color='brand.gray'/> 
                        </AccordionButton>
                        </a>
                    </AccordionPanel>
                </>
                )}
                  </AccordionItem>
  )
}
