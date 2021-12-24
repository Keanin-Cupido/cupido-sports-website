import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import CS_Facebook_Feed from './CS_Facebook_Feed'
import "./Sections.css"

const col = "white"
const col2 = "#005154"
const col3 = "#005154"

function FollowUs_Section() {
    return (
        <Flex flexDirection="row" backgroundColor={col} paddingTop={16} paddingBottom={16} paddingRight={64}>
            <Flex textAlign="center" flexDirection="column" justifyContent="center" alignItems="center">
                <Flex color={col2} flexDirection="column" w="50%">
                    <Text fontSize="3xl" justifyContent="flex-start" fontWeight="black">FOLLOW US</Text>
                    <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum tincidunt velit non erat cursus, id gravida elit porta. Proin et malesuada dui, vel dictum arcu. 
                        Vestibulum velit metus, vulputate a feugiat non, maximus et ligula. Ut posuere ligula metus. Morbi et magna ante. 
                        Vivamus nec dolor ut urna hendrerit iaculis et euismod augue. Nulla at facilisis lectus. Ut posuere ligula metus. Morbi et magna ante. 
                        Vivamus nec dolor ut urna hendrerit iaculis et euismod augue.</Text>
                </Flex>
                <Flex flexDirection="row" gap={8} paddingTop={8} paddingBottom={16}>
                    <Box className='zoom-button-element' backgroundColor="#2DB2B6" padding={8} borderRadius={22}>
                        <FaFacebook size="24px"/>
                    </Box>
                    <Box className='zoom-button-element' backgroundColor="#2DB2B6" padding={8} borderRadius={22}>
                        <FaInstagram size="24px"/>
                    </Box>
                    <Box className='zoom-button-element' backgroundColor="#2DB2B6" padding={8} borderRadius={22}>
                        <FaTwitter size="24px"/>
                    </Box>
                </Flex>
            </Flex>

            <CS_Facebook_Feed />

        </Flex>
    )
}

export default FollowUs_Section
