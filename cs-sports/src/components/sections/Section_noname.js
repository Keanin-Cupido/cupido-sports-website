import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

import about_img from "./img/secnn.jpg"

function Section_noname() {
    return (
        <Flex flexDirection="row" backgroundColor="#005154" width="100%" alignItems="center" height="550px">
            <Flex flexDirection="column" width="100%" alignItems="right" justifyContent="right" ml="55%" mr="15%" right={0}>
                <Text fontSize="3xl" justifyContent="flex-end" fontWeight="black" textAlign="right">ABOUT CUPIDO SPORTS</Text>
                <Text fontSize="md" textAlign="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum tincidunt velit non erat cursus, id gravida elit porta. Proin et malesuada dui, vel dictum arcu. 
                    Vestibulum velit metus, vulputate a feugiat non, maximus et ligula. Ut posuere ligula metus. Morbi et magna ante. 
                    Vivamus nec dolor ut urna hendrerit iaculis et euismod augue. Nulla at facilisis lectus. Ut posuere ligula metus. Morbi et magna ante. 
                    Vivamus nec dolor ut urna hendrerit iaculis et euismod augue.</Text>
                <Button justifyContent="center" textAlign="center" backgroundColor="#2DB2B6" size="sm" ml="75%" mt={10} mb={50} variant='solid' right={0}>LEARN MORE</Button>
            </Flex>
            <Image src={about_img} position="absolute" textAlign="left" justifyContent="left" left="15%" width="600px"/>
        </Flex>
    )
}

export default Section_noname