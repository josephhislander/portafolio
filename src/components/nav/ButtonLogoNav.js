import { Box } from '@chakra-ui/react';
import React from 'react';
import { animated, easings, useSpring } from 'react-spring';
import { Logo } from './Logo';


export const 
ButtonLogoNav = ({setToggleMenu, toggleMenu, setCancel, Cancel}) => {

    const AnimatedBox = animated(Box);
    const spring = useSpring({
        from:{ opacity: 0, rotateZ: 0 },
        to:{ opacity: 1, rotateZ: 360 },
        config : { mass: 1, tension: 280, friction: 60 , easing: easings.easeInElastic, },
      })

    return(
        <Box ml='2rem' mt='2rem'    pos='fixed' > 
            <AnimatedBox style={spring}>
                        <Logo Cancel={Cancel} setCancel={setCancel} setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
            </AnimatedBox>
        </Box>


    )
}