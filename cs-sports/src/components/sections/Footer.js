import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'

import source from "./img/cs_logo_design.png"

function Footer() {
    return (
        <Flex flexDirection="column">
            <Flex flexDirection="column" pl={200} pr={200} pt={100} pb={200} alignItems="left" backgroundColor="#005154">
                <Flex flexDirection="row" pb={25}>
                    <Image w="100px" src={source} fallbackSrc='https://via.placeholder.com/150'/>
                </Flex>

                <Flex flexDirection="row" gap={18}>
                    <Flex flexDirection="column" gap={18}>
                        <Text fontWeight="black">WHERE DEVELOPMENT STARTS</Text>
                        <Text w="30%">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum tincidunt velit non erat cursus, id gravida elit porta. 
                            Proin et malesuada dui, vel dictum arcu. Vestibulum velit metus, vulputate a feugiat non, maximus et ligula. Ut posuere ligula metus. 
                            Morbi et magna ante.</Text>
                        <Flex flexDirection="row" gap={8}>
                            <FaFacebook size="24px"/>
                            <FaInstagram size="24px"/>
                            <FaTwitter size="24px"/>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="row" gap={20}>
                        <Flex flexDirection="column" gap={18}>
                            <Text>USEFUL LINKS</Text>
                            <Flex flexDirection="column" gap={15}>
                                <Button variant='link'>Link 1</Button>
                                <Button variant='link'>Link 2</Button>
                                <Button variant='link'>Link 3</Button>
                                <Button variant='link'>Link 4</Button>
                                <Button variant='link'>Link 5</Button>
                            </Flex>
                        </Flex>
                        <Flex flexDirection="column" gap={18}>
                            <Text>FIND US</Text>
                            <Flex flexDirection="column" gap={15}>
                                <Button variant='link'>Link 1</Button>
                                <Button variant='link'>Link 2</Button>
                                <Button variant='link'>Link 3</Button>
                                <Button variant='link'>Link 4</Button>
                                <Button variant='link'>Link 5</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDirection="row" backgroundColor="#00292B" pt={15} pb={15} textAlign="center" justifyContent="center">© Cupido Sports – All Rights Reserved</Flex>
        </Flex>
    )
}

export default Footer
