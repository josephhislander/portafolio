import React from 'react'
import { Box } from '@chakra-ui/react'
import { ParticlesBackground } from './particles/ParticlesBackground'
import { Welcome } from './Welcome'

export const HomeMain = () => {
  return (
    <Box id='home' pos='relative' zIndex={-1} >
        <ParticlesBackground   />
        <Welcome  />
    </Box>
  )
}
