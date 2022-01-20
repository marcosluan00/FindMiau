import React from 'react'
import {Container, Button, ButtonText, ContainerImage, ContainerClicker, ButtonBorder} from '../../styles'
import { logo } from '../../assets/LogoAzul.png'
import {camera } from '../../assets/bi_camera.png'
import { menu } from '../../assets/hamburguer.png'


const Home = () => {
    return (
       <Container color="light">
           <ContainerClicker>
               <Container>
               <ContainerImage
                source={logo}
                width='200px'
                height={60}
                top={100}
                />

                   
               </Container>
         <Container row='column' justify='space-evenly'>
            <ButtonBorder width='25%' radius={20} type='light' >
                <ButtonText color='blue-dark' size={14} weight='bold' transform='uppercase'>Adoção
                </ButtonText></ButtonBorder>
            <ButtonBorder width='25%' radius={20} type='light'  >
                <ButtonText color='blue-dark' size={14} weight='bold' transform='uppercase'>Procura-se
                    </ButtonText></ButtonBorder>
            <ButtonBorder width='25%' radius={20} type='light' >
                <ButtonText color='blue-dark' size={14} weight='bold' transform='uppercase'>Pedidos de ajuda
                    </ButtonText></ButtonBorder>
            <ButtonBorder width='26%' radius={20} type='light' >
                <ButtonText color='blue-dark' size={14} weight='bold' transform='uppercase'>Encontrados
                    </ButtonText></ButtonBorder>
         </Container>

         </ContainerClicker>
       </Container>
    )
}

export default Home
