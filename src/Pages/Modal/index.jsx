import React from 'react'
import { ScrollView, StyleSheet, Image, TouchableOpacity, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, FontAwesome, MaterialCommunityIcons, Entypo    } from '@expo/vector-icons'; 

import { Header, Conteudo, Titulo, SubTitulo, Localizacao, Descricao, Rodape, Icone } from './style'

const index = () => {
    return (
        <SafeAreaView style={styles.Container}>
            <Header>
                <TouchableOpacity>
                <Ionicons name="chevron-back" size={35} color="#64AFFC" />
                </TouchableOpacity>
                <Image style={styles.ContainerImagem}
                source={require('../../../src/assets/LogoAzul.png')}
                />
                <TouchableOpacity>
                <Ionicons name="menu" size={38} color="#64AFFC" />
                </TouchableOpacity>

                </Header>
            <ScrollView> 
                <Conteudo>
                    <Image
                    style={styles.ImagemExemplo}
                    source={require('../../../src/assets/cachorro.jpg')}
                    />
                    
                    <Titulo>
                    Animal perdido próximo a praça Germano Sampaio
                    </Titulo>
                    <Localizacao> Rua Laira pinheiro Maia - Bairro Silvio Botelho 
                        <FontAwesome name="map-marker" size={16} color="#64AFFC" />
                    </Localizacao>
                    <SubTitulo> O animal possui uma coleira azul e tem uma mancha preta nas costas... </SubTitulo>

                    <Image
                    style={styles.ImagemExemplo}
                    source={require('../../../src/assets/map.png')}
                    />

                    <SubTitulo>
                    Numero para contato: (95) 94002-8922
                    </SubTitulo>

                    <TouchableOpacity >
                    <SubTitulo>
                         <MaterialCommunityIcons name="comment-text-outline" size={20} color="#64AFFC" /> 
                    
                        Enviar uma mensagem privada para o dono desta postagem
                    </SubTitulo>
                    </TouchableOpacity>

                    <Rodape>
                        <Icone>
                        <FontAwesome name="commenting" size={36} color="#64AFFC" />
                        <Descricao>Comentar</Descricao>
                        </Icone>

                        <Icone>
                        <Entypo name="location" size={36} color="#64AFFC" />
                        <Descricao>Localização</Descricao>
                        </Icone>

                        <Icone>
                        <FontAwesome name="share-alt" size={36} color="#64AFFC" />
                        <Descricao>Compartilhar</Descricao>
                        </Icone>
                    </Rodape>
                </Conteudo>

            </ScrollView>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#64AFFC',
        
    }, ContainerImagem: {
        height:30,
        width: 120,
    }, ImagemExemplo: {
        width:360,
        height:212,
        borderRadius:10,
    }, 
})