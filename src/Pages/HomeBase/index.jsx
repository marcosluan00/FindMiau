import React from 'react'
import logo from '../../assets/logo.png'
import { NativeBaseProvider,
    extendTheme,
    VStack,
    Stack,
    Text,
    Center,
    Box, 
    Input, 
    Icon, 
    Button,
    IconButton,
    StatusBar,
    HStack,
    Divider,
    Heading,
    AspectRatio,
    ScrollView 
   } from 'native-base'
import theme from '../../styles/theme.json'
import { Image } from 'react-native'
import { MaterialIcons, EvilIcons, Feather  } from '@expo/vector-icons'
import { ContainerImage } from '../../styles'
import { HeaderImg } from '../../Components/Header'
import { Card } from '../../Components/Card'


const HomeBase = ()=>{
    return(<>
    
        {/* <StatusBar barStyle='light-content'/>
                <Box safeAreaTop />
                <HStack bg={theme.colors['light']} px='2' py='2' justifyContent="space-between" 
                alignItems="center" w="100%" >
                    <IconButton icon={<Icon as={EvilIcons } name="camera"/>}
                _icon={{ color:"blue.400",size: "xl"}}/>
                    <ContainerImage 
                    height={35}
                    width='120px'
                    source={require('../../assets/LogoAzul.png')}
                    />
                    <IconButton icon={<Icon as={Feather} name="menu"/>}
                _icon={{color:"blue.400",size: "md"}}/>
                </HStack> */}
                <HeaderImg 
                pacoteIconsL={EvilIcons}
                nomeIconeL={'camera'}
                endereco={require('../../assets/LogoAzul.png')}
                pacoteIconsR={Feather}
                nomeIconeR={'menu'}
                />

                {/* BOTOES */}
                <HStack justifyContent="space-evenly" 
                alignItems="center" w="100%" >
                <Button size="sm" variant="outline" 
                borderColor={theme.colors['primary']} 
                borderRadius="full"
                _pressed={{
                    bg:"blue.600",
                    _text: {
                        color: "white"
                      }
                }}
                >Adoção
                </Button>
                <Button size="sm" variant="outline" 
                borderColor={theme.colors['primary']}
                borderRadius="full"
                _pressed={{
                    bg:"blue.600",
                    _text: {
                        color: "white"
                      }
                }}>
                Procura-se
                </Button>
                <Button size="sm" variant="outline"
                borderColor={theme.colors['primary']}
                borderRadius="full"
                _pressed={{
                    bg:"blue.600",
                    _text: {
                        color: "white"
                      }
                }}>
                Pedidos de Ajuda
                </Button>
                <Button size="sm" variant="outline"
                borderColor={theme.colors['primary']}
                borderRadius="full"
                _pressed={{
                    bg:"blue.600",
                    _text: {
                        color: "white"
                      }
                }}
                >Encontrados
                </Button>
                </HStack>
                {/* FIM DOS BOTOES */}
          <Box bg={theme.colors['primary']} flex={1} pt={2} mt={1}>
              <ScrollView>
                <Card 
                 endereco={require('../../assets/cachorro.jpg')}
                 titulo='Animal perdido proximo a praça germano sampaio'
                 localizacao='Ali na esquina'
                 descricao="Mancha branca por toda parte de baixo"
                />
                <Card 
                 endereco={require('../../assets/gato.png')}
                 titulo='Animal perdido proximo a praça germano sampaio'
                 localizacao='Ali na esquina'
                 descricao="Mancha branca por toda parte de baixo"
                />
                <Card 
                 endereco={require('../../assets/saulo.jpeg')}
                 titulo='Gordinho perdido '
                 localizacao='na travessa s-30'
                 descricao="Branquinho bem gordddo"
                />
                </ScrollView>
          </Box>
                </>
    )
}
export default HomeBase