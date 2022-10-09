import React from 'react'
import { Box } from '@chakra-ui/react'
import { ParticlesBackground } from './particles/ParticlesBackground'
import { Welcome } from './Welcome'
import { WelcomeEmpty } from './WelcomeEmpty'

export const HomeMain = ({toggleMenuM, setToggleMenuM}) => {
  return (
    <Box id='home' pos='relative' zIndex={-1} >
       <ParticlesBackground   />
        { window.innerWidth >= 500
          ?
          <Box>
            <Welcome toggleMenuM={toggleMenuM} setToggleMenu={setToggleMenuM}  />
          </Box>
          : (window.innerWidth <= 500 && toggleMenuM) ?
          <Box>
            <WelcomeEmpty/>
          </Box>
          :
          <Box>
            <Welcome toggleMenuM={toggleMenuM} setToggleMenuM={setToggleMenuM}  />
          </Box>
        }
    </Box>
  )
}
