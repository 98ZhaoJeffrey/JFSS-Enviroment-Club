import React from "react";
import EmailForm from "../emailForm/emailForm"
import {
    Box,
    Stack,
    Image,
    Text,
    Center
}from "@chakra-ui/react"
import mail from "../../assets/newsletter.svg"

function Newsletter() {
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
            <Stack d="col" w={["100%", null, "40%"]}>
            <Text fontSize="24px" fontWeight="700" my="3rem" textAlign="left" w="75%" mx={["auto", null, "0"]}>
                Sign up for our enviromental newsletters created by fellow club members, emailed to you every few months. 
            </Text>
            <Center>
                <EmailForm />
            </Center>
            </Stack>
            <Center>
            <Box>
                <Image
                    src={mail}
                    alt="Newsletter"
                    boxSize={["0px","400px","400px","500px"]}
                />
            </Box>
            </Center>
        </Stack>
    )
}

export default Newsletter