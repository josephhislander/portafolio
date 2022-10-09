import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }

const colors = {
    colors: {
      brand: {
        white: "#F6FAFF",
        bone: "#EEEEEE",
        gray: "#707070",
        black: "#191919",
        lightBlue: "#BBE1FA",
        blue: "#2D4263",
        darkBlue: "#1B262C",
        sun: '#ac7d03'
      },
    }
  } 

const customComponents = {
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        },
        _Hover:{
          bg:'none'
        } 
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
      }
      ,
    },
    Heading: {
      baseStyle: {
        fontSize: '2rem',
        fontFamily: 'Roboto Slab, Arial',
    },
    sizes: {
      xl: {
        fontSize: '2rem'
      },
    }},
    Text:{
      baseStyle:{
        fontSize: '1.8rem'
      }
    },
    
  },
}

const body = {
    styles: {
      global: (props) => ({
        body: {
          fontFamily: 'Roboto Slab, Arial',
          color: mode('#1B262C', '#EEEEEE')(props),
          bg: mode('#EEEEEE', '#1B262C')(props),
          lineHeight: 'base',
          fontSize:'1.8rem'
        },
        html: {
          fontSize: '10px',
        }
      }),
    },
  }

export const theme = extendTheme(config, colors, body, customComponents)



