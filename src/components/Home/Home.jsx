import React from 'react'
import { Flex, Heading, Stack, VStack,Text, Link, Button } from '@chakra-ui/react'
import './Home.css'
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
     ></Stack>
     <VStack width={"full"} alignItems={["center","flex-center"]}>
        <Heading children="MERN STACK LEARNING"/>
        <Text children="Find very impressive content to learn new technologies"/>
        <Link to="/courses"/>
         <Button size={"lg"} colorScheme='yellow'>
         Explore Now
            </Button>
     </VStack>

        </div>
    </section>
  )
}

export default Home
