import React from 'react';
import { 
    Box,
    Image,
    Text,
    Button,
    Badge
    } from "@chakra-ui/react"
import formatDate from './formatDate'


function ResourceCard(props){
    return(
        <Box 
            maxW="sm" 
            borderWidth="2px" 
            borderRadius="lg" 
            overflow="hidden"
            boxShadow="2xl"
            background="#E2E8F0"
        >
            <Image
                src={props.resource.photo}
                alt={props.resource.photo_description}
            />
            <Box>
                <Box d="flex" alignItems="baseline">
                    <Text
                        fontSize="2xl"
                        fontWeight="700"
                        align="left"
                        m="1rem"
                    >
                        {props.resource.title}
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
                    Date Created: {formatDate(props.resource.date)}
                </Text>
                <Text 
                noOfLines={[1,2,3]}
                align="left"
                margin="1rem"
                >
                    {props.resource.description}
                </Text>
                <Button 
                    as="a" 
                    href={props.resource.link}
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

export default ResourceCard