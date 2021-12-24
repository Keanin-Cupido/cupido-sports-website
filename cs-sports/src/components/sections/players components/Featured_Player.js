import { Avatar, Box, Button, Flex, Heading, HStack, Image, ScaleFade, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import React from 'react'
import "./Featured_Player.css"

const bcol = "#2DB2B6"

function Featured_Player(props) {
    return (
        <Flex flexDirection="column" width="100%" display="block" overflow="hidden">
            <Flex flexDirection="column" width="100%" display="block" overflow="hidden">
                <Image className='zoom_img' src={props.fp_image} width="auto" height="auto"/>
            </Flex>

            <Box className='box' bgGradient='linear(to-b, #2DB2B6, #005154)' alignItems="center" justifyContent="center" bottom={0} padding="30px">
                <Flex flexDirection="column" marginBottom={8} justifyContent="left">
                    <Heading fontSize="5xl">{props.fp_fname}</Heading> 
                    <Heading fontSize="5xl">{props.fp_sname}</Heading>

                    <HStack spacing={4} marginTop={4}>
                            <Tag size="md" variant='subtle' colorScheme='cyan'>
                                {/* <TagLeftIcon boxSize='12px' as={AddIcon} /> */}
                                <TagLabel>{props.role}</TagLabel>
                            </Tag>
                    </HStack>
                </Flex>

                <Button textAlign="center" justifyContent="center" alignItems="center">VIEW {props.fp_fname}'S FULL PROFILE</Button>
            </Box>
        </Flex>
    )
}

export default Featured_Player
