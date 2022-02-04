import React from 'react'
import logo from '../../assets/logo.png'
import { NativeBaseProvider,Text,Center ,Box, Input, Icon, Button } from 'native-base'
import theme from '../../styles/theme.json'
import { Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


import {LogBox} from 'react-native';

LogBox.ignoreLogs(['NativeBase:']);


const NativeBase = () => {
    const [mostrar, setMostrar] = React.useState(false);

  const handleClick = () => setMostrar(!mostrar);

    return (  
        <NativeBaseProvider>
        <Center bg={theme.colors['primary']} flex={1}>
            {/* Container para imagem */}
                <Image
                height={100}
                resizeMode="stretch"
                source={logo}
                width={50}
               />
           
            {/* Fim do Container */}
           
           {/* INPUTS */}
           <Input w={{
               base:"85%",
               md:"25%"
           }} mb='3'
           h='50'
           placeholder="Email"
           size='lg'
           variant = "filled" bg={"rgba(255,255,255,0.9)"}
           />
           <Input  variant = "filled" bg={"rgba(255,255,255,0.9)"}
           h='50' w={{
               base:"85%",
               md:"25%"
           }} size='xl'
           type={ mostrar ? "text" : "password" }
        //    Colocando na parte direita do input
           InputRightElement={
            <Button size="sm" variant="ghost" w="1/6" h="full" onPress={handleClick}>
            {mostrar ? <Icon as={<MaterialIcons name="visibility-off"/>} size={4} /> 
            : <Icon as={<MaterialIcons name="visibility" />} size={4}/>
            }
            </Button>
            } placeholder="Senha"/>
           {/* FIM INPUTS */}

            {/* ESQUECI A SENHA MALUUCO */}
            <Button m='2'>
                <Text>Esqueci minha senha</Text>
            </Button>

        </Center>
        </NativeBaseProvider>
    )
}

export default NativeBase;
