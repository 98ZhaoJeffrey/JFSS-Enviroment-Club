import React, { useState } from 'react'; 
import {
    Box, 
    Button, 
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    VStack,
    useToast,
    } from "@chakra-ui/react"
import Cookies from 'js-cookie'

function getTime5SecondsAgo(){
    let dateNow = new Date();
    return(new Date(dateNow.getTime() - 5000))
}


function EmailForm(){

    const [lastSubmit, setlastSubmit] = useState(getTime5SecondsAgo)
    const toast = useToast()

    const handleClick = () =>{
        let emailAddress = document.getElementById('EmailInput')
        if(emailAddress.value === ''){
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
                var csrftoken = Cookies.get('csrftoken');
                fetch('http://127.0.0.1:8000/api/add-email/',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrftoken
                    },
                    mode: 'same-origin',
                    body: JSON.stringify({email:emailAddress.value})
                    })
                    .then(response=>{return response.json()})
                    .then(data => {
                        if(data.result === "success"){
                            toast({
                                title: "Subscribed!",
                                description: data.message,
                                status: "success",
                                duration: 5000,
                                isClosable: true,
                            })
                        setlastSubmit(now)
                        emailAddress.value = ''
                        }
                        else{
                            toast({
                                title: "Oopsies",
                                description: data.message,
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                            })
        
                        } 

                    })
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
            width="100%"
            borderWidth="1px" 
            borderRadius="lg"
            borderColor="#CBD5E0"
        >
            <VStack 
                padding = "1rem"
                w="100%"
            >
                <FormControl id="email" >
                    <FormLabel fontSize="1.5rem" fontWeight="700">Email address</FormLabel>
                    <Input id = 'EmailInput' type="email" mb="1rem" placeholder="someone@email.com"/>
                    <FormHelperText align="left" textColor="Black" mb="1rem">We'll never share your email. You can always unsubscribe</FormHelperText>
                </FormControl>
                <Button onClick={handleClick} width="100%">Sign Up</Button>
            </VStack>

        </Box>
    )
}

export default EmailForm