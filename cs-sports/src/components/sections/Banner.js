import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

import banner_bg from "./img/banner-bg.jpg"

function Banner() {
    return (
        <Flex backgroundColor="blue" width="100%" alignItems="center" justifyContent="center">
            <Flex flexDirection="column" position="absolute" alignItems="center">
                <Text fontSize="7xl" justifyContent="center" textAlign="center" fontWeight="black">CUPIDO SPORTS</Text>
                <Text fontSize="3xl" textAlign="center">An agency specializing in cricket coaching. </Text>
                <Button justifyContent="center" textAlign="center" width="35%" backgroundColor="#2DB2B6" size="lg" mt={10} mb={50} variant='solid'>VIEW OUR WORK</Button>
            </Flex>
            <Image src={banner_bg} width="100%" />
        </Flex>
    )
}

export default Banner
