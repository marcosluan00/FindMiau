import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AntDesign, Ionicons  } from '@expo/vector-icons'; 
import {Container } from '../../styles'
import { logo } from '../../assets/FindMeAuAzul.svg'
import {camera } from '../../assets/bi_camera.svg'
import { menu } from '../../assets/gg_menu.svg'


const Home = () => {
    return (
       <Container justify='space-around' color="primary" >

           <Container height={100} top={1} color='light' r>
           <Image source={camera}/>
           <Image source={logo}
            style={styles.ContainerImagem}/>
            <Image source={menu}/>
           </Container>

       </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor:'#64AFFC',
        alignItems: 'center',
        
    }, ContainerImagem: {
        height:30,
        width: 120,
        
    }
})