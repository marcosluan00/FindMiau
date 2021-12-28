import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Image, View } from 'react-native'
import { Textos, TextInputs, ContainerButton, TitleButton} from './style' 
import { FontAwesome5 } from '@expo/vector-icons'; 


const Esqueci = () => {
    return (
       
        <SafeAreaView style={styles.Container}>
            
            <Image source={require('../../assets/logo.png')}
            style={styles.containerImg}
            />
            

            <View style={styles.containerInputs}>
                <Textos> E-mail </Textos>
                <TextInputs/>
                 
            </View>
            
            <ContainerButton style={styles.containerButton}>
            <TitleButton> RECUPERAR SUA SENHA </TitleButton>
            
            </ContainerButton>
        
            
            <FontAwesome5 name="sad-cry" size={120} color="#fff" style={styles.icone}/> 
        </SafeAreaView>
       
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