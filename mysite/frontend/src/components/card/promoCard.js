import React from 'react';
import { 
    Box,
    Image,
    Text,
    Button,
    Badge
    } from "@chakra-ui/react"
import formatDate from './formatDate'

function PromoCard(props){
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
                src={props.promotions.photo}
                alt={props.promotions.photo_description}
            />
            <Box>
                <Box d="flex" alignItems="baseline">
                    <Text
                        fontSize="2xl"
                        fontWeight="700"
                        align="left"
                        m="1rem"
                    >
                        {props.promotions.title}
                    </Text>
                    <Badge 
                        colorScheme="red" 
                        fontSize = "1rem"
                        borderRadius="full" 
                        px="4"
                    >
                        Promotion
                    </Badge>
                </Box>
                <Text
                    fontWeight="700"
                    align="left"
                    ml="1rem"
                >
                    Date of Promotion: {formatDate(props.promotions.date)}
                </Text>
                <Text 
                noOfLines={[1,2,3]}
                align="left"
                margin="1rem"
                >
                    {props.promotions.description}
                </Text>
                <Button 
                    as="a" 
                    href={props.promotions.link}
                    target="_blank"
                    colorScheme="red"
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

export default PromoCard