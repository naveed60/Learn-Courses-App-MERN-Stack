import { Button, Container, Heading, HStack, Input,Stack,Text, VStack,Image } from '@chakra-ui/react';
import React, { useState } from 'react'

const Course = ({views,title,imageSrc,id,addToPlaylisthandler,creator,description,lectureCount})=> {
return (
    <VStack className='course' alignItems={['center','flex-start']}>
      <Image src={imageSrc} boxSize='60' objectFit='contain' />
      <Heading />
    </VStack>
)
}
const Courses = () => {
    const [keword, setkeywoed] = useState();
    const [category, setCategory] = useState();
    const categories = [
        'Web Development',
        'Artificial Inteligence',
        'Data Sceince',
        'Data Structure and Algo',
        'App development',
    ]
  return (
    <Container minHeight={'95vh'} maxWidth={'container.lg'} padding={'8'}>
        <Heading children={'All Courses'} m={'8'}/>
        <Input 
        value={keword}
        onChange={e => setkeywoed(e.target.value)}
        placeholder='Search Courses'
        type='text'
        focusBorderColor='yellow.500'
        height={'7vh'}
        />

        <HStack 
        overflowX={'auto'} 
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display:'none',
          }
        }}
        >
            {
                categories.map((item, index)=>(
                    <Button key={index} onClick={()=> setCategory(item)}minW={'60'}>
                        <Text children={item}/>
                    </Button>

                ))
            }
        </HStack>
        <Stack
        direction={['column','row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start','space-evenly']}
        alignItems={['center','flex-start']}
        />
        <Course
        title={'Sample1'}
        description={'Sample1'}
        views={23}
        imageSrc={'Sample1'}
        id={'Sample1'}
        creator={'Sample1 boy'}
        lectureCount={2}
        />
    </Container>
   
  )
}

export default Courses
