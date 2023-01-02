import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { SoftSkillsItem } from './SoftSkillsItem'
import { useTranslation } from 'react-i18next';
import { animated, config, useSpring, useTrail } from 'react-spring';
import { FaClock } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const SoftSkills = ({animation}) => {

   const AnimateHeading = animated(Heading);
   const [t] = useTranslation("global");
   const softSkillsTraduction = t("about.softSkills")
   const softSkillSplit = softSkillsTraduction.split("  ")
   const data = [
      { key: '0', icon:<FaStar />, skill: softSkillSplit[0]},
      { key: '1', icon:<FaPeopleCarry />, skill: softSkillSplit[1]},
      { key: '2', icon:<FaClock />, skill: softSkillSplit[2]},
      { key: '3', icon:<FaBolt />, skill: softSkillSplit[3]},
     
    ]

  const trail = useTrail(data.length, { 
      from: animation && {  x:55, opacity: 0}, 
      to: animation && {x:0, opacity: 1},
      delay: window.innerWidth > 500 ? 1500 : 2000,
      config: config.slow
    });
  const spring = useSpring ({
      from: animation && {x:55, opacity: 0 },
      to: animation && {x:0, opacity: 1},
      config: config.slow,
      delay: 1300
    })

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
