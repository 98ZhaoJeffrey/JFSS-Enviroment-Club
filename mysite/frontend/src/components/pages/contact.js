import React from "react";
import {
    Box,
    Stack,
    Button,
    Image,
    Text,
    Heading,
    Flex,
    Center,
    Spacer,
    ButtonGroup
} from "@chakra-ui/react"
import { FaInstagram } from "react-icons/fa"
import contact from "../../assets/contact.svg"

function Contact() {
    return(
        <Stack 
            h="100vh"
            w="100%"
            direction={["column","column","row"]}
            background="#2D3748"
            alignContent="center"
            justifyContent="center"
            spacing={["0","2rem","5rem","10rem"]} 
        >
            <Box alignItems="left" mt="8rem">
                <Heading color="#ffffff" as="h1" size="4xl" m="auto" my="40px">Contact Us</Heading>
                <Text fontSize="3xl" color="#ffffff" align="left" textAlign="center" my="40px">Got any questions? Feel free to reach out to us.</Text>
                <Flex direction ="row" margin="auto">
                        <Button
                            size="lg"  
                            colorScheme="purple" 
                            leftIcon = {<FaInstagram/>} 
                            as="a" 
                            target="_blank" 
                            href="https://www.instagram.com/jfssenviroclub/ "
                            isFullWidth="true"
                            h="65px"
                            fontSize="1.5rem"
                            padding="1rem"
                        > 
                            Our Club
                        </Button>
                </Flex>
                <Text fontSize="3xl" color="#ffffff" my="40px">Message one of our admins for a faster response. (Not Khushi)</Text>
                <ButtonGroup variant="outline" spacing="6">
                        <Button
                            size="lg" 
                            colorScheme="purple" 
                            leftIcon = {<FaInstagram/>} 
                            as="a" 
                            target="_blank" 
                            href="https://www.instagram.com/jinglei.h/"
                            h="65px"
                            fontSize="1.5rem"
                        > 
                            Jinglei
                        </Button>
                        <Spacer/>
                        <Button
                            size="lg" 
                            colorScheme="purple" 
                            leftIcon = {<FaInstagram/>} 
                            as="a" 
                            target="_blank" 
                            href="https://www.instagram.com/khushi.niranjan/"
                            h="65px"
                            fontSize="1.5rem"
                        > 
                            Khushi
                        </Button>
                </ButtonGroup>
            </Box>
            <Center>
                <Image
                    src={contact}
                    alt="homeImage"
                    boxSize={["0px","250px","400px","500px"]}
                    align="center"
                >
                </Image>
            </Center>
        </Stack>
    )
}

export default Contact