import React from 'react'
import { Flex, Image, Spacer, Text, VStack, HStack, Button } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom"

function Header() {
    return (
        <HStack p={2} backgroundColor="#005154" flexDirection="row" w="100%" alignItems="center" justifyContent="center" w="full" h="full">
            <Flex flexDirection="row" w="100%" alignItems="center" justifyContent="center">
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/">HOME</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/partners">PARTNERS</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/clients">CLIENTS</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/testimonials">TESTIMONIALS</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/news">NEWS</Button>
                <Button color="white" mr={18} variant='ghost' as={ReactLink} to="/contactus">CONTACT US</Button>
            </Flex>
        </HStack>
    )
}

export default Header
