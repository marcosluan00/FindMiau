import React from 'react'
import logo from '../../assets/logoPequena.png'
import { NativeBaseProvider,Text,Center ,Box, Input, Icon, Button } from 'native-base'
import theme from '../../styles/theme.json'
import { Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


import {LogBox} from 'react-native';

LogBox.ignoreLogs(['NativeBase:']);


const LoginBase = () => {
    const [mostrar, setMostrar] = React.useState(false);
    const handleClick = () => setMostrar(!mostrar);

    return (  
        <NativeBaseProvider>
        <Box bg={theme.colors['primary']} flex={1} 
        alignItems='center' justifyContent='space-evenly'
        >
            {/* Container para imagem */}
            <Box mt='20'>
                <Image
                source={logo}
                />
            </Box>
            {/* Fim do Container */}
           
           {/* INPUTS */}
           <Box my='5'>
           <Text color='#fff' fontSize='md' bold>Email</Text>
           <Input w={{
               base:"85%",
               md:"25%"
           }} my='2'
           h='50'
           size='md'
           variant = "filled" bg={"rgba(255,255,255,0.9)"}
           InputRightElement={
            <Button variant="unstyled"></Button>}
           />
           <Text color='#fff' fontSize='md' bold>Senha</Text>
           <Input  variant = "filled" bg={"rgba(255,255,255,0.9)"}
           h='50' my='2' w={{
               base:"85%",
               md:"25%"
           }} size='md'
           type={ mostrar ? "text" : "password" }
           
        //    Colocando na parte direita do input
           InputRightElement={
            <Button size="sm" variant="ghost" w="1/6" h="full" onPress={handleClick}>
            {mostrar ? 
            <Icon as={<MaterialIcons name="visibility-off"/>} size={4} /> 
            : <Icon as={<MaterialIcons name="visibility" />} size={4}/>
            }
            </Button>} 
            />
            </Box>
           {/* FIM INPUTS */}

            {/* ESQUECI A SENHA MALUUCO */}
            <Box w ='85%' position='relative' top ='-60'>

            <Button  variant="ghost" mb='5'>
                <Text color='#fff' fontSize='md'>Esqueci minha senha</Text>
            </Button>

            <Button  bg={theme.colors['blue-dark']}
            siez={"lg"}
            >
                <Text color='#fff' fontSize={'18'} bold >ENTRAR</Text>
            </Button>
            </Box>
            <Button variant="ghost" >
                <Text color='#fff' fontSize='md'>Não possui cadastro ?
                <Text bold> Cadastrar - se </Text></Text>
            </Button>

        </Box>
        </NativeBaseProvider>
    )
}

export default LoginBase;
