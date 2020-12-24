import React from "react";
import { 
    Box,
    Center,
    Image,
    Heading,
    Text,
    Button,
    Stack
    } from "@chakra-ui/react"
import homelogo from "../../assets/homelogo.svg"
import { FaInstagram } from "react-icons/fa"

function Home() {
    return(
        <Stack
            h="100%"
            w="100%"
            direction={["column","column","row"]}
            alignContent="center"
            justifyContent="center"
            spacing={["0","0","5rem","10rem"]}
            mt="6rem"
        >
            <Box mt="5rem">
                <Box mx="20px">
                    <Heading as="h1" size="4xl" my="40px" textAlign={["center","center","left","left"]}>JFSS
                        <span style={{color: "#48BB78"}}> Enviromental Club</span>
                    </Heading>
                    <Text fontSize="3xl" my="40px" textAlign={["center","center","left","left"]}>Go Green, there is no Planet B</Text>
                    <Button
                        size="lg" 
                        colorScheme="green" 
                        leftIcon = {<FaInstagram/>} 
                        as="a" 
                        href="/contact"
                        isFullWidth='true'
                    > 
                        Got a question? Contact us!
                    </Button>
                </Box>
            </Box>
            <Center>
                <Image
                    display = {['None','Block','Block','Block']}
                    src={homelogo}
                    alt="homeImage"
                    boxSize={["0px","400px","400px","500px"]}
                >
                </Image>
            </Center>
        
        </Stack>
    )
}

export default Home

