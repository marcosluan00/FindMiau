import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TextInputs, Textos, ContainerButton, TitleButton, SubTexto} from './style'

import { Container } from '../../styles'

const Login = () => {
    return (
       
        <Container color='primary'>
            <Container top={100}>
             <Image source={require('../../assets/logo.png')}
            style={styles.containerImg}
            />
            </Container>

                <Container align='baseline' marginLeft={75} top={75}>
                <Textos> E-mail </Textos>
                <TextInputs/>
                <Textos> Senha </Textos>
                <TextInputs/>   
                </Container>

            
            <Container top={25}>
                <Textos > Esqueci minha senha</Textos>
                <ContainerButton >
                <TitleButton> ENTRAR </TitleButton>
                </ContainerButton>
                </Container>
            

           <Container top={70}>
            <SubTexto>Não possui cadastro ? <Textos> Cadastrar </Textos></SubTexto>
            </Container>
        </Container>
       
    )
}

export default Login;

const styles = StyleSheet.create({
   
    containerImg: {
        width:200,
        height:58,
        
    }
    
})
