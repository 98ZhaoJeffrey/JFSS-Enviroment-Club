import React, {useState, useEffect} from "react";
import PromoCard from '../card/promoCard'
import {
    Box,
    SimpleGrid,
    Center,
    Heading
} from "@chakra-ui/react"

function Promotions() {
    const [promotions, setPromotions] = useState([])

    useEffect(() => {
        const currLink = window.location.href.split('/')
        const url = currLink[0] + '//' + currLink[2] + '/api/promo-list/'
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setPromotions(data)  
        } )
    }, [])
    const promoComponent = promotions.map(p => <PromoCard key={p.id} promotions = {p}/>)
    const displayHeading = promotions.length > 0? "None" : "Block"
    return(
        <Center>
        <Box my="3rem">
            <Heading display={displayHeading}>
                There doesn't seem to be anything here at the moment. You should come back later.
            </Heading>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={["1rem", "2rem", "2rem", "3rem"]}>
            {promoComponent}
            </SimpleGrid>
        </Box>
        </Center>
    )
}

export default Promotions