import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const LinkButton = ({url ='/', title = 'Home',onClose}) => (
    <Link onClick={onClose} to={url} >
    <Button variant={'ghost'}> {title}</Button>
    </Link>
)
function Header() {
    const {isOpen,onClose,onOpen} = useDisclosure();
    const isAuthenticated = true;
    const user = {role: 'admin'}

    const logoutHandler = () => {
        console.log("logoutHandler")
        onClose();
    }
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
                    <LinkButton onClose={onClose} url="/" title="Home"/>
                    <LinkButton onClose={onClose} url="/courses" title="Browse All Courses"/>
                    <LinkButton onClose={onClose} url="/request" title="request a Course"/>
                    <LinkButton onClose={onClose} url="/contact" title="Contact Us"/>
                    <LinkButton onClose={onClose} url="/about" title="About"/>
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
                    <Link onClose={onClose} to={'/profile'}>
                    <Button variant={'ghost'} colorScheme='yellow'>
                        Profile
                    </Button>
                    </Link>
                 <Button variant={'ghost'} colorScheme='yellow' onClick={logoutHandler}>
                    <RiLogoutBoxLine />
                    Logout
                  </Button>
                </HStack>
                { user && user.role === 'admin' && (
                    <Link onClose={onClose}>
                    <Button onClose={onClose} colorScheme='purple' variant={'ghost'} >
                        <RiDashboardFill style={{margin:'8px' }} />
                        Dashboard

                    </Button>
                    </Link>
                )

                }
                </VStack>

                </>
                ) : (
                 <>
                 <Link onClose={onClose} to={'/login'}>
                 <Button  colorScheme='yellow'>Login</Button>
                 </Link>
                 <p>OR</p>
                 <Link onClose={onClose} to={'/register'}>
                 <Button  colorScheme='yellow'>Sign Up</Button>
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
