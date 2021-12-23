import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

import about_img from "./img/about_img.jpg"

function About_Section() {
    return (
        <Flex flexDirection="row" backgroundColor="#005154" width="100%" alignItems="center" height="550px">
            <Flex flexDirection="column" width="100%" alignItems="left" justifyContent="left" w="30%" ml="15%">
                <Text fontSize="3xl" justifyContent="flex-start" fontWeight="black" textAlign="left">ABOUT CUPIDO SPORTS</Text>
                <Text fontSize="md" textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum tincidunt velit non erat cursus, id gravida elit porta. Proin et malesuada dui, vel dictum arcu. 
                    Vestibulum velit metus, vulputate a feugiat non, maximus et ligula. Ut posuere ligula metus. Morbi et magna ante. 
                    Vivamus nec dolor ut urna hendrerit iaculis et euismod augue. Nulla at facilisis lectus. Ut posuere ligula metus. Morbi et magna ante. 
                    Vivamus nec dolor ut urna hendrerit iaculis et euismod augue.</Text>
                <Button justifyContent="center" textAlign="center" width="20%" backgroundColor="#2DB2B6" size="sm" mt={10} mb={50} variant='solid'>LEARN MORE</Button>
            </Flex>
            <Image className='zoom_img' src={about_img} position="absolute" textAlign="right" justifyContent="right" right="15%"/>
        </Flex>
    )
}

export default About_Section
