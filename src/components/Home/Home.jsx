import React from 'react';
import { Flex, Heading, Stack, VStack,Text, Link, Button,Image, Box, HStack } from '@chakra-ui/react';
import './Home.css';
import vg from "../../assets/images/bg8.png";
import {CgGoogle,CgYoutube} from "react-icons/cg";
import {SiCoursera, SiUdemy} from 'react-icons/si';
import {DiAws} from "react-icons/di";
import introVideo from '../../assets/videos/intro.mp4'

function Home() {
  return (
    <section className='home'>
      <div className="container">
        <Stack
          direction={['column','row']}
          height="100%"
          justifyContent={["center","space-between"]}
          alignItems="center"
          spacing={["16","56"]}
          >
          <VStack width={"full"} alignItems={["center","flex-center"]}>
            <Heading children="ONLINE COURSES LEARNING" />
            <Text children="Find very impressive content to learn new technologies"/>
            <Link to="/courses"/>
            <Button size={"lg"} colorScheme='yellow'>
            Explore Now
                </Button>
          </VStack>
          <Image className='vector-graphics' boxSize={'xl'} width={'-moz-max-content'} src={vg} objectFit="contain"/>
        </Stack>
      </div>
      <Box padding={'8'} bg='blackAlpha.800'>
        <Heading textAlign={'center'} fontFamily={'body'} color={'yellow.500'} children='OUR BRANDS'/>
        <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={'4'}>
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>
        </HStack>
      </Box>
      <div className="container2">
        <video 
        autoPlay 
        controls
        controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}>
        </video>
      </div>
    </section>
  )
}

export default Home
