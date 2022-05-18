import React, { useState, useContext } from 'react'
import { ScrollView, StyleSheet, Image, TouchableOpacity, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth'

import { Box, Text, AspectRatio, Stack, Heading, Input, Button, IconButton, Icon, HStack, Pressable } from 'native-base'
import { ContainerImage } from '../../styles'

import { useNavigation } from '@react-navigation/native'

export default function Modal (props) {
    const { user } = useContext(AuthContext)

    const navigation = useNavigation()

    function irComentarios() {
      navigation.navigate('Chat', {doc: props.route.params?.idDoc, img: props.route.params?.imageUrl })
    }

    function irEditar(){
      navigation.navigate('Editar', {doc: props.route.params?.idDoc})
    }
    console.log(props)
    
    return (
        <Box bgColor="rgba(100, 175, 252, 0.7)" flex={1}>
          <ScrollView>
        <Box maxW="98%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" 
        flex={1}
        m='1'
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
              my='2'
              >Postado por { props.route.params?.autor} </Text>
                <Stack my={2}>
                    {/* Titulo */}
                  <Heading size='xl' my='1' >
                    {props.route.params?.titulo}
                  </Heading>

                  {/* Localizacao */}
                  <Text fontSize="md" my='1' _light={{
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
                
                <Pressable flexDir='row' 
                my='6' p='1'
                >
                  <Icon as={MaterialCommunityIcons} name="message-text-outline" size={5} color="blue.400" mr='2'/>
                  <Text color='blue.400' fontSize='md'
                  fontStyle='italic'
                  > Enviar uma mensagem privada </Text>
                </Pressable>

              </Stack>


              <HStack justifyContent='space-evenly' alignItems='center' my='10'>
                
                <Pressable alignItems='center'
                onPress={irComentarios}
                >
                <Icon as={MaterialCommunityIcons} name="chat-processing" size={10} color="blue.400" />
                <Text color="blue.600" > Comentarios </Text>
                </Pressable>
                
                <Pressable alignItems='center'
                onPress={() => navigation.goBack()}
                >
                <Icon as={Feather} name="minimize-2" size={10} color="blue.400"/>
                <Text color="blue.600" textAlign='center'> Minimizar </Text>
                </Pressable>

                { (user.uid === props.route.params?.userId) ? (
                  <Pressable alignItems='center'
                  onPress={irEditar}
                  >
                  <Icon as={Feather} name="edit" size={8} color="blue.400"/>
                  <Text color="blue.600" textAlign='center'> Editar </Text>
                  </Pressable>
                ) : (
                  <></>
                )
                  
                }

                
                </HStack>
        </Box>
        </ScrollView>
        </Box>
    )
}
