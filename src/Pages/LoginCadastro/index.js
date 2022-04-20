import React, { useState, useContext } from 'react'
import {Text,Box, Input, Icon, Button, NativeBaseProvider } from 'native-base'
import theme from '../../styles/theme.json'
import { MaterialIcons } from '@expo/vector-icons'
import { ContainerImage } from '../../styles'
import {LogBox, ActivityIndicator, Platform, KeyboardAvoidingView} from 'react-native';

import { AuthContext } from '../../contexts/auth'


LogBox.ignoreLogs(['NativeBase:']);


export default function LoginCadastro() {
    //Funcoes do authcontext
    const { Cadastro, loadingAuth, Login } = useContext(AuthContext)


        //Visualizar Senha
const [mostrar, setMostrar] = useState(false);
const handleClick = () => setMostrar(!mostrar);

    //Parametros para login e cadastro
    const [login, setLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // const [senhaConf, setSenhaConf] = useState('');
    const [telefone, setTelefone] = useState('');

    function toggleLogin(){
        setLogin(!login)
        setEmail('')
        setName('')
        setSenha('')
        // setSenhaConf('')
        setTelefone('')
    }

    function handleLogin() {
        if(email==='' || senha===''){
            alert('preencha')
            return;
          }
          Login(email, senha)
    }

    function handleCadastro(){
        if(name ==='' ||email==='' || senha==='' || telefone===''){
            alert('preencha')
            return;
          }
          Cadastro(email, senha, name, telefone)
      }

    if(login) {
        return (
            <KeyboardAvoidingView 
            style={{flex:1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
            <NativeBaseProvider>
            <Box bg={theme.colors['primary']} flex={1} 
            alignItems='center' justifyContent='space-evenly'
           
            >
                {/* Container para imagem */}
                
                    <ContainerImage
                    source={require('../../assets/logo.png')}
                    height={70}
                    width='250px'
                    />
                
                {/* Fim do Container */}
               
               {/* INPUTS */}
               <Box  mt={5}>
               <Text color='#fff' fontSize='md' bold>Email</Text>
               <Input 
               placeholder='email@email.com'
               value={email}
               onChangeText={(text) => setEmail(text)}
               InputRightElement={
                <Button 
                variant="unstyled"></Button>} w={{
                   base:"85%",
                   md:"25%"
               }} mb='2'
               h='50'
               size='md'
               variant = "filled" bg={"rgba(255,255,255,0.9)"}
               />
               <Text color='#fff' fontSize='md' bold>Senha</Text>
               <Input  placeholder='*******'
               value={senha}
               onChangeText={(text)=> setSenha(text)}
               
               variant = "filled" bg={"rgba(255,255,255,0.9)"}
               h='50'  mb='2' w={{
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
                <Box w='85%'>
    
                <Button  variant="ghost" mb={5}>
                    <Text color='#fff' fontSize='md'>Esqueci minha senha</Text>
                </Button>
    
                <Button   bg={theme.colors['blue-dark']}
                    borderRadius="xl"
                    h="50px"
                    onPress={handleLogin} 
                >
                    {
                        loadingAuth ? (
                            <ActivityIndicator
                            size={20} color='#fff'
                            />
                        ) : (
                            <Text color='#fff' fontSize={'18'} bold >ENTRAR</Text>
                        )
                    }
                </Button>
                </Box>
                <Button variant="ghost" onPress={toggleLogin}>
                    <Text color='#fff' fontSize='md'>Não possui cadastro ?
                    <Text bold> Cadastrar - se </Text></Text>
                </Button>
            </Box> 
            </NativeBaseProvider>
            </KeyboardAvoidingView>
        )
      }
    return (
        <NativeBaseProvider >
        <Box bg={theme.colors['primary']} flex={1} 
        alignItems='center' justifyContent='space-evenly'>

            <ContainerImage
            height={40}
            width='300px'
            source={require('../../assets/Cadastro.png')}
            mt={20}
            />

            <Box w='85%' >
            <Text color='#fff' mx='2' fontSize='md'>Nome</Text>
            <Input value={name} onChangeText={(text)=> setName(text)}
            variant="underlined" mb='10px' color='#fff' fontSize='14px'/>
            <Text color='#fff' mx='2'  fontSize='md'>E-mail</Text>
            <Input value={email} onChangeText={(text)=> setEmail(text)}
            variant="underlined"  mb='10px' color='#fff' fontSize='14px'/>
            <Text color='#fff' mx='2' fontSize='md'>Telefone</Text>
            <Input value={telefone} onChangeText={(text)=> setTelefone(text)}
            variant="underlined"  mb='10px' color='#fff' fontSize='14px'/>
            <Text color='#fff' fontSize='md' mx='2' >Senha</Text>
           <Input  value={senha} onChangeText={(text)=> setSenha(text)}
           variant = "underlined"  mb='10px' 
           size='md' color='#fff' fontSize='14px'
           type={ mostrar ? "text" : "password" }
           
        //    Colocando na parte direita do input
           InputRightElement={
            <Button size="sm" variant="ghost" w="1/6" h="full" onPress={handleClick}>
            {mostrar ? 
            <Icon as={<MaterialIcons name="visibility-off"  />} size={4} /> 
            : <Icon as={<MaterialIcons name="visibility"  />} size={4}/>
            }
            </Button>} 
            />
            {/* <Text color='#fff' fontSize='md' mx='2' >Confirmar Senha</Text>
           <Input  variant = "underlined"   mb='10px'
            size='md' color='#fff' fontSize='14px'
           type={ mostrar ? "text" : "password" }
           
        //    Colocando na parte direita do input
           InputRightElement={
            <Button size="sm" variant="ghost" w="1/6" h="full" onPress={handleClick}>
            {mostrar ? 
            <Icon as={<MaterialIcons name="visibility-off" />} size={4} /> 
            : <Icon as={<MaterialIcons name="visibility"  />} size={4}/>
            }
            </Button>} 
            /> */}
{/*             
            <Box >
                <Text color='#fff'><Switch size='sm'/> Eu li e concordo com as<Text bold> politicas de privacidades</Text></Text>
            </Box> */}

           
                
            </Box>
           

             {/* BUTAO */}
            <Box mt={5} w='85%'>
                <Button  onPress={handleCadastro}
                bg={theme.colors['blue-dark']}
                borderRadius="xl"
                h="50px"> 
                {
                    loadingAuth ? (
                        <ActivityIndicator
                        size={20} color='#fff'
                        />
                    ): (
                        <Text color='#fff' fontSize='18px' bold >CADASTRAR</Text>
                    )
                }
                </Button>
                </Box>

                <Box w='85%' >
                <Button onPress={toggleLogin}
                borderRadius="xl"
                variant="ghost"
                h="40px"> 
                    <Text color='#fff' fontSize='16px' bold>
                        Já possuo uma conta
                    </Text>
                </Button>
            </Box>
        </Box>
    </NativeBaseProvider>
 
 )
 
}