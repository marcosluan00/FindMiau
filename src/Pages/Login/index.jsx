import React from 'react'
import { View, Text, KeyboardAvoidingView, Image, StyleSheet, TextInput, Input } from 'react-native'
import { TextInputs, Textos} from './style'
import { Button } from '../../Components/style'
 
const Login = () => {
    return (
        
        <KeyboardAvoidingView style={styles.Container}>
            <Image source={require('../../assets/logo.png')}
            style={styles.containerImg}
            />

            <View >
                <Textos> E-mail </Textos>
                <TextInputs/>
                <Textos> Senha </Textos>
                <TextInputs/>

                <Textos> Esqueci minha senha</Textos>
                
            </View>
            <Button
            
            />

        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#64AFFC',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    containerImg: {
        width:150,
        height:42,
    },
    centralizar: {
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center',
    }
    
})
