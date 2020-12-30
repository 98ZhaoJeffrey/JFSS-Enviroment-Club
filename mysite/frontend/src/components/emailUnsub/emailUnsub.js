import React from 'react'; 
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

function EmailUnsubForm(){

    const toast = useToast()

    const handleClick = () =>{
        let code = document.getElementById('CodeInput')
        if(code.value === ''){
            toast({
                title: "Error",
                description: "You must input a code",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
        else{
            const csrftoken = Cookies.get('csrftoken');
            const currLink = window.location.href.split('/')
            const url = currLink[0] + '//' + currLink[2] + '/api/unsubscribe-email/' + code.value
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                mode: 'same-origin',
                })
                .then(response=>{return response.json()})
                .then(data => {
                    if(data.result === "success"){
                        toast({
                            title: "Unsubscribed",
                            description: data.message,
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                        })
                    code.value = ''
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
        }
        
    return(
        <Box
            bg='white'
            boxShadow='base'
            width={["90%",null, "75%", "50%"]}
            borderWidth="1px" 
            borderRadius="lg"
            borderColor="#CBD5E0"
        >
            <VStack 
                padding = "1rem"
                w="100%"
            >
                <FormControl id="text" >
                    <FormLabel fontSize="1.5rem" fontWeight="700">Newsletter unsub code</FormLabel>
                    <Input id = 'CodeInput' type="text" mb="1rem" placeholder="Your code"/>
                    <FormHelperText align="left" textColor="Black" mb="1rem">This 32 character code was sent in the your newsletter. You can always resubscribe.</FormHelperText>
                </FormControl>
                <Button onClick={handleClick} width="100%">Unsubscribe</Button>
            </VStack>

        </Box>
    )
}

export default EmailUnsubForm