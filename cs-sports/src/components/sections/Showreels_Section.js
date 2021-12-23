import { AspectRatio, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Showreels from './Showreels'

const col = "white"
const col2 = "#005154"


function Showreels_Section() {
    return (
        <Flex flexDirection="column" backgroundColor={col2} width="100%" alignItems="center" paddingBottom={16}>
            <Text fontSize="4xl" color={col} textAlign="center" pt="5%" fontWeight="bold">SHOW REELS</Text>
            
            <Showreels />

            <Button colorScheme={col} borderColor={col} border="2px" color={col} _hover={{ bg: "#D4F0F1" }} variant='outline' mt={10}>VIEW MORE</Button>
        </Flex>
    )
}

export default Showreels_Section
