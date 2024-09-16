import { Button, Container, Heading, HStack, Input,Stack,Text, VStack,Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { addToPlaylist } from '../../redux/actions/profile';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
})=> {
return (
    <VStack className='course' alignItems={['center','flex-start']}>
      <Image src={imageSrc} boxSize='60' objectFit='contain' />
      <Heading 
       textAlign={['center', 'left']}
       maxW="200px"
       size={'sm'}
       fontFamily={'sans-serif'}
       noOfLines={3}
       children={title}
      />
       <Text noOfLines={2} children={description} />

        <HStack>
          <Text
            fontWeight={'bold'}
            textTransform="uppercase"
            children={'Creator'}
          />

          <Text
            fontFamily={'body'}
            textTransform="uppercase"
            children={creator}
          />
        </HStack>
        <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
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
