import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, View } from 'react-native';
import { Titulo, CampoInput,TituloDestaque, ContainerButton, TitleButton } from './style'
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { Container, ButtonText, Button, Text, InputText, InputLine } from '../../styles'

const Cadastro = () => {
    return (
        
        <Container color='primary' justify='flex-start'>
            <Container>
            <Image
            source={require('../../assets/Cadastro.png')}
            style={styles.containerImage}
            />
            </Container>

                <Container align='baseline' padding={30} top={80}>
                    <Text size={14} weight='bold' > Nome </Text>
                    <InputLine />
                    <Text size={14} weight='bold' > E-mail </Text>
                    <InputLine />
                    <Text  size={14} weight='bold' > Telefone </Text>
                    <InputLine />
                    <Text size={14} weight='bold' > Senha </Text>
                    <InputLine />
                    <Text size={14} weight='bold' > Confirmar Senha </Text>
                    <InputLine/>
                </Container>

            {/* RODA PÉ */}
            <Container top={100}>
            <Text> Eu li e concordo com as <Text weight='bold'>Politicas de privacidade</Text></Text>
            </Container>
            <Container padding={30} >
                
                <Button radius={10}>
                    <ButtonText size={16} weight='bold' transform='uppercase'> Cadastrar</ButtonText>
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