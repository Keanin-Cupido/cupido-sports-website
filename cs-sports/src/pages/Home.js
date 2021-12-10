import React from 'react'
import { VStack } from '@chakra-ui/react'
import Header_top from '../components/sections/Header-top'
import Header_bottom from '../components/sections/Header-bottom'
import Banner from '../components/sections/Banner'
import Filler_Section from '../components/sections/Filler_Section'
import About_Section from '../components/sections/About_Section'
import Section_noname from '../components/sections/Section_noname'
import Testimonial_Section from '../components/sections/Testimonial_Section'
import Footer from '../components/sections/Footer'

function Home() {
    return (
        <VStack>
            <Header_top />
            <Header_bottom />
            <Banner />
            <About_Section />
            <Filler_Section />
            <Section_noname />
            <Testimonial_Section />
            <Footer />
        </VStack>
    )
}

export default Home