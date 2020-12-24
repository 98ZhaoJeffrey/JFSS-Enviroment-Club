import React from "react";
import EmailForm from "../emailForm/emailForm"
import {
    //Box,
    Flex,
    //Center
}from "@chakra-ui/react"

function Newsletter() {
    return(
        <Flex 
            direction="row"
        >
            <EmailForm/>
        </Flex>
    )
}

export default Newsletter