import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const LinkButton = ({url ='/', title = 'Home'}) => (
    <Link to={url} >
    <Button variant={'ghost'}> {title}</Button>
    </Link>
)
function Header() {
    const {isOpen,onClose,onOpen} = useDisclosure();
    const isAuthenticated = false;
  return (
    <>
    <ColorModeSwitcher/>
    <Button
    onClick={onOpen}
    colorScheme='yellow'
    width="12"
    height="12"
    rounded="full"
    position={'fixed'}
    top="6"
    left="6"
    >
     <RiMenu5Fill/>
    </Button>
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader borderBottom={'1px'}>COURSE BUNDLER</DrawerHeader>
            <DrawerBody>
                <VStack spacing={'4'} alignItems={'flex-start'}>
                    <LinkButton url="/" title="Home"/>
                    <LinkButton url="/courses" title="Browse All Courses"/>
                    <LinkButton url="/request" title="request a Course"/>
                    <LinkButton url="/contact" title="Contact Us"/>
                    <LinkButton url="/about" title="About"/>
                </VStack>
                <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width='80%'
                >
                {isAuthenticated ? (
                <>
                <VStack>
                  <HStack>
                    <Link to={'/profile'}>
                    <Button variant={'ghost'} colorScheme='yellow'>
                        Profile
                    </Button>
                    </Link>
                 <Button variant={'ghost'} colorScheme='yellow'>
                    <RiLogoutBoxLine />
                    Logout
                  </Button>
                </HStack>
                { user && user.role === 'admin' && (
                    <Link>
                    <Button >
                        <RiDashboardFill />

                    </Button>
                    </Link>
                )

                }
                </VStack>

                </>
                ) : (
                 <>
                 <Link to={'/login'}>
                 <Button colorScheme='yellow'>Login</Button>
                 </Link>
                 <p>OR</p>
                 <Link to={'/register'}>
                 <Button colorScheme='yellow'>Sign Up</Button>
                 </Link>
                 </>
                )

                }

                </HStack>

            </DrawerBody>
        </DrawerContent>
        <DrawerHeader/>
    </Drawer>
    </>
  )
}

export default Header
