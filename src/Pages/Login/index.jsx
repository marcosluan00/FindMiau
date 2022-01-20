import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TextInputs, Textos, ContainerButton, TitleButton, SubTexto} from './style'
import logo from '../../assets/logo.png'
import { Container, Button, ButtonText, InputText, Text } from '../../styles'

const Login = () => {
    return (
       
        <Container color='primary' >
            <Container top={100}>
             <Image source={logo}
            style={styles.containerImg}
            />
            </Container>

                <Container align='baseline' padding={30} top={100}>
                <Text size={14} weight='bold' > E-mail </Text>
                <InputText width='95%'/>
                <Text size={14} weight='bold'> Senha </Text>
                <InputText width='95%'/>  
                </Container>

            <Container padding={30}>
            <Button type='transparent' >
                    <ButtonText weight='bold' size={14}> Esqueci minha senha</ButtonText>
            </Button>

            <Button radius={10} >
                <ButtonText weight='bold' size={16} transform='uppercase'> ENTRAR </ButtonText>
            </Button>
            </Container>
            
            
        <Container top={50}>
            <Button type='transparent' >
                    <ButtonText> Não possui cadastro ? <ButtonText weight='bold'> Cadastrar </ButtonText> </ButtonText>
            </Button>
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
