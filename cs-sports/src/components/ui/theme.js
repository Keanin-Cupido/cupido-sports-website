import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
}

const theme = extendTheme({ config })

export default theme