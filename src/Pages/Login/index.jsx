import React from 'react'
import logo from '../../assets/logo.png'
<<<<<<< HEAD
import { Container, Button, ButtonText, InputText, Text } from '../../styles'
=======
import { Container, Button, ButtonText, ContainerImage,InputCamp } from '../../styles'
>>>>>>> 14cf41f1b16f19c2376d16da930c2a09bc1ce89a

const Login = () => {
    return (
       
        
        <Container color='primary' >

             <ContainerImage source={logo}
             width='200px'
             height={58}
             top={80}
            />
<<<<<<< HEAD
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

=======
                <Container align='baseline' padding={25} top={150}>
                <ButtonText transform='uppercase' size={14} weight='bold'> E-mail </ButtonText>
                <InputCamp height={45} padding={5}/>
                <ButtonText transform='uppercase' size={14} weight='bold'> Senha </ButtonText>
                <InputCamp height={45}/>   
               
            <Button type='transparent' >
                    <ButtonText weight='bold' size={14}> Esqueci minha senha</ButtonText>
            </Button>
>>>>>>> 14cf41f1b16f19c2376d16da930c2a09bc1ce89a
            <Button radius={10} >
                <ButtonText weight='bold' size={16} transform='uppercase'> ENTRAR </ButtonText>
            </Button>
            </Container>
            
            
        <Container top={100}>
            <Button type='transparent' >
                    <ButtonText> Não possui cadastro ? <ButtonText weight='bold'> Cadastrar </ButtonText> </ButtonText>
            </Button>
        </Container>  
            
        </Container>
       
    )
}

export default Login;
