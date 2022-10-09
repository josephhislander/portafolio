import React from 'react'
import { background, Box, Image, Text } from '@chakra-ui/react'
import { animated } from 'react-spring';

export const TecnologiasItem = ({icon, alt, name,style }) => {
  
  const AnimatedBox = animated(Box);
  return (
    <AnimatedBox style={style} boxSize={{base:'7rem', lg:'11rem'}}  display='flex' alignItems='center' justifyContent='center' flexDirection='column' >
        <Image boxSize={{base:'5rem', lg: '7rem'}} src={icon} alt={alt}  />
        <Text  fontFamily='Anonymous Pro, Time new romans'>{name}</Text>
    </AnimatedBox>
      )
}
