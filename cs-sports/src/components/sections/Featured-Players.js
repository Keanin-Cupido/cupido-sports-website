import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Featured_Player from './players components/Featured_Player'

// Player fp images
import fp_player1_img from "./players components/img/John Doe 1.jpg"

const col = "white"
const col2 = "#005154"


function Videos_Section() {
    return (
        <Flex flexDirection="column" backgroundColor={col} width="100%" alignItems="center" paddingBottom={16}>
            <Text fontSize="4xl" color={col2} textAlign="center" pt="5%" fontWeight="bold">FEATURED PLAYERS</Text>
            <Flex flexDirection="column" alignItems="center" justifyContent="center" >
                
                <Flex flexDirection="row" marginTop={16} marginBottom={8}>
                    <Featured_Player 
                        fp_image={fp_player1_img} 
                        fp_fname="JOHN"
                        fp_sname="DOE"
                    />
                    <Featured_Player 
                        fp_image={fp_player1_img} 
                        fp_fname="JOHN"
                        fp_sname="DOE"
                    />
                    <Featured_Player 
                        fp_image={fp_player1_img} 
                        fp_fname="JOHN"
                        fp_sname="DOE"
                    />
                    <Featured_Player 
                        fp_image={fp_player1_img} 
                        fp_fname="JOHN"
                        fp_sname="DOE"
                    />
                </Flex>

                <Button colorScheme={col2} borderColor={col2} border="2px" color={col2} _hover={{ bg: "#D4F0F1" }} variant='outline' mt={10}>VIEW MORE</Button>
                {/* <Button variant='outline' colorScheme="#2DB2B6">VIEW MORE</Button> */}
            </Flex>
        </Flex>
    )
}

export default Videos_Section
