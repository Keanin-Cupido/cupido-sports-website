import React from 'react'
import { Flex, Image, Spacer, Text, VStack, HStack, Button } from '@chakra-ui/react'

function Header() {
    return (
        <HStack p={15} backgroundColor="#005154" flexDirection="row" w="100%" alignItems="center" w="full" h="full">
            <Flex flexDirection="row" w="100%" alignItems="center" mr={72} ml={72}>
                <Button color="white" mr={24} backgroundColor="transparent">HOME</Button>
                <Button color="white" mr={24} backgroundColor="transparent">PARTNERS</Button>
                <Button color="white" mr={24} backgroundColor="transparent">CLIENTS</Button>
                <Button color="white" mr={24} backgroundColor="transparent">TESTIMONIALS</Button>
                <Button color="white" mr={24} backgroundColor="transparent">NEWS</Button>
                <Button color="white" mr={24} backgroundColor="transparent">CONTACT US</Button>
            </Flex>
        </HStack>
    )
}

export default Header
