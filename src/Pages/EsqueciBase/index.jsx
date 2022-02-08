import React from 'react'
import logo from '../../assets/logo.png'
import { NativeBaseProvider,Text,Center ,Box, Input, Icon, Button } from 'native-base'
import theme from '../../styles/theme.json'
import { Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ContainerImage } from '../../styles'


const EsqueciBase = ()=>{
    return(
    <NativeBaseProvider>
        <Box  bg={theme.colors['primary']} flex={1} 
         alignItems='center' justifyContent='space-around'>
        
            <ContainerImage
                source={require('../../assets/logo.png')}
                height={70}
                width='250px'
                mt={100}
                />

           <Box>
           <Text color='#fff' fontSize='md' bold>Email</Text>
           <Input w={{
               base:"85%",
               md:"25%"
           }} my='3'
           h='50'
           size='md'
           variant = "filled" bg={"rgba(255,255,255,0.9)"}
           InputRightElement={
            <Button variant="unstyled"></Button>}
           />

           <Button bg={theme.colors['blue-dark']}
           mt='5'
                borderRadius="xl"
                h="50px"
               
            >
                <Text color='#fff' fontSize={'18'} bold >ENTRAR</Text>
            </Button>
           </Box>
            <ContainerImage
                source={require('../../assets/sad-cat.png')}
                height={80}
                width='80px'
                mb={50}
                />
                
    </Box>
    </NativeBaseProvider>
    )
}
export default EsqueciBase