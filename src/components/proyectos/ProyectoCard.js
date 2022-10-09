import React, { useEffect, useState } from 'react'
import { Box,  Img, Text, useColorModeValue } from '@chakra-ui/react';
import { animated, easings, useSpring} from 'react-spring';
import { FaGithub } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import { MdTouchApp} from "react-icons/md";

export const ProyectoCard = ({frontPage, left, code, production}) => {

    const AnimatedBox = animated(Box);
    const AnimatedImg = animated(Img);
    const IconBackgroundColor = useColorModeValue( 'brand.bone', 'brand.darkBlue');
    const navBackgroundColor = useColorModeValue(  'brand.darkBlue', 'brand.bone');
    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
    loop: true 
    });

    useEffect(() => {
    const handleScroll = ( ) => { 
      if (window.pageYOffset >= 800 && window.innerWidth > 700) {
        setFlipped(true);
      }  else if (window.pageYOffset >= 1700 && window.innerWidth < 700) {
        setFlipped(true);
      } else {
        setFlipped(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log(flipped);
    }
    }, [])

    const spring = useSpring ({
      from: { opacity: 0.5, y: -10},
      to: {opacity: 0, y: 0},
      config : { mass: 1, tension: 150, friction: 60 , easing: easings.easeInElastic, },
      loop: true
    })

  return (
    <Box   display='flex' cursor='pointer' onClick={() => setFlipped(!flipped)}  alignSelf='center' flexGrow='1'   order= { left ? 0 : 1 } w={{base:'100%', lg: '100px'}}   >  
        <AnimatedBox w='100%' style={{
            opacity,
            transform,
            rotateX: "180deg"
          }}>

          <AnimatedImg  objectFit='cover'  w='100%' h='22rem'  alt={frontPage}  borderRadius='1rem' src={frontPage}  />

          <AnimatedBox color='brand.bone' style={spring} fontSize='3rem' pos='absolute' w='100%'  borderBottomRadius='1rem' bottom='0' align='center' p='1rem' > <MdTouchApp /> </AnimatedBox >

        </AnimatedBox>
            
        <AnimatedBox   style={{ opacity: opacity.to((o) => 1 - o), transform }}  display='flex' alignItems='center' justifyContent='center' h='22rem' bg={navBackgroundColor} opacity= '0.5'  alt={frontPage}  borderRadius='1rem' pos='absolute' w={{base: '70%', lg:'35%'}}>
        <Box  display='flex' justifyContent='center'  gap='5rem' mt='2rem' mb='1rem'>
          <Text as='a' title='Code' href={flipped ? code : null}  cursor='pointer' target="_blank" rel="noopener noreferrer" color={IconBackgroundColor} w='6rem' h='6rem' fontSize='5rem' transition='all 0.5s' _hover={{fontSize:'6rem', }} > 
              <FaGithub  />
          </Text> 

          <Text w='100%' as='a' title='App' href={flipped ? production : null}  cursor='pointer' target="_blank" rel="noopener noreferrer" color={IconBackgroundColor}  h='6rem' fontSize='5rem' transition='all 0.5s' _hover={{fontSize:'6rem', }}>
              <FaDesktop />
          </Text>
        </Box>
        </AnimatedBox>
    </Box>
  )
}
