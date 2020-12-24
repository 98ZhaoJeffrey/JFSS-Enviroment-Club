import React, { useState } from 'react';
import './emailForm.css' 
import {
    Box, 
    Button, 
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    VStack,
    useToast
    } from "@chakra-ui/react"

function getTime5SecondsAgo(){
    let dateNow = new Date();
    return(new Date(dateNow.getTime() - 5000))
}

function EmailForm(){

    const [lastSubmit, setlastSubmit] = useState(getTime5SecondsAgo)
    const toast = useToast()

    const handleClick = () =>{
        let email = document.getElementById('EmailInput')
        if(email.value === ''){
            toast({
                title: "Error",
                description: "You must input a an email!",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
        else{
            const now = new Date()
            if(now - lastSubmit >= 5000){
                toast({
                    title: "Subscribed!",
                    description: "You will now recieve our newsletter :)",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
                email.value = ''
                setlastSubmit(now)
            }
            else{
                toast({
                    title: "Hold up!",
                    description: "You're submitting emails too fast!",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            }
        }//run an ajax method the server to add an email
        
    }
    
    return(
        <Box
            bg='white'
            boxShadow='base'
            width={[
                "100%", // 0-30em
                "50%", // 30em-48em
                "45%", // 48em-62em
                "30%", // 62em+
              ]}
            borderWidth="1px" 
            borderRadius="lg"
            borderColor="#CBD5E0"
        >
            <VStack 
                padding = "1rem"
            >
                <FormControl id="email" >
                    <FormLabel >Email address</FormLabel>
                    <Input id = 'EmailInput' type="email" mb="1rem" placeholder="someone@email.com"/>
                    <FormHelperText align="left" textColor="Black" mb="1rem">We'll never share your email.</FormHelperText>
                </FormControl>
                <Button onClick={handleClick} width="100%">Sign Up</Button>
            </VStack>
        </Box>
    )
}

export default EmailForm