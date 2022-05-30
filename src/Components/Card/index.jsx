import React from 'react'
import { Text,
    Center ,
    Box, 
    Input, 
    Icon, 
    Button,
    AspectRatio,
    Stack,
    Heading,
    HStack,
    Pressable,
    IconButton 
 } from 'native-base'
import theme from '../../styles/theme.json'
import * as Linking from 'expo-linking';
import { MaterialIcons,Ionicons, FontAwesome, Entypo, MaterialCommunityIcons  } from '@expo/vector-icons'
import { ContainerImage } from '../../styles'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigation } from '@react-navigation/native'

export default function Card ({ data }){
  const navigation = useNavigation()

  function handleLigar(){
    Linking.openURL('tel:'+data?.telefone)
  }
  function handleWhat(){
    Linking.openURL("https://api.whatsapp.com/send?phone=55"+data?.telefone+"&text=Olá vim pela sua publicação no aplicativo FindMiau")
  }

  function irComentarios() {
    navigation.navigate('Chat', {doc: data?.idDoc, img: data?.imageUrl })
  }

  const dados = {
    ...data
  }

  function verMais() {
    navigation.navigate('Modal', { ...dados })
  }

  function formatTimePost() {
    //Converter 
    const datePost = new Date(data?.data.seconds * 1000)

    return formatDistance(
        new Date(),
        datePost,
        {
            locale:ptBR
        }
    )
} 

    return(
        <Pressable alignItems="center" mt={1}
        onPress={verMais}
        >
        <Box maxW="95%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
        }} _light={{
        backgroundColor: "gray.50"
        }}
        >
          <Box>
            <AspectRatio w="100%" ratio={{
              base:  23/ 10,
            }}>
              { (data?.imageUrl) ? (
                <ContainerImage resizeMode="contain" source={{ uri: data?.imageUrl }}
                alt="image" height={150}
                />
              ): (
                <ContainerImage
                source={require('../../assets/gato.png')}
                alt="image" height={150}
                /> 
              )
              }
            </AspectRatio>
          </Box>

          <Stack px="4" space={1}>
          <Text color='blue.300' fontSize='xs' textAlign='right'>Postado por { data?.autor+ ' ' + formatTimePost()} </Text>
            <Stack space='xs'>
                {/* Titulo */}
              <Heading size="sm" numberOfLines={1}>
                {data?.titulo}
              </Heading>

              {/* Localizacao */}
              <Text numberOfLines={1} fontSize="sm" _light={{
              color: "coolGray.600"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500">
                {data?.localizao}
              </Text>

            </Stack>
            {/*Descrição */}
            <Text fontWeight="400" numberOfLines={1}>
            {data?.descricao}
            </Text >
            
            <HStack alignItems="center" space={3} justifyContent="space-between">
              <HStack alignItems="center">
                 <IconButton icon={<Icon as={Ionicons} name={"chatbubble-ellipses"}
                 onPress={irComentarios}
                />} _icon={{ color:"blue.400",size: "md"}}/>
                  <IconButton icon={<Icon as={MaterialCommunityIcons} name={"phone"}
                  onPress={handleLigar}
                />} _icon={{ color:"blue.400",size: "md"}}/>
                <IconButton icon={<Icon as={MaterialCommunityIcons} name={"whatsapp"}
                />} _icon={{ color:"blue.400",size: "md"}}
                onPress={handleWhat}
                />

              </HStack>
              
              <Button variant='ghost' onPress={verMais}>
                     <Text color={theme.colors['primary']}>  Ver mais</Text>
              </Button>
                    
            </HStack>
          </Stack>
        </Box>
        </Pressable>
    )
}
