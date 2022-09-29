import React, {useRef, useEffect, useCallback} from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
// import styled from 'styled-components';
import { Box, Img, useColorModeValue } from '@chakra-ui/react';


export const ProyectoCarrusel = ({children}) => {

	// const navBackgroundColor = useColorModeValue(  'brand.darkBlue', 'brand.bone');
	const slideshow = useRef(null);

	const siguiente = () => {
        console.log(slideshow)
		// Comprobamos que el slideshow tenga elementos
		if(slideshow.current.children.length > 0){
			

			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `1000ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;
            console.log(tamañoSlide)
			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
			}

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transicion);

		}
	};
	
	const anterior = () => {
		console.log('Anterior');
		if(slideshow.current.children.length > 0){
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `1500ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}


	return (
		<Box pos='relative' w={{base:'100%', md:'70%'}} m='auto' mt='3rem'  borderRadius={{md:'2rem'}} userSelect='none' overflow='hidden'>

                <Box  color='brand.bone' zIndex={2}  display='flex' alignItems='center' pos='absolute'   h='100%'  _hover={{bg:'black', opacity: '0.5'}} borderTopLeftRadius='2rem' borderBottomLeftRadius='2rem'  onClick={anterior}>
                   <FaAngleLeft  fontSize='5rem'  />
                 </Box>
                 <Box  color='brand.bone' zIndex={2} display='flex' alignItems='center'  pos='absolute' right='0%' h='100%'  _hover={{bg:'black', opacity: '0.5'}} borderTopRightRadius='2rem' borderBottomRightRadius='2rem'  onClick={siguiente}>
                    <FaAngleRight fontSize='5rem'  /> 
                </Box>
			

			<Box  display='flex' flexWrap='nowrap'  ref={slideshow} >
                {children.map((imagen, index) => 

                                            <Box key={index} minWidth='100%'  transition='.3s ease all' pos='relative'  h='45rem'>
                                                    <Img  align='center' objectFit='cover' w='100%' h='40%'   src={imagen.image} key={index} ></Img>
                                            </Box>
                    )}
			</Box>
			
                
		</Box>
	);
}


