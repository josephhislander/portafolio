import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { animated } from 'react-spring';

export const SoftSkillsItem = ({icon, skill, style}) => {

    const AnimatedBox = animated(Box);

  return (
    <AnimatedBox style={style}  display='flex' fontSize='3rem' alignItems='center'  mt={{base:'1rem', md: '3rem'}} >
        {icon} <Text ml='1rem'  fontFamily='Anonymous Pro, Time new romans'>{skill}</Text> 
    </AnimatedBox>
  )
}
