import React, { useLayoutEffect, useState, useContext } from 'react';
import { View, Platform, KeyboardAvoidingView, Modal } from 'react-native';

import uuid from 'uuid'
import { Box, 
  NativeBaseProvider,
  Button, Text, ZStack, Pressable, Select, FormControl, Switch, Input, ScrollView, IconButton } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../Components/Header';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import { AuthContext } from '../../contexts/auth'


import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../firebaseConnection';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

import { ContainerImage } from '../../styles'

import * as ImagePicker from 'expo-image-picker'

export default function Publicar() {


  const [categoria, setCategoria] = useState('');
  const [titulo, setTitulo] = useState('')
  const [ url, setUrl]= useState(null)
  const [ descricao, setDescricao] = useState('')
  const [ localizacao, setLocalizacao] = useState('')
  const [ handleTelefone, setHandleTelefone ] = useState(false)
  const [ ajuda, setAjuda ] = useState('')
  const [ open, setOpen]= useState(false)

  const { user } = useContext(AuthContext)


 const navigation = useNavigation()
 
 function handleBack(){
   navigation.goBack()
   
 }
 async function uploadFileCamera() {
   let pickerResult = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    presentationStyle: 0,
    aspect: [4, 3],
   })
   console.log('Imagem selecionada')
   
   uploadFileFirestore(pickerResult)
   setOpen(false)
 }
 
 async function uploadFileGalery() {
   
  let pickerResult = await ImagePicker.launchImageLibraryAsync( {
   allowsEditing: true,
   presentationStyle: 0,
   aspect: [4, 3],
  })
  console.log('Imagem selecionada')
  
  uploadFileFirestore(pickerResult)
  
  setOpen(false)
}

