import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { SoftSkillsItem } from './SoftSkillsItem'
import { FaClock } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { animated, config, useSpring, useTrail } from 'react-spring';

export const SoftSkills = ({animation}) => {

    const data = [
      { key: '1', icon:<FaStar />, skill: 'Resolución de problemas'},
      { key: '2', icon:<FaPeopleCarry />, skill: 'Trabajo en equipo'},
      { key: '3', icon:<FaClock />, skill: 'Responsabilidad'},
      { key: '4', icon:<FaBolt />, skill: 'Adaptabilidad'},
      { key: '5', icon:<FaHandshake />, skill: 'Honestidad'},
    ]

    const trail = useTrail(data.length, { 
      from: animation && {  x:150, opacity: 0}, 
      to: animation && {x:0, opacity: 1},
      delay: 1500,
      config: config.slow
    });

    const spring = useSpring ({
      from: animation && {x:100, opacity: 0 },
      to: animation && {x:0, opacity: 1},
      config: config.slow,
      delay: 1300
    })

    const AnimateHeading = animated(Heading);
  
  return (
    <Box mt={{base:'3rem', lg:'0'}}  >
      { animation &&
        <Box  display='flex' flexDirection='column' alignItems='stretch'>
         <AnimateHeading style={spring} align='center' > SoftSkills</AnimateHeading>
          { trail.map((item, i) => <SoftSkillsItem  style={item}  icon={data[i].icon}  skill={data[i].skill}  key={i}  />
            )}
        </Box>
      }
    </Box>
  )
}
