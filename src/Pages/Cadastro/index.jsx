import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, View } from 'react-native';
import { Titulo, CampoInput,TituloDestaque, ContainerButton, TitleButton } from './style'
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { Container, ButtonText, Button } from '../../styles'

const Cadastro = () => {
    return (
        
        <Container color='primary'>
            <Container>
            <Image
            source={require('../../assets/Cadastro.png')}
            style={styles.containerImage}
            />
            </Container>
            <Container  align='baseline' padding={30} >
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
            </Container>
                <Container padding={30}>
                    <Button radius={10}>
                        <ButtonText transform='uppercase' weight='bold' size={16}>
                            Cadastrar
                        </ButtonText>
                    </Button>
                </Container>
            
        </Container>  
        
        
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