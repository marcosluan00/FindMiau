import React from 'react'
import { Box,  
    Button,
    HStack,
    ScrollView,
    NativeBaseProvider
   } from 'native-base'
import theme from '../../styles/theme.json'
import { EvilIcons, Feather  } from '@expo/vector-icons'
import { HeaderImg } from '../../Components/Header'
import { Card } from '../../Components/Card'


const HomeBase = ()=>{
    return(
        <NativeBaseProvider>
       
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
          </NativeBaseProvider>
   
    )
}
export default HomeBase