import React from "react";
import EmailUnsubForm from "../emailUnsub/emailUnsub"
import {
    Center
}from "@chakra-ui/react"

function Unsubscribe(){
    return(
        <Center mt="8rem">
            <EmailUnsubForm/>
        </Center>
    )
}

export default Unsubscribe