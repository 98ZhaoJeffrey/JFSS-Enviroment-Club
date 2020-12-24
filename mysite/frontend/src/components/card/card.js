import React from 'react';
import { 
    Box,
    Image,
    Text,
    Button,
    Badge
    } from "@chakra-ui/react"
//import logo from "../../assets/logo.svg"

function Card(props){
    return(
        <Box 
            maxW="sm" 
            borderWidth="2px" 
            borderRadius="lg" 
            overflow="hidden"
            boxShadow="md"
            background="#E2E8F0"
        >
            <Image
                src={'../../img/resources/1.png'}
                alt={'Image for [Insert resource name]'}
            />
            <Box>
                <Box d="flex" alignItems="baseline">
                    <Text
                        fontSize="2xl"
                        fontWeight="700"
                        align="left"
                        m="1rem"
                    >
                        {props.title}
                    </Text>
                    <Badge 
                        colorScheme="green" 
                        fontSize = "1rem"
                        borderRadius="full" 
                        px="4"
                    >
                        Resource
                    </Badge>
                </Box>
                <Text
                    fontWeight="700"
                    align="left"
                    ml="1rem"
                >
                    Date: {props.date}
                </Text>
                <Text 
                noOfLines={[1,2,3]}
                align="left"
                margin="1rem"
                >
                    Hey guys! While you’re shopping for the holidays make 
                    sure you check out some of these awesome sustainable brands! 
                    A new brand will be featured each day of this week:) 🛍🌱
                </Text>
                <Button 
                    as="a" 
                    href="https://www.instagram.com/p/CJE_b18BN6M/"
                    target="_blank"
                    colorScheme="green"
                    align="left"
                    m="1rem"
                    display="block"
                    textAlign="center"
                    padding="0.6em"
                >
                    Read More
                </Button>
            </Box>
        </Box>
    )
}

export default Card