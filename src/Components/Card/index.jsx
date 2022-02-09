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
    
    IconButton 
 } from 'native-base'
import theme from '../../styles/theme.json'
import { Image } from 'react-native'
import { MaterialIcons,Ionicons, FontAwesome, Entypo  } from '@expo/vector-icons'
import { ContainerImage } from '../../styles'

export function Card (props){
    return(
        <Box alignItems="center" m={0.5}>
        <Box maxW="95%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
        }} _web={{
        shadow: 2,
        borderWidth: 0
        }} _light={{
        backgroundColor: "gray.50"
        }}>
          <Box>
            <AspectRatio w="100%" ratio={15 / 7}>
              <ContainerImage source={props.endereco}
              alt="image" height={175}
              />
            </AspectRatio>
          </Box>

          <Stack p="4" space={3}>
            <Stack space={2}>
                {/* Titulo */}
              <Heading size="sm" mt="1">
                {props.titulo}
              </Heading>

              {/* Localizacao */}
              <Text fontSize="sm" _light={{
              color: "coolGray.400"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500"  mt="-1">
                {props.localizacao}
              </Text>

            </Stack>
            {/*Descrição */}
            <Text fontWeight="400" mt="-1">

            {props.descricao}
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                 <IconButton icon={<Icon as={Ionicons} name={"chatbubble-ellipses"}
                />} _icon={{ color:"blue.400",size: "md"}}/>
                 <IconButton icon={<Icon as={Entypo  } name={"location"}
                />} _icon={{ color:"blue.400",size: "md"}}/>
                 <IconButton icon={<Icon as={Ionicons } name={"share-social"}
                />} _icon={{ color:"blue.400",size: "md"}}/> 
              </HStack>
              <Button variant='ghost'>
                     <Text color={theme.colors['primary']}> Ver mais</Text>
                 </Button>
            </HStack>
          </Stack>
        </Box>
        </Box>
    )
}
