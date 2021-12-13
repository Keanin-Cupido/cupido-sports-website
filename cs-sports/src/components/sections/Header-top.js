import React from 'react'
import { Flex, Image, Spacer, Text, VStack, HStack, ScaleFade, useDisclosure, Link } from '@chakra-ui/react'

import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import source from "./img/cs_logo_design.png"

import { Link as ReactLink } from "react-router-dom"

function Header() {
    return (
        <HStack p={18} alignItems="center" backgroundColor="#2DB2B6" flexDirection="row" w="100%" alignItems="center" m={0} w="full" top="0" position="sticky" zIndex="10">
                    <Flex flexDirection="row" w="100%" alignItems="center" mr={72} ml={72}>
                            <Link as={ReactLink} to="/"><Image h="65px" src={source} fallbackSrc='https://via.placeholder.com/150'/></Link>
                            <Spacer />
                            <Flex flexDirection="row" mr={10} alignItems="center" gap={3}>
                                <FaPhone size="18px"/>
                                <Text fontSize="md">084 095 8409</Text>
                            </Flex>
                            <Flex flexDirection="row" mr={10} alignItems="center" gap={3}>
                                <IoMdMail size="18px"/>
                                <Text fontSize="md">emailuser@gmail.com</Text>
                            </Flex>
                            <Flex flexDirection="row" ml={16} alignItems="center" gap={6}>
                                <Link><FaFacebook size="24px"/></Link>
                                <Link><FaInstagram size="24px"/></Link>
                                <Link><FaTwitter size="24px"/></Link>
                            </Flex>
                    </Flex>
        </HStack>
    )
}

export default Header
