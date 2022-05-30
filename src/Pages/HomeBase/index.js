import React, { useLayoutEffect, useState, useEffect, useContext } from 'react'
import { Box,  
    Button,
    HStack,
    ScrollView,
    NativeBaseProvider,
    Icon,
    FlatList,
    Pressable,
    Text,
    Avatar
   } from 'native-base'
import theme from '../../styles/theme.json'
import { EvilIcons, Feather, MaterialCommunityIcons   } from '@expo/vector-icons'
import { ActivityIndicator, Modal } from 'react-native'
import { Header } from '../../Components/Header'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { AuthContext } from '../../contexts/auth'

import { db, storage } from '../../firebaseConnection'
import { collection, orderBy, query, onSnapshot, where } from 'firebase/firestore'

import Card from '../../Components/Card'
import { getDownloadURL, ref } from 'firebase/storage'

const HomeBase = ()=>{
    const {user, Deslogar} = useContext(AuthContext)

    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const [ open, setOpen]= useState(false)
    const [url, setUrl] = useState()

    const [ buttonAdocao, setButtonAdocao ] = useState(true)
    const [ buttonPerdidos, setButtonPerdidos] = useState(false)
    const [ buttonEncontrados, setButtonEncontrados ] = useState(false)
    const [ buttonAjuda, setButtonAjuda ] = useState(false)
    
    function handlePost() {
        
        navigation.navigate('Publicar')
    }
    function handlePostagens() {
        setOpen(false)
        navigation.navigate('Posts')
    }
    function handlePerfil(){
        setOpen(false)
        navigation.navigate('Perfil')
    }

    const [lista, setLista] = useState([])

    useEffect(() => {
        setOpen(false)
        const q = query(collection(db, 'Postagens'), where('categoria', '==', 'adocao'))

        const subscriber = onSnapshot((q), snap => {
            const postList =[]

            snap.forEach(doc => {
                postList.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            setLista(postList)
            setLoading(false)
            setOpen(false)
        })
        async function load(){
            try{
              getDownloadURL(ref(storage, `users/${user.uid}`))
              .then((url)=>{
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (evt) => {
                  const blob = xhr.response
                }
                xhr.open('GET', url)
                xhr.send()
        
                setUrl(url)
              }).catch((e)=>{
                console.log(e)
              })
            } catch(error){
              alert(error)
            }
          }
          load()
        return () => subscriber()
    }, [])

    async function listaAdocao() {
        
        lista.splice(0, lista.length)
        setLoading(true)

        const q = query(collection(db, 'Postagens'), where('categoria', '==', 'adocao'))

        const subscriber = await onSnapshot((q), snap => {
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
        return () => subscriber()
    }
    async function listaPerdidos() {
        setLoading(true)
        lista.splice(0, lista.length)

        const q = query(collection(db, 'Postagens'), where('categoria', '==', 'perdidos'))

        const subscriber = await onSnapshot((q), snap => {
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
        return () => subscriber()
    }
    async function listaEncontrados() {
        setLoading(true)
        lista.splice(0, lista.length)

        const q = query(collection(db, 'Postagens'), where('categoria', '==', 'encontrados'))

        const subscriber = await onSnapshot((q), snap => {
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
        return () => subscriber()
    }
    async function listaAjuda() {
        setLoading(true)
        lista.splice(0, lista.length)

        const q = query(collection(db, 'Postagens'), where('categoria', '==', 'ajuda'))
        const subscriber = await onSnapshot((q), snap => {
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
        return () => subscriber()
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
                    <Box position='absolute' top='1/2' left='2/6'>
                    <ActivityIndicator
                    size={120}
                    color='blue'
                    
                    />

                    </Box>
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
        >   {
                url ? (
                    <Avatar size='xl'
                    source={{uri: url}}
                    />
                ) : (
                    <Avatar size='xl'/>
                )
            }
            <Text fontWeight='bold' fontSize='xl' numberOfLines={1}>{user.nome}</Text>
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
                onPress={handlePostagens}
                leftIcon={<MaterialCommunityIcons name="history" size={24} color="#64AFFC" /> }
                _text={{
                    fontSize:'16',
                    color:'black'
                }}> 
                Postagens
                </Button>
                <Button variant='ghost'
                onPress={handlePerfil}
                leftIcon={<MaterialCommunityIcons name="account" size={24} color="#64AFFC" />}
                _text={{
                    fontSize:'16',
                    color:'black'
                }}
                >
                    Perfil
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