import React from 'react'
import { Flex, Image, Spacer, Text, VStack, HStack, Button } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom"

function Header() {
    return (
        <HStack p={2} backgroundColor="#005154" flexDirection="row" w="100%" alignItems="center" 
        justifyContent="center" w="full" h="full" 
        top="101px" position="sticky" zIndex="10"
        boxShadow="0 3px 5px rgba(57, 63, 72, 0.4)"
        >
            <Flex flexDirection="row" w="100%" alignItems="center" justifyContent="center">
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/">HOME</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/programmes">PROGRAMMES</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/partners">PARTNERS</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/clients">CLIENTS</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/testimonials">TESTIMONIALS</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/news">NEWS</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/photogallery">GALLERY</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/contactus">CONTACT US</Button>
            </Flex>
        </HStack>
    )
}

export default Header
