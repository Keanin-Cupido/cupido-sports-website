import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const col = "#2DB2B6"

function Testimonial_Section() {
    return (
        <Box height="600px" backgroundColor="white" justifyContent="center" alignItems="center" alignContent="center" textAlign="center">
            <Text fontSize="5xl" color="#005154" textAlign="center" pt="5%" fontWeight="black">Testimonials</Text>
            <Flex flexDirection="column" alignItems="center" justifyContent="center" >
                <Text fontSize="xl" w="55%" color="#005154" textAlign="center" pt="2%">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt velit non erat cursus, id gravida elit porta. 
                    Proin et malesuada dui, vel dictum arcu. Vestibulum velit metus, vulputate a feugiat non, maximus et ligula. Ut posuere ligula metus. Morbi et magna ante. Vivamus nec dolor ut urna hendrerit iaculis et euismod augue. Nulla at facilisis lectus. 
                    Ut posuere ligula metus. Morbi et magna ante. Vivamus nec dolor ut urna hendrerit iaculis et euismod augue.
                </Text>
                <Text fontSize="xl" color="#005154" textAlign="center" pt="2%" fontStyle="italic" fontWeight="bold">
                    Ashwin Cupido
                </Text>
                <Button colorScheme={col} borderColor={col} border="2px" color={col} _hover={{ bg: "#D4F0F1" }} variant='outline' mt={10}>VIEW MORE</Button>
                {/* <Button variant='outline' colorScheme="#2DB2B6">VIEW MORE</Button> */}
            </Flex>
        </Box>
    )
}

export default Testimonial_Section
