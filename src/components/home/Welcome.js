import { Box, Text, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';

export const Welcome = () => {

  const FuenteColor = useColorModeValue( 'brand.blue','brand.bone');
	const el = useRef(null);
  const typed = useRef(null);
  
    useEffect(() => {
      let options;
      if(window.innerWidth > 700) {
        options = {
            strings: [
            'Hola! soy Joseph, web developer',
            'Hola! soy Joseph, software developer'
          ],
          typeSpeed: 50,
          backSpeed: 50,
        };
      } else {
        options = {
          strings: [
          'Hola! soy Joseph \n web developer',
          'Hola! soy Joseph \n software developer'
        ],
        typeSpeed: 70,
        backSpeed: 70,
      };
      }

      const timer = setTimeout(() => {
        typed.current = new Typed(el.current, options);
      }, 3000);
      // elRef refers to the <span> rendered below
      
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        clearTimeout(timer)
        typed.current.destroy();
      }
    }, [])

    return (
        
            <Box className="type-wrap"   pos='absolute' top='75%'  w='100%'  color={FuenteColor}  >
                  <Text  fontFamily='Anonymous Pro, Time new romans' fontSize={{base:'30px',md:'30px'}} align='center' >
                      <span style={{ whiteSpace: 'pre' }} ref={el}></span>    
                  </Text>       
            </Box>


      );
    }
    
    // ReactDOM.render(
    //     <TypedReactHooksDemo />,
    //   document.getElementById('react-root')
    // );

