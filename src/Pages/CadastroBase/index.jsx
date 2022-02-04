import React from 'react'
import logo from '../../assets/logoPequena.png'
import { NativeBaseProvider,Text,Center ,Box, Input, Icon, Button } from 'native-base'
import { Image } from 'react-native'
import theme from '../../styles/theme.json'
import { ContainerImage } from '../../styles'
import { MaterialIcons } from '@expo/vector-icons'


const CadastroBase = ()=>{
    const [mostrar, setMostrar] = React.useState(false);
    const handleClick = () => setMostrar(!mostrar);


    return(
    <NativeBaseProvider>
        <Box bg={theme.colors['primary']} flex={1} 
        alignItems='center' justifyContent='space-evenly'>

            <ContainerImage
            height={30}
            width='200px'
            source={require('../../assets/Cadastro.png')}
            />
            <Box w='80%'>
            <Text color='#fff'>Nome</Text>
            <Input variant="underlined"/>
            <Text color='#fff'>E-mail</Text>
            <Input variant="underlined"/>
            <Text color='#fff'>Telefone</Text>
            <Input variant="underlined"/>

            <Text color='#fff' fontSize='md' >Senha</Text>
           <Input  variant = "underlined" 
           h='50' size='md'
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
            <Text color='#fff' fontSize='md' >Confirmar Senha</Text>
           <Input  variant = "underlined" 
           h='50'  size='md'
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
            </Box>

        </Box>
        </NativeBaseProvider>
        )
}

export default CadastroBase;