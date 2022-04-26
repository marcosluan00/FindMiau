import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Box,  
    Button,
    HStack,
    ScrollView,
    NativeBaseProvider,
    Icon,
    FlatList,
    Pressable
    
   } from 'native-base'
import theme from '../../styles/theme.json'
import { EvilIcons, Feather, MaterialCommunityIcons   } from '@expo/vector-icons'
import { ActivityIndicator } from 'react-native'
import { Header } from '../../Components/Header'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

import { db } from '../../firebaseConnection'
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore'

import Card from '../../Components/Card'

const HomeBase = ()=>{
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    function handlePost() {
        navigation.navigate('Publicar')
    }

    const [lista, setLista] = useState([])

    useEffect(() => {
        const refAdocao = collection(db, 'adocao')

        const subscriber = onSnapshot((refAdocao), snap => {
            const postList =[]

            snap.forEach(doc => {
                postList.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            setLista(postList)
            setLoading(false)
        })
        return () => subscriber()
    }, [])

    async function listaAdocao() {
        
        lista.splice(0, lista.length)
        setLoading(true)

        const refAdocao = collection(db, 'adocao')

        await onSnapshot((refAdocao), snap => {
            const postList =[]

            snap.forEach(doc => {
                postList.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            setLista(postList)
            setLoading(false)
        })
    }
    async function listaPerdidos() {
        setLoading(true)
        lista.splice(0, lista.length)

        const refAdocao = collection(db, 'perdidos')

        await onSnapshot((refAdocao), snap => {
            const postList =[]

            snap.forEach(doc => {
                postList.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            setLista(postList)
            setLoading(false)
        })
    }
    async function listaEncontrados() {
        setLoading(true)
        lista.splice(0, lista.length)

        const refAdocao = collection(db, 'encontrados')

        await onSnapshot((refAdocao), snap => {
            const postList =[]

            snap.forEach(doc => {
                postList.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            setLista(postList)
            setLoading(false)
        })
    }
    async function listaAjuda() {
        setLoading(true)
        lista.splice(0, lista.length)

        const refAdocao = collection(db, 'ajuda')

        await onSnapshot((refAdocao), snap => {
            const postList =[]

            snap.forEach(doc => {
                postList.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            setLista(postList)
            setLoading(false)
        })
    }


    return(
     <Box bgColor="rgba(100, 175, 252, 0.7)" flex={1}>
                {/* Header */}
                <Header
                pacoteIconsL={MaterialCommunityIcons}
                nomeIconeL='camera-plus-outline'
                endereco={require('../../assets/LogoAzul.png')}
                pacoteIconsR={MaterialCommunityIcons}
                nomeIconeR='menu'
                ClickL ={handlePost}
                />
                {/* Botoes de busca */}
                <Box w='100%' h='16' backgroundColor='#fff' py='3' flexDirection='row'>
                <Button borderRadius='full' variant='outline' borderWidth={1} borderColor='coolGray.400'  
                mx='0.5' _text={{
                    color: 'blue.400',
                    fontWeight:'bold',
                    fontSize:'xs'
                }} 
                onPress={()=> listaAdocao()}
                > Adoção </Button>

                <Button borderRadius='full' variant='outline' borderWidth={1} borderColor='coolGray.400'
                mx='0.5' _text={{
                    color: 'blue.400',
                    fontWeight:'bold',
                    fontSize:'xs'
                }} onPress={()=> listaPerdidos()}
                > Perdidos </Button>
                
                <Button borderRadius='full' variant='outline' borderWidth={1} borderColor='coolGray.400'
                mx='0.5' _text={{
                    color: 'blue.400',
                    fontWeight:'bold',
                    fontSize:'xs'
                }}onPress={()=> listaEncontrados()}
                > Encontrados </Button>

                <Button borderRadius='full' variant='outline' borderWidth={1} borderColor='coolGray.400'
                mx='0.5' _text={{
                    color: 'blue.400',
                    fontWeight:'bold',
                    fontSize:'xs'
                }} onPress={()=> listaAjuda()}> Pedidos de ajuda </Button>

                </Box>
            {
                loading ? (
                    <ActivityIndicator
                    size={50}
                    color='blue'
                    />
                ): (
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={lista}
                    renderItem={ ({ item }) => <Card
                    data={item}
                    shadow="9" 
                    /> }
                    />
                )
            }
           

    </Box>
    )
}
export default HomeBase