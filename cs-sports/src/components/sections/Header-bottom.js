import React from 'react'
import { Flex, Image, Spacer, Text, VStack, HStack, Button } from '@chakra-ui/react'

function Header() {
    return (
        <HStack p={2} backgroundColor="#005154" flexDirection="row" w="100%" alignItems="center" justifyContent="center" w="full" h="full">
            <Flex flexDirection="row" w="100%" alignItems="center" justifyContent="center">
                <Button color="white" mr={18} variant='ghost'>HOME</Button>
                <Button color="white" mr={18} variant='ghost'>PARTNERS</Button>
                <Button color="white" mr={18} variant='ghost'>CLIENTS</Button>
                <Button color="white" mr={18} variant='ghost'>TESTIMONIALS</Button>
                <Button color="white" mr={18} variant='ghost'>NEWS</Button>
                <Button color="white" mr={18} variant='ghost'>CONTACT US</Button>
            </Flex>
        </HStack>
    )
}

export default Header
