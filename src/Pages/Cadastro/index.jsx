import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { Container, ButtonText, Button, InputInline, ContainerClicker,ContainerImage } from '../../styles'

const Cadastro = () => {
    return (
        
        <Container color='primary'>
            <ContainerClicker top={100}>
            
            <ContainerImage height={30}
            width='200px'
            source={require('../../assets/Cadastro.png')}
            left={80}
            />
           
            <Container  align='baseline' padding={20} top={10}>
                <ButtonText size={16}> Nome </ButtonText>
                <InputInline/>
                <ButtonText size={16}> Email </ButtonText>
                <InputInline/>
                <ButtonText size={16}> Telefone </ButtonText>
                <InputInline/>
                <ButtonText size={16}> Senha   </ButtonText>
                <InputInline/> 
                <ButtonText size={16}> Confirmar Senha </ButtonText>
                <InputInline/>

                <ButtonText size={12}> 
                <AntDesign name="checkcircleo" size={18} color="#fff" /> Eu li e concordo com as 
                <ButtonText size={14} transform='uppercase'> Politicas de Privacidade</ButtonText>
                </ButtonText>
            </Container>
                <Container padding={30} top={10}>
                    <Button radius={10}>
                        <ButtonText transform='uppercase' weight='bold' size={16}>
                            Cadastrar
                        </ButtonText>
                    </Button>
                </Container>
                </ContainerClicker>
        </Container>  
         
    )}
export default Cadastro;
 