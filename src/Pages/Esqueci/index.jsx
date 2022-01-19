import React from 'react'
import { Container, Button, ButtonText, ContainerImage, InputCamp } from '../../styles'
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

        </Container>
        
    )
}
export default Esqueci;
