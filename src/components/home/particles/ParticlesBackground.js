import React, { useCallback} from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { animated, useSpring, config } from "react-spring";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConfig } from "./particleConfig";
 
export const ParticlesBackground= () => {

  const particlesColor = useColorModeValue( '#1B262C', '#eeeeee' )

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  
  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const props = useSpring({
    from: { opacity: 0, x:0},
    to: { opacity: 1},x: 1000,
    // reset: true,
    // reverse: flip,
    delay: 2000,
    config : config.default,
    // onRest: () => set(!flip),
  })

  const AnimatedBox = animated(Box);

  return( 
  <AnimatedBox style={props} width="100%" height='100vh'>
    <Particles  width="100%" height='100vh' init={particlesInit} options={ particlesConfig(particlesColor)}  loaded={particlesLoaded}  />  
  </AnimatedBox>)


}
 
