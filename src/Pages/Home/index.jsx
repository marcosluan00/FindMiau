import React from 'react'
import { Header, HeaderTopo, Filtros, ButtonFiltro, ButtonTexto } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AntDesign, Ionicons  } from '@expo/vector-icons'; 

const Home = () => {
    return (
       <SafeAreaView style={styles.Container}>
           <Header>
               <HeaderTopo> 
                <TouchableOpacity>
                    <AntDesign name="camerao" size={38} color="#64AFFC" />
                </TouchableOpacity>
                <Image style={styles.ContainerImagem}
                source={require('../../../src/assets/LogoAzul.png')}
                />
                <TouchableOpacity>
                     <Ionicons name="menu" size={38} color="#64AFFC" />
                </TouchableOpacity>
               </HeaderTopo>

               <Filtros>
                <ButtonFiltro>
                    <ButtonTexto> Adoção </ButtonTexto>
                </ButtonFiltro>
                <ButtonFiltro>
                    <ButtonTexto> Procura-se </ButtonTexto>
                </ButtonFiltro>
                <ButtonFiltro>
                    <ButtonTexto> Pedidos de Ajuda </ButtonTexto>
                </ButtonFiltro>
                <ButtonFiltro>
                    <ButtonTexto> Encontrados </ButtonTexto>
                </ButtonFiltro>


               </Filtros>

           </Header>

       </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor:'#64AFFC',
        alignItems: 'center',
        
    }, ContainerImagem: {
        height:30,
        width: 120,
        
    }
})