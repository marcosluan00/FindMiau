import React, { useState } from 'react'
import { ScrollView, StyleSheet, Image, TouchableOpacity, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';


import { Box, Text, AspectRatio, Stack, Heading, Input, Button, IconButton, Icon, HStack, Pressable } from 'native-base'
import { ContainerImage } from '../../styles'

import { useNavigation } from '@react-navigation/native'

export default function Modal (props) {

    const navigation = useNavigation()
    
    const [mensagem, setMensagem] = useState('')

    function irChat() {
      navigation.navigate('Chat')
    }
    
    function mtel(v){
        v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
        v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    }

    return (
        <Box bgColor="rgba(100, 175, 252, 0.7)" flex={1}>
        <Box maxW="98%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" 
        flex={1}
        m='1'
        h='98%'
        _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
            }} _light={{
            backgroundColor: "gray.50"
            }}
            >
              <Box>
                  { props.route.params?.imageUrl ? (
                    <ContainerImage resizeMode="contain" source={{ uri: props.route.params?.imageUrl }}
                    alt="image" height={250}
                    />
                  ): (
                    <ContainerImage
                    source={require('../../assets/gato.png')}
                    alt="image" height={150}
                    /> 
                  )
                  }
              </Box>
    
              <Stack px="4" space={1}>

              <Text color='blue.300' fontSize='sm' textAlign='right' fontWeight='bold' 
              my='1'
              >Postado por { props.route.params?.autor} </Text>
                <Stack my={2}>
                    {/* Titulo */}
                  <Heading size='xl' >
                    {props.route.params?.titulo}
                  </Heading>

                  {/* Localizacao */}
                  <Text fontSize="sm" _light={{
                  color: "coolGray.600"
                }} _dark={{
                  color: "violet.400"
                }} fontWeight="400">
                    {props.route.params?.localizao}
                  </Text>
    
                {/*Descrição */}
                <Text fontWeight="500" fontSize='xl'>
                {props.route.params?.descricao}
                </Text >
                </Stack>
                <Box h='10'>

                </Box>

                {
                props.route.params?.telefone ? (
                    <Text  fontSize="sm" fontWeight="400"> Nº para contato: {props.route.params?.telefone} </Text>
                ) : (
                    <>
                    </>
                )
                }
                <Box flexDirection='row'>
                <Input width='90%'
                variant="underlined"
                placeholder='Enviar uma mensagem '
                placeholderTextColor='blue.400'
                value={mensagem}
                onChangeText={text => setMensagem(text)}
                InputLeftElement={
                    <Icon as={MaterialCommunityIcons} name="message-text-outline" size={5} color="blue.400" mr='2'/>
                }

                />
                <IconButton w='40px'
                borderRadius="full" _icon={{
                    color: "blue.400",
                    size: "lg"
                }}  
                icon={<Icon as={MaterialCommunityIcons} name='send-circle'/>}
                />
                </Box>
              </Stack>


              <HStack justifyContent='center'>
                
                <Pressable m='2' top='0'
                onPress={irChat}
                >
                <Icon as={MaterialCommunityIcons} name="chat-processing" size={10} color="blue.400" />
                <Text color="blue.600" > Comentarios </Text>
                </Pressable>
                
                <Pressable m='2'
                onPress={() => navigation.goBack()}
                >
                <Icon as={Feather} name="minimize-2" size={10} color="blue.400"/>
                <Text color="blue.600" textAlign='center'> Minimizar </Text>
                </Pressable>
                
                </HStack>
        </Box>
            
        </Box>
    )
}
