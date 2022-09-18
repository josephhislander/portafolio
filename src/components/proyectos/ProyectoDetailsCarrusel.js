import React, { useState, useCallback, CSSProperties, useEffect } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';


import { Box, Img } from '@chakra-ui/react';
import { animated, config, useSpring, useSpringRef } from 'react-spring';
// import { Carousel } from 'react-carousel-minimal';


export const ProyectoDetailsCarrusel = ({data}) => {
  
  const AnimatedBox = animated(Box);
  const AnimatedImg = animated(Img);
  const [imagenActual, setimagenActual] = useState(0);
  const cantidad = data?.length;


  const spring = useSpring({
    from:  {x:  -3},
    to:  {x: 0},
    config: { mass: 1, tension: 60, friction: 14 }	,
    loop: { reverse: true }
  })

  const spring2 = useSpring({
    from:  {x:  0},
    to:  {x: -3},
    config: { mass: 1, tension: 60, friction: 14 }	,
    loop: { reverse: true }
  })

  const spring3 = useSpring({
    from:  {opacity: 0, x: 100 },
    to:  {opacity: 1, x: 0},
    config: { mass: 1, tension: 60, friction: 14 }	,
    // loop: { reverse: true }
    // delay: 5000
  })


  if(!Array.isArray(data) || cantidad == 0) return;

  const siguienteImagen = () => {
    setimagenActual( imagenActual === cantidad - 1 ? 0 : imagenActual + 1 );
  }

  const anteriorImagen = () => {
    setimagenActual( imagenActual === 0  ? cantidad - 1 : imagenActual - 1 );
  }



  return (
    <Box display='flex' justifyContent='center' alignItems='center'  mt='2.5rem' userSelect='none' pr={{md:'15%'}} pl={{md:'15%'}} >
       
        <Box pos='relative' w='100%' h='45rem'  borderRadius={{md:'2rem'}}>
                                     
                                     
          <Box  zIndex={2}  display='flex' alignItems='center' pos='absolute'   h='100%'  _hover={{bg:'black', opacity: '0.5'}} borderTopLeftRadius='2rem' borderBottomLeftRadius='2rem'> 
                 <AnimatedBox style={spring} onClick={anteriorImagen}>
                   <FaAngleLeft  fontSize='5rem'  />
                 </AnimatedBox>
          </Box>

          <Box  zIndex={2} display='flex' alignItems='center'  pos='absolute' right='0%' h='100%'  _hover={{bg:'black', opacity: '0.5'}} borderTopRightRadius='2rem' borderBottomRightRadius='2rem' > 
              <AnimatedBox style={spring2} onClick={siguienteImagen}>
                <FaAngleRight fontSize='5rem'  /> 
              </AnimatedBox>
          </Box>
                                             
                {data.map((imagen, index) => 
                                          <Box >
                                        {imagenActual == index &&
                                          <AnimatedBox h='45rem' style={spring3}  >
                                                  <AnimatedImg  align='center' objectFit='cover' w='100%' h='100%' borderRadius={{md:'2rem'}}   src={imagen.image} key={index} ></AnimatedImg>
                                          </AnimatedBox>
                                         } 
                                          </Box>
                )}

          
                                         
        </Box> 
      
    </Box>

  )

}



  // const data = [
    
  //   {
  //     image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
  //     caption: "Darjeeling"
  //   },
  //   {
  //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
  //     caption: "San Francisco"
  //   },
  //   {
  //     image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
  //     caption: "Scotland"
  //   },
  //   {
  //     image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
  //     caption: "Darjeeling"
  //   },
  //   {
  //     image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
  //     caption: "San Francisco"
  //   },
  //   {
  //     image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
  //     caption: "Scotland"
  //   },
  //   {
  //     image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
  //     caption: "Darjeeling"
  //   }
  // ];


  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }
      {/* <Carousel
            data={data}
            time={5000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          /> */}
          // import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'
// import { Box, Img } from '@chakra-ui/react';



// // const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
// //   ({ style }) => <AnimatedBox style={{ ...style, background: 'lightpink' }}>A</AnimatedBox>,
// //   ({ style }) => <AnimatedBox style={{ ...style, background: 'lightblue' }}>B</AnimatedBox>,
// //   ({ style }) => <AnimatedBox style={{ ...style, background: 'lightgreen' }}>C</AnimatedBox>,
// // ]



// export const ProyectoDetailsCarrusel = ({Imgs}) => {

//   const AnimatedBox = animated(Box);
//   const AnimatedImg = animated(Img);

//   const pages = ['https://static.nationalgeographic.es/files/styles/image_3200/public/goes-r_suvi_december_15_2019_levels-1.png.webp?w=1450&h=816',
//   'https://static.nationalgeographic.es/files/styles/image_3200/public/goes-r_suvi_december_15_2019_levels-1.png.webp?w=1450&h=816'];

//     const [index, set] = useState(0)
//     const onClick = useCallback(() => set(state => (state + 1) % 3), [])
//     const transRef = useSpringRef()
//     const transitions = useTransition(index, {
//       ref: transRef,
//       keys: null,
//       from: { opacity: 0, x: 0 },
//       enter: { opacity: 1, x: 0 },
//       leave: { opacity: 0, x: 0 },
//     })
//     useEffect(() => {
//       transRef.start()
//     }, [index])

//   return (
//     <Box m='auto'  bg='orange' w='100%' h='500px' pos='relative'>
//       <Box position='absolute'  w='500px' h='20rem' onClick={onClick} display='flex' justifyContent='center' alignItems='center' bg='teal'>
//               {transitions((style, i) => {
//                   const Page = pages[i];
//                   console.log(i)
//                   return <AnimatedImg objectFit='cover' style ={style} src={Page} ></AnimatedImg >
//               })}
//       </Box>
//     </Box>
//   )
// }

// import React, { useState, useCallback, CSSProperties, useEffect } from 'react'
// import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

// import styles from './styles.module.css'

// const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
//   ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
// ]

// export const ProyectoDetailsCarrusel = () => {
//   const [index, set] = useState(0)
//   const onClick = useCallback(() => set(state => (state + 1) % 3), [])
//   const transRef = useSpringRef()
//   const transitions = useTransition(index, {
//     ref: transRef,
//     keys: null,
//     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//   })
//   useEffect(() => {
//     transRef.start()
//   }, [index])
//   return (
//     <div className={`flex fill ${styles.container}`} onClick={onClick}>
//       {transitions((style, i) => {
//         const Page = pages[i]
//         return <Page style={style} />
//       })}
//     </div>
//   )
// }