import React from 'react'
import { Container, Button, ButtonText, ContainerImage, InputCamp } from '../../styles'
import sadCat from '../../assets/sad-cat.png'
import logo from '../../assets/logo.png'

const Esqueci = () => {
    return (
       
        <Container color='primary'>
           
            <ContainerImage source={logo}
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
                height={90}
                top={150}
            
                />
             </Container>

        </Container>
        
    )
}
export default Esqueci;
