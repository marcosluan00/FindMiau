import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, View } from 'react-native';
import { Titulo, CampoInput,TituloDestaque, ContainerButton, TitleButton } from './style'
import { AntDesign, Feather } from '@expo/vector-icons'; 


const Cadastro = () => {
    return (
        <SafeAreaView style={styles.Container}>

            <Image
            source={require('../../assets/Cadastro.png')}
            style={styles.containerImage}
            />

            <View style={styles.containerInputs}>
                <Titulo> Nome </Titulo>
                <CampoInput/>
                <Titulo> Email </Titulo>
                <CampoInput/>
                <Titulo> Telefone </Titulo>
                <CampoInput/>
                <Titulo> Senha   </Titulo>
                <CampoInput/> 
                <Titulo> Confirmar Senha </Titulo>
                <CampoInput/>

                <Titulo> 
                <AntDesign name="checkcircleo" size={18} color="#fff" /> Eu li e concordo com as 
                <TituloDestaque> Politicas de Privacidade</TituloDestaque>
                </Titulo>
                </View>

                <ContainerButton>
                    <TitleButton>
                        Cadastrar
                    </TitleButton>
                </ContainerButton>
            
            
           
        </SafeAreaView>
        
    )}
export default Cadastro;
 
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#64AFFC',
        alignItems: 'center', 
           
    },
    containerImage: {
        top:70,
        marginBottom:100,
        height:30,
        width:200,
        resizeMode: 'stretch'
    },
    containerInputs:{
        marginTop:50,
        marginLeft:5,
        marginBottom:50
    }, 
    posicaoOlho: {
        marginLeft:250
    }
})