const uploadFileFirestore = async (pickerResult) => {
  try {
    if(!pickerResult.cancelled){
      const uploadUrl = await uploadImageAsync(pickerResult.uri)
      setUrl(uploadUrl)  
    }
  } catch (error) {
    console.log(error);
    alert("Upload failed, sorry :(");
  }
}  
async function uploadImageAsync(uri) {
  console.log('Aqui enivar a imagem')

        const blob = await new Promise((resolve, reject)=> {
          const xhr = new XMLHttpRequest();
          xhr.onload = function(){
            resolve(xhr.response)
          }
          xhr.onerror = function(e) {
            console.log(e)
            reject(new TypeError('Error na requisiçao'))
          }
          xhr.responseType = 'blob'
          xhr.open('GET', uri, true)
          xhr.send(null)
        })
        const fireRef = ref(storage,`Postagens/${user.uid}_${new Date}`)
        
        const result = await uploadBytes(fireRef, blob).then((response)=> {
          console.log('foi')
          console.log(response)
        }).catch((e)=> {
          console.log(e)
        })
        return await getDownloadURL(fireRef);
}

 

 async function handlePublicar() {
    if(categoria === '' || titulo === '' || descricao === '' ){
      alert('Algum campo não preenchido')
      return
    }
      if(handleTelefone){
        await addDoc(collection(db, 'Postagens/'), {
          data: new Date(),
          autor:user.nome,
          categoria: categoria,
          userId: user.uid,
          telefone: user.telefone,
          titulo: titulo,
          descricao: descricao,
          localizao: localizacao,
          imageUrl: url,
          infoAjuda: ajuda,
        }).then((documento)=> {
          const refAtt = doc(db, 'Postagens/', documento.id)
          updateDoc(refAtt, {
            idDoc : documento.id
          })
          alert('Sucesso')
          handleBack()
        })

      } else {
        await addDoc(collection(db, 'Postagens/'), {
          data: new Date(),
          autor:user.nome,
          categoria: categoria,
          userId: user.uid,
          titulo: titulo,
          descricao: descricao,
          localizao: localizacao,
          imageUrl: url,
          infoAjuda: ajuda,

        }).then((documento)=> {
          const refAtt = doc(db, 'Postagens/', documento.id)
          updateDoc(refAtt, {
            idDoc : documento.id
          })
          alert('Sucesso ')
          handleBack()
        })
      }
 }

 return (
  <ScrollView bgColor="rgba(100, 175, 252, 0.7)" flex={1} alignContent='center' >
  <Header
 pacoteIconsL={MaterialCommunityIcons}
 nomeIconeL='close-circle'
 ClickL={handleBack}
 endereco={require('../../assets/novaPublicacao.png')}
 pacoteIconsR={MaterialCommunityIcons}
 nomeIconeR='arrow-right-bold-circle'
 h={30}
 w='190px'
 ClickR={handlePublicar}
 />
        {/* container image */}
          <Box w='97%'
          bg='#fff'
          alignItems='center'
          justifyContent='center'
          m='1.5'
          height='56'
          borderRadius='sm'
          >
            { url ? (
              <>
            <Pressable
            height='100%' bgColor='gray.100' width='100%' borderRadius='md' alignItems='center' justifyContent='center'
            onPress={uploadFileGalery}>
            <ContainerImage
              source={{ uri: url}}
              height='190'
              width='92%'
              />
          <IconButton h='1/2' w='1/2' position='absolute' onPress={uploadFileGalery}
            _icon={{
          as: MaterialCommunityIcons,
          name: "camera-plus",
          color: 'blue.400',
          size:'2xl'
          }}>
            </IconButton>

            </Pressable>  
              
              </>

            ) : (
            <Pressable zIndex={9}
            height='90%' bgColor='gray.100' width='92%' borderRadius='md' alignItems='center' justifyContent='center'
            onPress={uploadFileGalery}>
            <MaterialCommunityIcons name="camera-plus" size={50} color="#64AFFC" />
            </Pressable>
            )

            }
            
          </Box>

        {/* Formulario */}
        <Box  w='97%'
          mt='1'
          bg='#fff'
          m='1.5'
          py='4'
          px='4'
          borderRadius='sm'>    
    <KeyboardAvoidingView
    style={{flex:1}}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

        <FormControl>
         {/* Categoria */}
        <Box alignItems='center'
        justifyContent='center'
        >
          
        <Select accessibilityLabel="Categoria" placeholder="Categoria"  mt="1" selectedValue={categoria} w='100%'
        borderRadius='lg' 
        _selectedItem={{
          bg: "blue.300",
          borderRadius:'sm'
        }} _light={{
          bg: "coolGray.50",
          color: 'gray.800',
        }} _dark={{
          bg: "gray.500",
          color: 'gray.800',
        }}
        borderColor='blue.400'
        fontSize='md'
        onValueChange={itemValue => setCategoria(itemValue)}>
          <Select.Item label="Adoção" value="adocao" />
          <Select.Item label="Perdidos" value="perdidos" />
          <Select.Item label="Encontrados" value="encontrados" />
          <Select.Item label="Pedidos de Ajuda" value="ajuda" />
        </Select>
        </Box>

        {/* Inputs */}
        
        <FormControl.Label>Titulo da postagem</FormControl.Label>
        <Input
        value={titulo}
        onChangeText={(item) => setTitulo(item)}
        _focus={{
          bg:'#fff',
          borderWidth:'1.5',
          borderColor:'blue.400'
        }}
        />

        <FormControl.Label>Descrição</FormControl.Label>
        <Input h='70'
        width='100%'
        value={descricao}
        multiline={true}
        onChangeText={(item) => setDescricao(item)}
        _focus={{
          bg:'#fff',
          borderWidth:'1.5',
          borderColor:'blue.400'
        }}
        _text={{
          width: '90%',
          textAlignVertial:'top'
        }
         
        }
        />

        <FormControl.Label>Adicionar Localização </FormControl.Label>
        <Input 
        value={localizacao}
        onChangeText={(item) => setLocalizacao(item)}
        _focus={{
          bg:'#fff',
          borderWidth:'1.5',
          borderColor:'blue.400'
        }}
        />
        <FormControl.HelperText >
          Ponto de referencia ou endereço
        </FormControl.HelperText>

        {
          categoria === 'ajuda' ? (
            <>
            <FormControl.Label>Adicionar Ajuda </FormControl.Label>
            <Input 
            value={ajuda}
            onChangeText={(item) => setAjuda(item)}
            />
            <FormControl.HelperText >
            Informe links de vakinha online, PIX ou contas
            </FormControl.HelperText>
            </>
        ) : (
           <>
           </>
          )
        }
        

          <Box w='100%' alignItems='center'  flexDirection='row'>
          <Switch onValueChange={itemValue => setHandleTelefone(itemValue)}
          color='#000'
          /> <Text color='blue.400'> Compartilhar meu número de telefone </Text>
          </Box>

        </FormControl>
        </KeyboardAvoidingView>
        </Box>
        <Modal visible={open} animationType='slide' transparent={true}>
  
          <Box w='80%' h='1/3' top='1/6' left='8' bgColor='rgba(0,0,0,0.5)'
          borderRadius='2xl'
          >
          <Button onPress={()=>setOpen(false)} variant='ghost'
          w='1/4' my='1'
          >
            <Feather
            name='x-circle'
            size={30}
            color='#fff'
            /> 
          </Button>

          <Button mb='6' mt='2'
          h='12' w='2/3' left='12'
          bgColor='blue.500'
          _text={{
            fontSize:'md',
            fontWeight:'bold',
            color:'gray.200'
          }}
          onPress={uploadFileCamera}
          >
            CAMERA
          </Button>

          <Button
          h='12' w='2/3' left='12'
          bgColor='blue.500'
          _text={{
            fontSize:'md',
            fontWeight:'bold',
            color:'gray.200'
          }} onPress={uploadFileGalery}
          >
              GALERIA
          </Button>
        
          </Box>

      </Modal>
        
    </ScrollView> 
  );
}