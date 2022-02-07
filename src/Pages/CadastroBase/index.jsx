import React from 'react'
import logo from '../../assets/logoPequena.png'
import { NativeBaseProvider,Text,Center ,Box, Input, Icon, Button, Pressable, IconButton,Switch    } from 'native-base'
import { Image } from 'react-native'
import theme from '../../styles/theme.json'
import { ContainerImage } from '../../styles'
import { MaterialIcons, Fontisto  } from '@expo/vector-icons'


const CadastroBase = ()=>{
    const [mostrar, setMostrar] = React.useState(false);
    const handleClick = () => setMostrar(!mostrar);

    // const [ check, setCheck ] = React.useState(false);
    // const handleCheck = () => setCheck(!check);

    return(
    <NativeBaseProvider>
        <Box bg={theme.colors['primary']} flex={1} 
        alignItems='center' justifyContent='space-evenly'>

            <ContainerImage
            height={40}
            width='250px'
            source={require('../../assets/Cadastro.png')}
            />

            <Box w='85%' >
            <Text color='#fff' ml='5px' fontSize='md'>Nome</Text>
            <Input variant="underlined" mb='10px' color='#fff' fontSize='14px'/>
            <Text color='#fff' ml='5px' fontSize='md'>E-mail</Text>
            <Input variant="underlined"  mb='10px' color='#fff' fontSize='14px'/>
            <Text color='#fff' ml='5px' fontSize='md'>Telefone</Text>
            <Input variant="underlined"  mb='10px' color='#fff' fontSize='14px'/>

            <Text color='#fff' fontSize='md' ml='5px'>Senha</Text>
           <Input  variant = "underlined"  mb='10px' 
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
            <Text color='#fff' fontSize='md' ml='5px' >Confirmar Senha</Text>
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
            />
{/*             
            <Box >
                <Text color='#fff'><Switch size='sm'/> Eu li e concordo com as<Text bold> politicas de privacidades</Text></Text>
            </Box> */}

           
                
            </Box>
             {/* BUTAO */}
            <Box mt={5} w='85%'>
                <Button  bg={theme.colors['blue-dark']}
                borderRadius="xl"
                h="50px"            > 
                <Text color='#fff' fontSize='18px' bold >CADASTRAR</Text>
                </Button>
                </Box>
        </Box>
        </NativeBaseProvider>
        )
}

export default CadastroBase;