import { AspectRatio, Flex, Box, Image, Container, HStack } from '@chakra-ui/react'
import React from 'react'

function Showreels() {
    return (
        <Flex flexDirection="row" gap={8} marginTop={16}>
            <AspectRatio maxW='560px' ratio={1} width="24em">
                <iframe
                    title='naruto'
                    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                    allowFullScreen
                />
            </AspectRatio>
            <AspectRatio maxW='560px' ratio={1} width="24em">
                <iframe
                    title='naruto'
                    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                    allowFullScreen
                />
            </AspectRatio>
        </Flex>
    )
}

export default Showreels
