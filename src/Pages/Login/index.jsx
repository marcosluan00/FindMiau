import React from 'react'
import logo from '../../assets/logo.png'
import { Container, Button, ButtonText, InputText, Text, ContainerImage, InputCamp, ContainerClicker } from '../../styles'

const Login = () => {
    return (  
        <Container color='primary'>
            <ContainerImage
            source={logo}
            width='200px'
            height={60}
            top={100}
            />
            <Container padding={30} align='baseline' top={130}>
                <ButtonText size={16} weight='bold'> E-mail </ButtonText>
                <InputCamp height={45} padding={5}/>
                <ButtonText size={16} weight='bold'> Senha </ButtonText>
                <InputCamp height={45} padding={5}/>

            <Button type='transparent'>
                        <ButtonText weight='bold' size={14}> Esqueci minha senha</ButtonText>
                    </Button>
                    <Button radius={10}>
                        <ButtonText weight='bold' size={16} transform='uppercase'> ENTRAR </ButtonText>
            </Button>
            </Container>

            <Container top={100}>
                    <Button type='transparent'>
                        <ButtonText> Não possui cadastro?<ButtonText weight='bold'> Cadastrar </ButtonText> </ButtonText>
                    </Button>
            </Container>

        </Container>  
        
    )
}

export default Login;
