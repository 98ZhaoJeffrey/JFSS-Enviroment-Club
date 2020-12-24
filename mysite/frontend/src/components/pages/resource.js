import React, {useEffect} from "react";
import Card from  "../card/card"
import {
    Box,
//    Button,
 //   Stack,
 //   Text,
  //  Heading
} from "@chakra-ui/react"


function Resource() {
    useEffect(() => {
        console.log("Getting data for resources")
        fetch('http://127.0.0.1:8000/api/resource-list/')
        .then(res => res.json())
        .then(data => console.log(data))
    })
    return(
        <Box>
            <Card/>
        </Box>
    )
}

export default Resource