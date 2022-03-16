import React from 'react'
import { NativeBaseProvider,Text,Center ,Box, Input, Icon, Button } from 'native-base'
import theme from '../../styles/theme.json'
import { Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ContainerImage } from '../../styles'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['NativeBase:']);

import { auth } from '../../firebaseConnection'

const LoginBase = () => {
    const [mostrar, setMostrar] = React.useState(false);
    const handleClick = () => setMostrar(!mostrar);

    const [ email, setEmail] = React.useState('');
    const [ senha, setSenha] = React.useState('');


    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(value => {
            console.log('cadastro \n')
        })
        .catch(error => console.log(error))
    }

    async function login() {
        await signInWithEmailAndPassword(auth, email, senha)
        .then(value => {
            console.log('Entraste \n' )
        })
        .catch(error => console.log(error))
    }

    return (  
        <NativeBaseProvider>
        <Box bg={theme.colors['primary']} flex={1} 
        alignItems='center' justifyContent='space-evenly'
        >
            {/* Container para imagem */}
            
                <ContainerImage
                top={20}
                source={require('../../assets/logo.png')}
                height={70}
                width='250px'
                />
            
            {/* Fim do Container */}
           
           {/* INPUTS */}
           <Box my='5'>
           <Text color='#fff' fontSize='md' bold>Email</Text>
           <Input InputRightElement={
            <Button variant="unstyled"></Button>} w={{
               base:"85%",
               md:"25%"
           }} my='2'
           h='50'
           size='md'
           variant = "filled" bg={"rgba(255,255,255,0.9)"}
           placeholder={email}
           value={email}
           onChangeText={value => setEmail(value)}
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
            placeholder={senha}
            value={senha}
            onChangeText={value => setSenha(value)}
            
            />
            </Box>
            
           {/* FIM INPUTS */}

            {/* ESQUECI A SENHA MALUUCO */}
            <Box w ='85%' position='relative' top ='-60'>

            <Button  variant="ghost" mb='5'>
                <Text color='#fff' fontSize='md'>Esqueci minha senha</Text>
            </Button>

            <Button   bg={theme.colors['blue-dark']}
                borderRadius="xl"
                h="50px" 
                onPress={() =>login()}
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
