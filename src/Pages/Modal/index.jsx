import React, { useState, useContext, useEffect } from 'react'
import { ScrollView, StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import * as Linking from 'expo-linking';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth'

import { Box, Text, AspectRatio, Stack, Heading, Input, Button, IconButton, Icon, HStack, Pressable } from 'native-base'
import { ContainerImage } from '../../styles'

import { useNavigation } from '@react-navigation/native'
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { db } from '../../firebaseConnection'
import { GiftedChat, InputToolbar, Bubble } from 'react-native-gifted-chat';

export default function Modal (props) {
    const { user } = useContext(AuthContext)
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      const collectionRef = collection(db, 'comentarios_'+ props.route.params?.idDoc);
      const q = query(collectionRef, orderBy('createdAt', 'desc'));
  
      const unsubscribe = onSnapshot(q, querySnapshot => {
        setMessages(
          querySnapshot.docs.map(doc => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user
          }))
        );
      });
  
      return () => unsubscribe();
    }, []);


    const navigation = useNavigation()

    function handleLigar(){
      Linking.openURL('tel:'+props.route.params?.telefone)
    }
    function handleWhat(){
      Linking.openURL("https://api.whatsapp.com/send?phone=55"+props.route.params?.telefone+"&text=Olá vim pela sua publicação no aplicativo FindMiau")
    }

    function irComentarios() {
      navigation.navigate('Chat', {doc: props.route.params?.idDoc, img: props.route.params?.imageUrl })
    }

    function irEditar(){
      navigation.navigate('Editar', {doc: props.route.params?.idDoc})
    }
    
    return (
        <Box bgColor="rgba(100, 175, 252, 0.7)" h='100%'>
        <Box maxW="98%" rounded="lg" borderColor="coolGray.200" borderWidth="1" 
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
                    alt="image" height={220}
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
                <Stack my={1}>
                    {/* Titulo */}
                  <Heading my='1' fontSize='xl'>
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
                <Text fontWeight="500" fontSize='md' my='2'>
                {props.route.params?.descricao}
                </Text >
                </Stack>

                <Box h='1/5' my='2'>
                  <Text fontStyle='italic'> Aqui vai tem algum campo </Text>
                

                </Box>

                {
                props.route.params?.telefone ? (
                    <Text mb='2' fontSize="sm" fontWeight="400"> Nº para contato: {props.route.params?.telefone} </Text>
                ) : (
                    <>
                    </>
                )
                }
                <Box flexDir='row'>
                <Pressable flexDir='row' 
                 p='1' mr='2'
                onPress={handleLigar}
                >
                  <Icon as={MaterialCommunityIcons} name="cellphone" size={6} color="blue.500" mr='1'/>
                  <Text color='blue.500' fontSize='md'
                  fontStyle='italic'
                  > Fazer ligação </Text>
                </Pressable>

                <Pressable flexDir='row' 
                 p='1'
                onPress={handleWhat}
                >
                  <Icon as={MaterialCommunityIcons} name="whatsapp" size={6} color="blue.500" mr='1'/>
                  <Text color='blue.500' fontSize='md'
                  fontStyle='italic'
                  > Mensagem Whatsapp </Text>
                </Pressable>
                
                </Box>
              </Stack>


              <HStack justifyContent='space-evenly' alignItems='center'>
                
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
        </Box>
    )
}
