import React from 'react'
<<<<<<< HEAD
import { StyleSheet, Image } from 'react-native'
import { Container, Button, ButtonText, InputText, Text } from '../../styles'
import { TextInputs, Textos } from './style'
=======
import { Container, Button, ButtonText, ContainerImage, InputCamp } from '../../styles'
>>>>>>> 14cf41f1b16f19c2376d16da930c2a09bc1ce89a
import sadCat from '../../assets/sad-cat.png'


const Esqueci = () => {
    return (
       
        <Container color='primary'>
           
            <ContainerImage source={require('../../assets/logo.png')}
            width='250px'
            height={65}
            top={150}
            />
            
        
            <Container align='baseline' padding={30} >
                <ButtonText transform="uppercase" size={14} weight="bold"> E-mail </ButtonText>
                <InputCamp height={45} padding={5}/>
                <Button radius={10}>
                <ButtonText transform="uppercase" size={14} weight="bold"> RECUPERAR SUA SENHA </ButtonText>
                </Button>
                <ContainerImage
                left={100}
                source={sadCat}
                width='80px'
                height={60}
                top={100}
            
                />
             </Container>

<<<<<<< HEAD
            <Container align='baseline' padding={30} top={100}>
                <Text weight='bold' size={15}> E-mail </Text>
                <InputText/>
                 
            </Container>
            
            <Container padding={30} top={-60}>
            <Button radius={10}>
            <ButtonText transform="uppercase" size={14} weight="bold"> RECUPERAR SUA SENHA </ButtonText>
            </Button>
            </Container>
            
            <Container top={-60}>
            <Image source={sadCat}
            
            />
            </Container>  
            
=======
>>>>>>> 14cf41f1b16f19c2376d16da930c2a09bc1ce89a
        </Container>
        
    )
}
export default Esqueci;
