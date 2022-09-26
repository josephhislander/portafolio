import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { Logo } from './Logo';
import { useSpring, animated, config, easings} from 'react-spring';
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';


export const ButtonsNav = ({setToggleMenu, toggleMenu, toggleAnimation, setToggleAnimation, Cancel,lenguage, setLenguage }) => {

  const [t, i18n] = useTranslation("global");
 
  const [animationCancel, setAnimationCancel] = useState(true)
  const { colorMode, toggleColorMode } = useColorMode();
  const botonFuenteColor = useColorModeValue( 'brand.blue','brand.bone');
  const navBackgroundColor = useColorModeValue( 'brand.bone', 'brand.darkBlue');
  const navBackgroundColorTrans = useColorModeValue( '#EEEEEEB3','#191919B3' );
  const AnimatedButton = animated(Button);
  const AnimatedBox = animated(Box);
  const AnimatedStack = animated(Stack);
  // const buttons = ['INICIO','ACERCA DE MI','PROYECTOS','CONTACTO'];
  const buttonstraduction =   t("home.navButtons");
  const buttons = buttonstraduction.split("  ");
  const sections = ['home','about','proyectos','contacto'];
  // console.log(buttonSplit)

  useEffect(() => {
    // console.log(buttons1)
    const handleScroll = ( ) => { 
        setAnimationCancel(false);
  }
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
}

  }, [])
  
  const props = useSpring({
    from: { x: -1000, opacity: 0},
    to: { x: 0, opacity: 1},
    delay: 1000,
    config : config.slow
  })

  const props2 = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    delay: 2500,
    config : config.slow
  })

  const props3 = useSpring({
    from: { opacity: 0, rotateZ: 0 },
    to: { opacity: 1, rotateZ: 360 },
    delay: 2000,
    config : { mass: 1, tension: 280, friction: 60 , easing: easings.easeInElastic, },
  })

  const lenguageControl = () => {
    setLenguage(!lenguage);

    lenguage ? i18n.changeLanguage("en")
            : i18n.changeLanguage("es")
  }

  return (
      <Box  pos="fixed"  bg={{base: navBackgroundColorTrans, md:  navBackgroundColor}}  display='flex' flexDirection={{base:'column', md:'row'}} flexGrow={{base:'1', md:'0'}} justifyContent={{base:'space-between'}} h={{base: '100vh', md: 'auto'}}  w='100%'    boxShadow='md'    p='2rem'  >

      <AnimatedBox w={{base:'10rem', md:'auto'}}   style={ props3 }>
         <Logo    setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      </AnimatedBox>

      <AnimatedStack  style={{base: {border: 'none'}, md: (toggleAnimation && props)}}   direction={{base:'column', md:'row'}} justifyContent={{base:'space-around', md:'initial'}} m={{md:'2rem'}}  fontFamily='Roboto Slab, Time new romans' spacing={{base:'10rem', md:'3rem'}}  flexGrow='1' pt={{base:'3rem', md:'initial'}} >
            {
              buttons.map((button, i) =>  <AnimatedButton   style={props} variant='ghost' color={botonFuenteColor} fontSize= '2.3rem' key={i} >


                 <Link
                  activeClass="active"
                  to={sections[i]}
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={1000}
                > 
                  {button}
                </Link>

              </AnimatedButton> )
            }
      </AnimatedStack>

      <Stack direction='row'  justifyContent='center'  align='center' flexGrow={{base:'1', md:'0'}}>
            <AnimatedButton style={toggleAnimation ? props2 :{border: 'none'}} onClick={toggleColorMode} variant='ghost' border='none' fontSize='2.3rem'>
            {colorMode === 'light' ? <FiSun  color='#ac7d03' /> : <FiMoon  color='#707070' __focus={{borde : 'none'}}/> }
            </AnimatedButton>
            <AnimatedButton w='2rem' color='#707070' style={toggleAnimation ? props2 :{border: 'none'}} onClick={lenguageControl}  variant='ghost' border='none' fontSize='2rem'>
            {lenguage ? 'Es': 'En'}
            </AnimatedButton>
      </Stack>
    </Box>
  )
}
