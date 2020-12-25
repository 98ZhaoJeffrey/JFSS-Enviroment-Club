import React, {useState, useEffect} from "react";
import ResourceCard from  "../card/resourceCard"
import {
    Box,
    SimpleGrid,
    Center,
    Heading
} from "@chakra-ui/react"

function Resource() {
    const [resources, setResources] = useState([])

    useEffect(() => {
        console.log("Getting data for resources")
        fetch('http://127.0.0.1:8000/api/resource-list/')
        .then(res => res.json())
        .then(data =>{
            setResources(data)  
        } )
    }, [])

    const resourceComponent = resources.map(r => <ResourceCard key={r.id} resource = {r}/>)
    const displayHeading = resources.length > 0? "None" : "Block"
    return(
        <Center>
        <Box my="3rem">
            <Heading display={displayHeading}>
                There doesn't seem to be anything here at the moment. You should come back later.
            </Heading>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={["1rem", "2rem", "2rem", "3rem"]}>
            {resourceComponent}
            </SimpleGrid>
        </Box>
        </Center>
    )
}

export default Resource