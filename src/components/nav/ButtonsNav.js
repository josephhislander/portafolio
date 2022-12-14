import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { Logo } from './Logo';
import { useSpring, animated, config, easings} from 'react-spring';
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';


export const ButtonsNav = ({ toggleMenuM, setToggleMenuM,setToggleMenu, toggleMenu,lenguage, setLenguage }) => {

  const [t, i18n] = useTranslation("global");

  const { colorMode, toggleColorMode } = useColorMode();
  const botonFuenteColor = useColorModeValue( 'brand.blue','brand.bone');
  const navBackgroundColor = useColorModeValue( 'brand.bone', 'brand.darkBlue');
  const navBackgroundColorTrans = useColorModeValue( '#EEEEEEB3','#191919B3' );
  const AnimatedButton = animated(Button);
  const AnimatedBox = animated(Box);
  const AnimatedStack = animated(Stack);
  const buttonstraduction =   t("home.navButtons");
  const buttons = buttonstraduction.split("  ");
  const sections = ['home','about','proyectos','contacto'];


  
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
    from:  { opacity: 0, rotateZ: 0 },
    to:  { opacity: 1, rotateZ: 360 },
    delay: 2000,
    config : { mass: 1, tension: 280, friction: 60 , easing: easings.easeInElastic, },
  })

  const lenguageControl = () => {
    setLenguage(!lenguage);
    lenguage ? i18n.changeLanguage("en")
            : i18n.changeLanguage("es")
  }


  const handleToggleMenuMovil = () => {
      setToggleMenuM(false)
      setToggleMenu(!toggleMenu); 

  }

  return (
      <Box  pos="fixed"  bg={{base: navBackgroundColorTrans, md:  navBackgroundColor}}  display='flex' flexDirection={{base:'column', md:'row'}} flexGrow={{base:'1', md:'0'}} justifyContent={{base:'space-between'}} h={{base: '100vh', md: 'auto'}}  w='100%'    boxShadow='md'    p='2rem'  zIndex={1000}>

        <AnimatedBox w={{base:'10rem', md:'auto'}}   style={ toggleMenuM ? props3 : {border: 'none'} }>
          <Logo  toggleMenuM={toggleMenuM} setToggleMenuM={setToggleMenuM}  setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
        </AnimatedBox>
        {/* style={{base: {border: 'none'}, md: (toggleAnimation && props)}}  */}
        <AnimatedStack    direction={{base:'column', md:'row'}} justifyContent={{base:'space-around', md:'initial'}} m={{md:'2rem'}}  fontFamily='Roboto Slab, Time new romans' spacing={{base:'5rem', md:'3rem'}}  flexGrow='1'  >
              {
                buttons.map((button, index) =>  <AnimatedButton   style={ toggleMenuM ? props : {border: 'none'}} variant='ghost' color={botonFuenteColor} fontSize= '2.3rem' key={index} >

                
                  <Link
                    activeClass="active"
                    to={sections[index]}
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={1000}
                    onClick={ handleToggleMenuMovil}
                  > 
                    {button}
                  </Link>

                </AnimatedButton > )
              }
        </AnimatedStack>

        <Stack direction='row'  justifyContent='center'  align='center' flexGrow={{base:'1', md:'0'}}>
              <AnimatedButton style={toggleMenuM ? props2 :{border: 'none'}} onClick={toggleColorMode} variant='ghost' border='none' fontSize='2.3rem'>
              {colorMode === 'light' ? <FiSun  color='#ac7d03' /> : <FiMoon  color='#707070' __focus={{borde : 'none'}}/> }
              </AnimatedButton>
              <AnimatedButton w='2rem' color='#707070' style={toggleMenuM ? props2 :{border: 'none'}} onClick={lenguageControl}  variant='ghost' border='none' fontSize='2rem'>
              {lenguage ? 'Es': 'En'}
              </AnimatedButton>
        </Stack>
    </Box>
  )
}
