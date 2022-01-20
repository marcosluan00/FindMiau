import React from 'react'
<<<<<<< HEAD
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, View } from 'react-native';
import { Titulo, CampoInput,TituloDestaque, ContainerButton, TitleButton } from './style'
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { Container, ButtonText, Button, Text, InputText, InputLine } from '../../styles'
=======
import { AntDesign } from '@expo/vector-icons'; 
import { Container, ButtonText, Button, InputInline, ContainerClicker,ContainerImage } from '../../styles'
>>>>>>> 14cf41f1b16f19c2376d16da930c2a09bc1ce89a

const Cadastro = () => {
    return (
        
<<<<<<< HEAD
        <Container color='primary' justify='flex-start'>
            <Container>
            <Image
=======
        <Container color='primary'>
            <ContainerClicker top={100}>
            
            <ContainerImage height={30}
            width='200px'
>>>>>>> 14cf41f1b16f19c2376d16da930c2a09bc1ce89a
            source={require('../../assets/Cadastro.png')}
            left={80}
            />
<<<<<<< HEAD
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
            
=======
           
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
>>>>>>> 14cf41f1b16f19c2376d16da930c2a09bc1ce89a
        </Container>  
         
    )}
export default Cadastro;
 