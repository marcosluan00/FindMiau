import React, {useContext, useState, useEffect} from 'react';

import { AuthContext } from '../../contexts/auth';
import { Modal } from 'react-native';
import { Box, Avatar, Text, Button, Center, Input} from 'native-base'
import * as ImagePicker from 'expo-image-picker'

import { db, storage } from '../../firebaseConnection';

import { doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export default function Perfil() {
  const { Deslogar, user, setUser, storageUser } = useContext(AuthContext)

  const [nome, setNome] = useState(user?.nome)
  const [telefone, setTelefone] = useState(user?.telefone)
  const [url, setUrl] = useState()
  const [open, setOpen]= useState(false)

  function mtel(v){

    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return setTelefone(v);
}

  useEffect(()=>{
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
  }, [])
  async function updateProfile(){
    if(nome === '' || telefone===''){
      return
    }
    const refUser = doc(db,'users',user.uid)

    const update = await updateDoc(refUser, {
      nome: nome,
      telefone: telefone
    }).then((e)=> {
      console.log(e)
      let data = {
        nome: nome,
        uid: user.uid,
        email: user.email,
        telefone: telefone
      }
      storageUser(data)
    }).catch((er)=>{
      console.log(er)
    })
    setOpen(false)
  }
  async function uploadFile(){
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect:[4, 3]
    })
    console.log('Aqui seleciona a imagem')

    uploadFileFirestore(pickerResult)
  }

  // uploadFileFirestore(response)
  // setUrl(response.uri)
 

  const uploadFileFirestore = async (pickerResult) => {
    try {
      console.log('É para tratar da imagem')

    //   const metadata = {
    //     contentType: 'image/png',
    //   }
      if(!pickerResult.cancelled){
        const uploadUrl = await uploadImageAsync(pickerResult.uri)
        setUrl(uploadUrl)  
      }
    } catch (error) {
      console.log(error);
      alert("Upload failed, sorry :(");
    }
  }
  
      async function uploadImageAsync(uri){
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
        const fireRef = ref(storage, `users/${user.uid}`)
        const result = await uploadBytes(fireRef, blob).then((response)=> {
          console.log('foi')
        }
          
        ).catch((e)=> {
          console.log(e)
        })
        console.log(url)
        return await getDownloadURL(fireRef);
        
  }

 return (
  
      <Center flex='1' bgColor='blue.400'>
        {
          url? (
            <Box alignItems='center' justifyContent='center'>
            <Avatar size='2xl'
            source={{uri: url}}
            />
            <Button position='absolute' variant='ghost' 
            _text={{
              fontSize:'4xl',
              color:'white'
            }}
            onPress={uploadFile}
            > + </Button>
            </Box>
          ) : (
            <Box alignItems='center' justifyContent='center'>
            <Avatar size='2xl'/>
            <Button position='absolute' variant='ghost' 
            _text={{
              fontSize:'4xl',
              color:'white'
            }}
            onPress={uploadFile}
            > + </Button>
            </Box>
          )
        }
        <Box my='5' alignItems='center'>
        <Text fontSize='xl' numberOfLines={1} color='white'>{nome}</Text>
        <Text fontSize='md' numberOfLines={1} color='white'>{telefone}</Text>
        <Text fontSize='xs' fontStyle='italic' color='white'>{user.email}</Text>
        </Box>
        <Button onPress={()=>setOpen(true)}
        my='5'
        bgColor='blue.500'
        _text={{
          fontSize:'md',
          textTransform:'uppercase',
        }}
        w='70%'
        > Atualizar perfil </Button>

        <Button onPress={ () => Deslogar() } 
        position='absolute'
        bottom='10%'
        bgColor='blue.500'
        _text={{
          fontSize:'md',
          textTransform:'uppercase',
          fontWeight:'bold'
        }}
        w='70%'
        > Sair </Button>  


        <Modal visible={open} animationType='slide' transparent={true}>
          <Box h='1/2' 
          w='100%'
          bgColor='white'
          alignItems='center'
          justifyContent='center'
          bottom='0'
          backgroundColor='gray.100'
          position='absolute'
          >
            <Button 
            left='0'
            onPress={() => setOpen(false)}
            > Voltar </Button>

          <Input
          w='80%'
          bgColor='white'
          borderWidth='2'
          borderColor='gray.400'
          placeholder={user?.nome}
          value={nome}
          onChangeText={(text)=> setNome(text)}
          _focus={{
            borderColor: 'gray.600'
          }}
          
          />
          <Input value={telefone} onChangeText={(text)=> mtel(text)} my='1'
          w='80%'
          bgColor='white'
          borderWidth='2'
          borderColor='gray.400'
          _focus={{
            borderColor: 'gray.600'
          }}
          />
          <Button my='5'
          bgColor='blue.500'
          _text={{
          fontSize:'md',
          textTransform:'uppercase',
          fontWeight:'bold'
        }}
        w='80%'
        onPress={updateProfile}
        > Atualizar </Button> 
          </Box>
        </Modal>

      </Center>
      
   
  );
}