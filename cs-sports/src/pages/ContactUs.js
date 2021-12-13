import Header_top from '../components/sections/Header-top';
import Header_bottom from '../components/sections/Header-bottom';
import Footer from '../components/sections/Footer';

import React from 'react'
import { Box, Button, Circle, Flex, Heading, Input, InputGroup, InputLeftElement, Link, Stack, Text, Textarea } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaPen, FaPhoneAlt, FaTwitter, FaUserAlt } from 'react-icons/fa';
import { IoIosSend, IoMdMail } from 'react-icons/io';

function ContactUs() {
    return (
      <main>
          <Header_top/>
          <Header_bottom />

          {/* Contact Banner */}
          <Box textAlign="center" p={50} color="#005154" backgroundColor="#FFFFFF">
            <Heading p={5}>Contact Us</Heading>
            <Text fontWeight="bold" pb={5}>Get in touch with us using the form below, or feel free to pick up the phone and call!</Text>
          </Box>

          <Box>
            <Flex flexDirection="row" p={24} gap={16} justifyContent="center">
              {/* Left side - the form */}
              <Flex flexDirection="column">
                <Stack spacing={4} width={500}>
                  <InputGroup>
                      <InputLeftElement pointerEvents='none' children={<FaUserAlt color='gray.300' size="0.75em"/>}/>
                      <Input type='text' placeholder='Name' />
                  </InputGroup>

                  <InputGroup>
                      <InputLeftElement pointerEvents='none' children={<IoMdMail color='gray.300' size="0.75em"/>}/>
                      <Input type='email' placeholder='Email *' />
                  </InputGroup>
                  
                  <InputGroup>
                      <InputLeftElement pointerEvents='none' children={<FaPhoneAlt color='gray.300' size="0.75em"/>}/>
                      <Input type='tel' placeholder='Phone Number' />
                  </InputGroup>

                  <InputGroup>
                      <InputLeftElement pointerEvents='none' children={<FaPen color='gray.300' size="0.75em"/>}/>
                      <Textarea pl={41} placeholder='Message *' />
                  </InputGroup>

                  <Button leftIcon={<IoIosSend />} colorScheme='teal' variant='solid'>
                    Send
                  </Button>
                </Stack>
              </Flex>
              {/* Right side */}
              <Flex flexDirection="column" gap={3}>
                <Heading>Contact Details</Heading>
                <Flex flexDirection="column" gap={3}>
                  <Flex flexDirection="row" gap={3} alignItems="center">
                    <Circle backgroundColor="#2DB2B6" p={3}><IoMdMail /></Circle>
                    <Text>name@gmail.com</Text>
                  </Flex>
                  <Flex flexDirection="row" gap={3} alignItems="center">
                    <Circle backgroundColor="#2DB2B6" p={3}><FaPhoneAlt /></Circle>
                    <Text>Ashwin: 081 000 000</Text>
                  </Flex>
                  <Flex flexDirection="row" gap={3} alignItems="center">
                    <Circle backgroundColor="#2DB2B6" p={3}><FaPhoneAlt /></Circle>
                    <Text>Keanin: 081 000 000</Text>
                  </Flex>
                </Flex>

                <Heading>Follow Us</Heading>
                <Flex flexDirection="row" gap={3} alignItems="center">
                    <Link><Circle backgroundColor="#4267B2" p={3}><FaFacebook /></Circle></Link>
                    <Link><Circle backgroundColor="#1DA1F2" p={3}><FaTwitter /></Circle></Link>
                    <Link><Circle backgroundColor="#405DE6" p={3}><FaInstagram /></Circle></Link>
                </Flex>
              </Flex>
            </Flex>
          </Box>

          <Footer />
      </main>
    )
}

export default ContactUs
