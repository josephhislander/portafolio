import React from 'react'

export const WelcomeMain = () => {

  return (

    <Box>

        { window.innerWidth >= 500
            ?
            <Box>
              {/* <ParticlesBackground   /> */}
              <Welcome toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}  />
            </Box>
            : (window.innerWidth <= 500 && toggleMenu) ?
            <Box>
            
              <WelcomeEmpty/>
            </Box>
    
            :
            <Box>
              {/* <ParticlesBackground   /> */}
              <Welcome toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}  />
            </Box>
          
          }
    </Box>
  )
}
