import React, { useState, useContext } from 'react'
import {Text,Box, Input, Icon, Button, NativeBaseProvider, FormControl } from 'native-base'
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

    function mtel(v){

        v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
        v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return setTelefone(v);
        
    }
    
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
          if(telefone.length >= 15){
            Cadastro(email, senha, name, telefone)
          } else {
              alert('telefone invalido')
              return;
          }
          
          
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
               _focus={{
                   bg:'rgba(255,255,255,0.9)',
                    borderWidth:1.5,
                    borderColor:'rgba(0,0,0,0.4)'
               }}
               />
               <Text color='#fff' fontSize='md' bold>Senha</Text>
               <Input  placeholder='*******'
               value={senha}
               onChangeText={(text)=> setSenha(text)}
               _focus={{
                bg:'rgba(255,255,255,0.9)',
                 borderWidth:1.5,
                 borderColor:'rgba(0,0,0,0.4)'
            }}
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
                <Icon as={<MaterialIcons name="visibility-off"/>} size={5} /> 
                : <Icon as={<MaterialIcons name="visibility" />} size={5}/>
                }
                </Button>} 
                
                />
                </Box>
                
               {/* FIM INPUTS */}
    
                {/* ESQUECI A SENHA MALUUCO */}
                <Box w='85%'>
    
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

        <Box bg={theme.colors['primary']} flex={1} 
        alignItems='center' justifyContent='space-evenly'>

            <ContainerImage
            height={40}
            width='300px'
            source={require('../../assets/Cadastro.png')}
            mt={20}
            />

            <Box w='85%' >
            <FormControl>

                <FormControl.Label _text={{
                    fontSize: 'md',
                    color:'gray.50'
                }}>Nome</FormControl.Label>
                <Input value={name} onChangeText={(text)=> setName(text)}
            variant="underlined" mb='10px' color='#fff' fontSize='14px'
            _focus={{
                 borderBottomWidth:1.5,
                 borderBottomColor:'gray.50'
            }}
            />
                <FormControl.Label _text={{
                    fontSize: 'md',
                    color:'gray.50'
                }}>E-mail</FormControl.Label>
                <Input value={email} onChangeText={(text)=> setEmail(text)}
            variant="underlined"  mb='10px' color='#fff' fontSize='14px'
            autoComplete={false}
            _android={{
                autoComplete:false
            }}
            _focus={{
                borderBottomWidth:1.5,
                borderBottomColor:'gray.50'
           }}/>
                <FormControl.Label _text={{
                    fontSize: 'md',
                    color:'gray.50'
                }}>Telefone</FormControl.Label>
                <Input value={telefone} onChangeText={(text)=> mtel(text)}
            variant="underlined"  mb='10px' color='#fff' fontSize='14px'
            maxLength={15}
            
            _focus={{
                borderBottomWidth:1.5,
                borderBottomColor:'gray.50'
           }}/>
                <FormControl.HelperText _text={{
                    color:'gray.200'
                }}>Numero será usado para entrar em contato</FormControl.HelperText>
                <FormControl.Label _text={{
                    fontSize: 'md',
                    color:'gray.50'
                }}>Senha</FormControl.Label>
                <Input  value={senha} onChangeText={(text)=> setSenha(text)}
           _focus={{
            borderBottomWidth:1.5,
            borderBottomColor:'gray.50'
       }}
           variant = "underlined"  mb='10px' 
           size='md' color='#fff' fontSize='14px'
           type={ mostrar ? "text" : "password" }
           
        //    Colocando na parte direita do input
           InputRightElement={
            <Button size="sm" variant="ghost" w="1/6" h="full" onPress={handleClick}>
            {mostrar ? 
            <Icon as={<MaterialIcons name="visibility-off"  />} size={5} color='#000'/> 
            : <Icon as={<MaterialIcons name="visibility"  />} size={5} color='#000'/>
            }
            </Button>} 
            />
            <FormControl.HelperText _text={{
                    color:'gray.200'
                }}>Senha com no minimo 6 digitos</FormControl.HelperText>
            </FormControl>
             
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
 
 )
 
}