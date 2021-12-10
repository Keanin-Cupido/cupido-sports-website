import React from 'react'
import { Flex, Image, Spacer, Text, VStack, HStack } from '@chakra-ui/react'

import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import source from "./img/cs_logo_design.png"

function Header() {
    return (
        <HStack p={15} alignItems="center" backgroundColor="#2DB2B6" flexDirection="row" w="100%" alignItems="center" m={0} w="full">
            <Flex flexDirection="row" w="100%" alignItems="center" mr={72} ml={72}>
                <Image h="65px" src={source} fallbackSrc='https://via.placeholder.com/150'/>
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
                    <FaFacebook size="24px"/>
                    <FaInstagram size="24px"/>
                    <FaTwitter size="24px"/>
                </Flex>
            </Flex>
        </HStack>
    )
}

export default Header
