import React from 'react'
import logo from '../../assets/logo.png'
import { NativeBaseProvider,
    Text,
    Center,
    Box, 
    Input, 
    Icon, 
    Button,
    IconButton,
    StatusBar,
    HStack,
   } from 'native-base'
import theme from '../../styles/theme.json'
import { Image } from 'react-native'
import { MaterialIcons, Feather, MaterialCommunityIcons  } from '@expo/vector-icons'
import { ContainerImage } from '../../styles'


const Comentarios = ()=>{
    return(
    <NativeBaseProvider>
                <StatusBar barStyle='light-content'/>
                <Box safeAreaTop />
                <HStack bg={theme.colors['light']} px='2' py='2' justifyContent="space-between" 
                alignItems="center" w="100%" >
                    <IconButton icon={<Icon as={MaterialCommunityIcons} name="arrow-left"/>}
                _icon={{ color:"blue.400",size: "md"}}/>

                    <Text bold color={theme.colors['primary']} fontSize="2xl"> Comentários </Text>

                    <IconButton icon={<Icon as={Feather} name="send"/>}
                _icon={{color:"blue.400",size: "md"}}/>
                </HStack>
                
            {/* ------- */}

            {/* Conteudo */}
        <Box  bg='rgba(100, 175, 252, 0.6)' flex={1} 
         alignItems='center' >
          <Center 
          w='100%' 
          bg={theme.colors['blue-light50']}>
           <Input  variant="rounded" bg={"rgba(255,255,255,1)"}
           h='50' my='2' w={{
               base:"95%",
               md:"25%"
           }} size='md'
           InputRightElement={
            <Button  variant="ghost">
            <Text color={theme.colors['primary']} fontSize='md'>Publicar</Text>
            </Button>
            
            } 
            />
         </Center>

        </Box>
        {/* ------------- */}
    </NativeBaseProvider>
    )
}
export default Comentarios