import React from 'react'
import './navbar.css' 
import { 
    Button, 
    Flex , 
    Box, 
    Link, 
    Spacer,    
    Drawer, 
    DrawerBody, 
    DrawerFooter, 
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Avatar,
    } from "@chakra-ui/react"
import { FaBars} from "react-icons/fa"
import { useDisclosure } from "@chakra-ui/react"
import logo from "../../assets/logo.svg"

function Navbar(){

    const { isOpen, onOpen, onClose } = useDisclosure()

        return(
            <Flex
                h="100px" 
                width="100%" 
                direction="row"
                justify="space-between" 
                align="center"
                boxShadow="base"
            >
            <Flex
                direction='row'
                justify='center'
                align='center'
            >
                <Box className ='Logo'>
                    <Avatar 
                        as="a" 
                        href ="/"
                        src={logo}
                        name="JFSS"
                        bg="white"
                        size="xl"
                        onClick={()=> console.log('hi')}
                    >
                    </Avatar>
                </Box>
            </Flex>
            <Spacer />                     
            <Box 
                className='navbar-items' 
                alignItems='center'
                display={['None', 'None','Flex','Flex']}
            >
                <ul alignitems='center'>
                    <li className="navbar-link">
                        <Link href='/resources'>Resources</Link>
                    </li>
                    <li className="navbar-link">
                        <Link href='/promotions'>Promotions</Link>
                    </li>
                    <li className="navbar-link">
                        <Link href='/newsletter'>Newsletter</Link>
                    </li>
                </ul>                       
                <Button as="a" colorScheme="green" m="1rem" href = "/contact">
                    Contact Us
                </Button> 
            </Box>
            <Box
                display={['Flex','Flex', 'None', 'None']}
                mr="30px"
                padding="10px"
                onClick={onOpen}
                borderWidth="1px" 
                borderRadius="lg"
                background="#CBD5E0"
            >
                <FaBars size="24px"></FaBars>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                >
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Feel free to explore!</DrawerHeader>
                            <DrawerBody>
                                <VStack>
                                    <Link href='/resources'>Resources</Link>
                                    <Link href='/promotions'>Promotions</Link>
                                    <Link href='/newsletter'>Newsletter</Link>
                                    <Button as="a" colorScheme="green" href = "/contact">Contact Us</Button> 
                                </VStack>
                            </DrawerBody>
                            <DrawerFooter fontWeight="700" textAlign="center">JFSS Enviroment Club 2020</DrawerFooter>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Box>
        </Flex>
    )
}


export default Navbar