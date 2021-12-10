import { Button, Center, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

import filler_bg from "./img/filler-bg.jpg"


function Filler_Section() {
    return (
        <Flex flexDirection="row" width="100%" alignItems="center">
            <Flex flexDirection="row" width="100%" position="absolute" justifyContent="space-between" alignItems="center">
                <Flex flexDirection="column" w="30%" ml="15%">
                    <Text fontSize="3xl" justifyContent="flex-start" fontWeight="black" textAlign="left">ABOUT CUPIDO SPORTS</Text>
                    <Text fontSize="md" textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum tincidunt velit non erat cursus, id gravida elit porta. Proin et malesuada dui, vel dictum arcu. 
                        Vestibulum velit metus, vulputate a feugiat non, maximus et ligula. Ut posuere ligula metus. Morbi et magna ante. 
                        Vivamus nec dolor ut urna hendrerit iaculis et euismod augue. Nulla at facilisis lectus. Ut posuere ligula metus. Morbi et magna ante. 
                        Vivamus nec dolor ut urna hendrerit iaculis et euismod augue.</Text>
                    <Button justifyContent="center" textAlign="center" width="20%" backgroundColor="#2DB2B6" size="sm" mt={10} mb={50} variant='solid'>LEARN MORE</Button>
                </Flex>
                
                <Center height='400px'>
                    <Divider orientation='vertical' />
                </Center>

                <Flex flexDirection="column" w="30%" mr="15%">
                    <Text fontSize="md" textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum tincidunt velit non erat cursus, id gravida elit porta. Proin et malesuada dui, vel dictum arcu. 
                            Vestibulum velit metus, vulputate a feugiat non, maximus et ligula. Ut posuere ligula metus. Morbi et magna ante. 
                            Vivamus nec dolor ut urna hendrerit iaculis et euismod augue. Nulla at facilisis lectus. Ut posuere ligula metus. Morbi et magna ante. 
                            Vivamus nec dolor ut urna hendrerit iaculis et euismod augue.</Text>
                    <br/>
                    <Text fontSize="md" textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum tincidunt velit non erat cursus, id gravida elit porta. Proin et malesuada dui, vel dictum arcu. 
                            Vestibulum velit metus, vulputate a feugiat non, maximus et ligula. Ut posuere ligula metus. Morbi et magna ante. 
                            Vivamus nec dolor ut urna hendrerit iaculis et euismod augue. Nulla at facilisis lectus. Ut posuere ligula metus. Morbi et magna ante. 
                            Vivamus nec dolor ut urna hendrerit iaculis et euismod augue.</Text>
                </Flex>
            </Flex>
                <Image src={filler_bg} width="100%" height="500px"/>
        </Flex>
    )
}

export default Filler_Section
