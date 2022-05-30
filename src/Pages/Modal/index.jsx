import React, { useState, useContext, useEffect } from 'react'
import * as Linking from 'expo-linking';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth'

import { Box, Text, AspectRatio, Stack, Heading, 
  Input, Button, IconButton, Icon, HStack, Pressable, Badge,
  ScrollView  } from 'native-base'
import { ContainerImage } from '../../styles'
import MapView, { Marker } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native'
import {
  deleteDoc, doc, addDoc, collection, updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConnection'

export default function Modal (props) {
    const { user } = useContext(AuthContext)
    const [messages, setMessages] = useState([]);
    const [marker, setMarker] = useState(null);

    const navigation = useNavigation()

    function handleLigar(){
      Linking.openURL('tel:'+props.route.params?.telefone)
    }
    function handleWhat(){
      Linking.openURL("https://api.whatsapp.com/send?phone=55"+props.route.params?.telefone+"&text=Olá vim pela sua publicação no aplicativo FindMiau")
    }
    function handleBack(){
      navigation.goBack()
      
    }
    function irComentarios() {
      navigation.navigate('Chat', {doc: props.route.params?.idDoc, img: props.route.params?.imageUrl })
    }

    function irEditar(){
      navigation.navigate('Editar', {doc: props.route.params?.idDoc})
    }
    function excluirPost(){
      const ref = doc(db, "Postagens", props.route.params?.idDoc)
      deleteDoc(ref)
      navigation.goBack()
    }
    async function handleConcluido() {
      await addDoc(collection(db, 'Resolvidos/'), {
        data: new Date(),
        autor:user.nome,
        telefone: user.telefone,
        categoria: props.route.params?.categoria,
        userId: user.uid,
        titulo: props.route.params?.titulo,
        descricao: props.route.params?.descricao,
        localizao: props.route.params?.localizao,
        localizacaoCod: props.route.params?.localizacaoCod,
        imageUrl: props.route.params?.imageUrl,
        infoAjuda: props.route.params?.infoAjuda,
        caracteristicas: {
          animal: props.route.params?.caracteristicas?.animal,
          porte: props.route.params?.caracteristicas?.porte,
          sexo: props.route.params?.caracteristicas?.sexo,
          vacinado: props.route.params?.caracteristicas?.vacinado,
          castramento: props.route.params?.caracteristicas?.castramento,
        }
      }).then((documento)=> {
        const refAtt = doc(db, 'Resolvidos/', documento.id)
        updateDoc(refAtt, {
          idDoc : documento.id
        }).then(()=> {
          const ref = doc(db, "Postagens", props.route.params?.idDoc)
          deleteDoc(ref)
        })
        
        alert('Sucesso ')
        handleBack()
      })
    }

    console.log(props.route.params?.localizacaoCod)

    return (
        <ScrollView bgColor="rgba(100, 175, 252, 0.7)">
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
    
              <Stack px="4">

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
                <Pressable h='40' zIndex={9} bgColor='transparent'
                
                >

                  {
                    props.route.params?.localizacaoCod?.lat ? (
                      <MapView
                  initialRegion={{
                    latitude:props.route.params?.localizacaoCod?.lat,
                    longitude: props.route.params?.localizacaoCod?.lng,
                    latitudeDelta: 0.007,
                    longitudeDelta: 0.007
                  }}
                  
                  style={{
                    flex:1
                  }}
                  ><Marker
                  coordinate={{
                    latitude:props.route.params?.localizacaoCod?.lat,
                    longitude: props.route.params?.localizacaoCod?.lng
                   }}
                  />

                  </MapView>
                    ) : (
                      <Text textAlign='center'> Ocorreu um erro e a localização não foi encontrada </Text>
                    )
                  }
                  
                  
                </Pressable>

                
                <Text mb='2' fontSize="sm" fontWeight="400"> Nº para contato: {props.route.params?.telefone} </Text>
               

               <Box alignItems="center" flexDir='row' justifyContent='center' my='2'
                flexWrap='wrap'
                >
                  {
                    props.route.params?.caracteristicas?.animal ? (
            <Badge backgroundColor='blue.400' 
              rounded="full" zIndex={1} variant="solid" py='1.5' px='4' m='1'
              _text={{
              fontSize: 'md'
              
              }}>
              {props.route.params?.caracteristicas?.animal}</Badge> 
              )
                    :(<> </>)
                  }
              {
                    props.route.params?.caracteristicas?.porte ? (
            <Badge backgroundColor='blue.400' 
              rounded="full" zIndex={1} variant="solid" py='1.5' px='4' m='1'
              _text={{
              fontSize: 'md'
              
              }}>
              {props.route.params?.caracteristicas?.porte}</Badge> 
              )
                    :(<> </>)
                  }
              {
                    props.route.params?.caracteristicas?.sexo ? (
            <Badge backgroundColor='blue.400' 
              rounded="full" zIndex={1} variant="solid" py='1.5' px='4' m='1'
              _text={{
              fontSize: 'md'
              
              }}>
              {props.route.params?.caracteristicas?.sexo}</Badge> 
              )
                    :(<> </>)
                  }
              {
                props.route.params?.categoria === 'adocao' ? (
                  <>
                  <Badge backgroundColor='blue.400' 
              rounded="full" zIndex={1} variant="solid" py='1.5' px='4' m='1'
              _text={{
              fontSize: 'md'
              
              }}>{props.route.params?.caracteristicas.castramento}</Badge>
                  <Badge backgroundColor='blue.400' 
              rounded="full" zIndex={1} variant="solid" py='1.5' px='4' m='1'
              _text={{
              fontSize: 'md'
              
              }}>{props.route.params?.caracteristicas.vacinado}</Badge>
                  </>
                ):
                (
                  <></>
                )
              }
            </Box>
                

                <Box flexDir='row' my='1'>
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



              <HStack justifyContent='space-evenly' alignItems='center' my='4'>
                
                <Pressable alignItems='center'
                onPress={irComentarios}
                >
                <Icon as={MaterialCommunityIcons} name="chat-processing" size={10} color="blue.400" />
                <Text color="blue.600" > Comentarios </Text>
                </Pressable>

                { (user.uid === props.route.params?.userId) ? (
                  <Box flexDir='row'>
                    <Pressable alignItems='center'
                  onPress={irEditar}
                  mr='6'
                  >
                  <Icon as={Feather} name="edit" size={8} color="blue.400"/>
                  <Text color="blue.600" textAlign='center'> Editar </Text>
                  </Pressable>
                  <Pressable alignItems='center' onPress={handleConcluido}
                  >
                  <Icon as={Feather} name="check-square" size={8} color="blue.400"/>
                  <Text color="blue.600" textAlign='center'> Resolvido </Text>
                  </Pressable>
                  <Pressable alignItems='center' onPress={excluirPost}
                  >
                  <Icon as={Feather} name="trash" size={8} color="blue.400"/>
                  <Text color="blue.600" textAlign='center'> Excluir </Text>
                  </Pressable>
                  
                  </Box>
                  
                ) : (
                  <></>
                ) 
                }
                </HStack>
                
        </Box>
        </ScrollView>
    )
}
