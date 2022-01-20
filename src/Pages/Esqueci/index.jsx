import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Button, ButtonText, InputText, Text } from '../../styles'
import { TextInputs, Textos } from './style'
import sadCat from '../../assets/sad-cat.png'

const Esqueci = () => {
    return (
       
        <Container color='primary'>
            <Container >
            <Image source={require('../../assets/logo.png')}
            style={styles.containerImg}
            />
            </Container>  
            

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
            
        </Container>
       
    )
}
export default Esqueci;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#64AFFC',
        alignItems: 'center',   
    },
    containerImg: {
        width:250,
        height:65,
        top:120
    },
    containerInputs:{
        top:220
    },
    containerButton:{
        top:200
    },
    icone:{
        top:300
    }
})