import React from 'react'
import { View, Text, KeyboardAvoidingView, Image, StyleSheet, TextInput, Input } from 'react-native'
import { TextInputs, Textos, ContainerButton, TitleButton, SubTexto} from './style'

 
const Login = () => {
    return (
       
        <KeyboardAvoidingView style={styles.Container}>
            
            <Image source={require('../../assets/logo.png')}
            style={styles.containerImg}
            />
            

            <View style={styles.containerInputs}>
                <Textos> E-mail </Textos>
                <TextInputs/>
                <Textos> Senha </Textos>
                <TextInputs/>   
            </View>
            <Textos style={styles.containerEsqueci}> Esqueci minha senha</Textos>

            <ContainerButton style={styles.containerButton}>
            <TitleButton> ENTRAR </TitleButton>
            </ContainerButton>

           <View style={styles.rodaPe}>
            <SubTexto>Não possui cadastro ? <Textos> Cadastrar </Textos></SubTexto>
            </View>
        </KeyboardAvoidingView>
       
    )
}

export default Login;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#64AFFC',
        alignItems: 'center',
        
    },
    containerImg: {
        width:150,
        height:42,
        top:200
    },
    containerInputs:{
        top:300
    },
    containerButton:{
        top:300
    },
    containerEsqueci:{
        top:290
    },
    rodaPe:{
        top:460
    }
    
    
})
