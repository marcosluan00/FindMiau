import React from 'react'
import { View, Text, KeyboardAvoidingView, Image, StyleSheet, StatusBar } from 'react-native'
import { TextInputs, Textos, ContainerButton, TitleButton, SubTexto} from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
 
const Login = () => {
    return (
       
        <SafeAreaView style={styles.Container}>
            
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
        </SafeAreaView>
       
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
        width:200,
        height:58,
        top:120
    },
    containerInputs:{
        top:220
    },
    containerButton:{
        top:250
    },
    containerEsqueci:{
        top:220
    },
    rodaPe:{
        top:400
    }
    
    
})
