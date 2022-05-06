import React, { useLayoutEffect, useState, useEffect, useContext } from 'react'
import { Box,  
    Button,
    HStack,
    ScrollView,
    NativeBaseProvider,
    Icon,
    FlatList,
    Pressable,
    Text
   } from 'native-base'
import theme from '../../styles/theme.json'
import { EvilIcons, Feather, MaterialCommunityIcons   } from '@expo/vector-icons'
import { ActivityIndicator, Modal } from 'react-native'
import { Header } from '../../Components/Header'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { AuthContext } from '../../contexts/auth'

import { db } from '../../firebaseConnection'
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore'

import Card from '../../Components/Card'

const HomeBase = ()=>{
    const {user, Deslogar} = useContext(AuthContext)

    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const [ open, setOpen]= useState(false)

    const [ buttonAdocao, setButtonAdocao ] = useState(true)
    const [ buttonPerdidos, setButtonPerdidos] = useState(false)
    const [ buttonEncontrados, setButtonEncontrados ] = useState(false)
    const [ buttonAjuda, setButtonAjuda ] = useState(false)

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
            setButtonAdocao(true)
            setButtonPerdidos(false)
            setButtonEncontrados(false)
            setButtonAjuda(false)
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
            setButtonAdocao(false)
            setButtonPerdidos(true)
            setButtonEncontrados(false)
            setButtonAjuda(false)
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
            setButtonAdocao(false)
            setButtonPerdidos(false)
            setButtonEncontrados(true)
            setButtonAjuda(false)
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
            setButtonAdocao(false)
            setButtonPerdidos(false)
            setButtonEncontrados(false)
            setButtonAjuda(true)
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
                ClickR= {() => setOpen(true)}
                />
                {/* Botoes de busca */}
                <Box w='100%' h='16' backgroundColor='#fff' py='3' flexDirection='row'
                borderBottomRadius='sm'
                >
                    <ScrollView horizontal >
                        {/* BOTAO DE ADOÇÃo */}
                {
                    buttonAdocao ? (
                        <Button borderRadius='full'
                        backgroundColor='blue.400'
                        mx='0.5' _text={{
                            color: 'white',
                            fontWeight:'bold',
                            fontSize:'xs'
                        }} 
                        onPress={()=> listaAdocao()}
                        leftIcon={<MaterialCommunityIcons name="paw" size={20} color="white" />}
                        > Adoção </Button>
        
                    ) : (
                        <Button borderRadius='full' variant='outline' borderWidth={1} borderColor='coolGray.400'  
                        mx='0.5' _text={{
                            color: 'blue.400',
                            fontWeight:'bold',
                            fontSize:'xs'
                        }} 
                        onPress={()=> listaAdocao()}
                        > Adoção </Button>
        
                    )
                }
                    {/* BOTÃO DE PERDIDOS */}
                {
                    buttonPerdidos ? (
                    <Button borderRadius='full'
                        backgroundColor='blue.400'
                        mx='0.5' _text={{
                            color: 'white',
                            fontWeight:'bold',
                            fontSize:'xs'
                        }} leftIcon={<MaterialCommunityIcons name="paw" size={20} color="white" />}
                        onPress={()=> listaPerdidos()}
                    > Perdidos </Button>
                    ) : (
                        <Button borderRadius='full' variant='outline' borderWidth={1} borderColor='coolGray.400'
                        mx='0.5' _text={{
                            color: 'blue.400',
                            fontWeight:'bold',
                            fontSize:'xs'
                        }} onPress={()=> listaPerdidos()}
                        > Perdidos </Button> 
                    )
                }
                    {/* BOTÃO DE ENCONTRADOS */}
                
                {
                    buttonEncontrados ? (
                        <Button borderRadius='full'
                        backgroundColor='blue.400'
                        mx='0.5' _text={{
                            color: 'white',
                            fontWeight:'bold',
                            fontSize:'xs'
                        }} leftIcon={<MaterialCommunityIcons name="paw" size={20} color="white" />} 
                        onPress={()=> listaEncontrados()}
                        > Encontrados </Button>
                    ): (
                        <Button borderRadius='full' variant='outline' borderWidth={1} borderColor='coolGray.400'
                        mx='0.5' _text={{
                            color: 'blue.400',
                            fontWeight:'bold',
                            fontSize:'xs'
                        }}onPress={()=> listaEncontrados()}
                        > Encontrados </Button>
                    )
                }

                    {/* BOTÃO DE AJUDA */}
                {
                    buttonAjuda ? (
                        <Button borderRadius='full'
                        backgroundColor='blue.400'
                        mx='0.5' _text={{
                            color: 'white',
                            fontWeight:'bold',
                            fontSize:'xs'
                        }} leftIcon={<MaterialCommunityIcons name="paw" size={20} color="white" />}
                        onPress={()=> listaAjuda()}> Pedidos de ajuda </Button>
                    ) : (
                        <Button borderRadius='full' variant='outline' borderWidth={1} borderColor='coolGray.400'
                        mx='0.5' _text={{
                            color: 'blue.400',
                            fontWeight:'bold',
                            fontSize:'xs'
                        }} onPress={()=> listaAjuda()}> Pedidos de ajuda </Button>
                    )
                }

                </ScrollView>
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
    <Modal visible={open} animationType='fade' transparent={true}>
        <Box w='55%'
        backgroundColor='#fff'
        alignItems='center'
        h='100%'
        position='absolute'
        right='0'
        >
        <Button position='absolute'
        top='15px'
        left='10px'
        variant='ghost'
        onPress={()=> setOpen(false)}
        >
        <MaterialCommunityIcons name="close" size={25} color="#3D8BFF" />
        </Button>
        <Box position='absolute' alignItems='center'
        top='24'
        p='1'
        >
            <Text fontWeight='bold' fontSize='xl'>{user.nome}</Text>
            <Text fontSize='sm' fontStyle='italic'>{user.email}</Text>

            {/* Botões do menu lateral */}
            <Box 
            alignItems='baseline'
            >
                <Button variant='ghost' onPress={()=>setOpen(false)} mt={8}
                leftIcon={<MaterialCommunityIcons name="home-heart" size={24} color="#64AFFC" /> }
                _text={{
                    fontSize:'16',
                    color:'black'
                }}> 
                Home
                </Button>
                <Button variant='ghost' 
                leftIcon={<MaterialCommunityIcons name="history" size={24} color="#64AFFC" /> }
                _text={{
                    fontSize:'16',
                    color:'black'
                }}> 
                Postagens
                </Button>
                <Button variant='ghost' 
                onPress={()=>Deslogar()}
                leftIcon={<MaterialCommunityIcons name="exit-to-app" size={24} color="#64AFFC" /> }
                _text={{
                    fontSize:'16',
                    color:'black'
                }}> 
                Sair
                </Button>
            </Box>

        </Box>


        </Box>
    </Modal>

    </Box>
    
      
    )
}
export default HomeBase