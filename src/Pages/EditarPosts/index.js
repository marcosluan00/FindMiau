import React, { useLayoutEffect, useState, useContext, useEffect } from 'react';
import { View, Platform, KeyboardAvoidingView, Modal } from 'react-native';

import uuid from 'uuid'
import { Box, 
  NativeBaseProvider,
  Button, Text, ZStack, Pressable, Select, FormControl, Switch, Input, IconButton, Icon,
  ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../Components/Header';
import { MaterialCommunityIcons, Feather, Ionicons, Foundation } from '@expo/vector-icons'
import { AuthContext } from '../../contexts/auth'
import Geocoder from 'react-native-geocoding';
import MapView, { Marker, Region, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location'
import { addDoc, collection, updateDoc, doc, query, where, onSnapshot } from 'firebase/firestore'
import { db, storage } from '../../firebaseConnection';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

import { ContainerImage } from '../../styles'

import * as ImagePicker from 'expo-image-picker'

export default function EditarPosts (props) {
  
  const [ categoria, setCategoria] = useState('');
  const [ titulo, setTitulo] = useState('')
  const [ url, setUrl]= useState(null)
  const [ descricao, setDescricao] = useState('')
  const [ localizacao, setLocalizacao] = useState('')
  const [ ajuda, setAjuda ] = useState('')
  const [ open, setOpen]= useState(false)
  const [ location, setLocation] = useState(null)
  //Caracteristicas
  const [ sexo, setSexo] = useState('');
  const [ porte, setPorte] = useState('');
  const [ vacinado, setVacinado] = useState('');
  const [ animal, setAnimal] = useState('');
  const [ castrado, setCastramento] = useState('')
  const [ marker, setMarker] = useState(null)
  const [ endCood, setEndCood] = useState(null)
  const [ showMap, setShowMap] =useState(false)

  const { user } = useContext(AuthContext)
  const [ region, setRegion ] = useState(null);


 const navigation = useNavigation()
 
 Geocoder.init("AIzaSyCGsdaIBZonbNVzXsz2dTfYXnpbabu627s");

 const initialRegion={
  latitude: 2.826426,
  longitude: -60.678423,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05
 }
 function handleCoord(coord) {
  setMarker(coord)

  setEndCood({
    lat: coord.latitude,
    lng: coord.longitude,
  })

  handleName(coord.latitude, coord.longitude)
}
function marking(coord){
  console.log(coord)
  setMarker({
    latitude: coord.lat,
    longitude: coord.lng
  })
}
function handleName(lat, long){
  Geocoder.from({
    latitude: lat,
    longitude: long
  })
		.then(json => {

      var numero = json.results[0].address_components[0].long_name;
      var rua = json.results[0].address_components[1].long_name;
      var bairro = json.results[0].address_components[2].long_name;

      var end = rua +", "+numero+", "+ bairro;

      setLocalizacao(end)
		})
		.catch(error => console.warn(error));

}

function buscaPorEndereco(localizacao){
    Geocoder.from(localizacao)
		.then(json => {
			var location = json.results[0].geometry.location;
      console.log(localizacao)
			console.log(location);
      setEndCood(location)
		})
		.catch(error => console.warn(error));
    setLocalizacao(localizacao)
  }

 const getCurrentPosition = async()=> {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted"){
    alert("Permissão negada !!")
  }
  let {
    coords: { latitude, longitude },
  } = await Location.getCurrentPositionAsync();

  setRegion({ latitude, longitude, latitudeDelta: 0.05, longitudeDelta: 0.05 });
}


    useEffect(() => {
        const q = query(collection(db, 'Postagens'), where('idDoc', '==', props.route.params?.doc))
        getCurrentPosition()
        const subscriber = onSnapshot((q), snap => {
            const postList =[]

            snap.forEach(doc => {
                postList.push({
                    ...doc.data(),
                })
            })
            const data = {
              ...postList
            }
            console.log(data[0].caracteristicas)
            setEndCood(data[0].localizacaoCod)
            setCategoria(data[0].categoria)
            marking(data[0].localizacaoCod)
            setTitulo(data[0].titulo)
            setUrl(data[0].imageUrl)
            setDescricao(data[0].descricao)
            setLocalizacao(data[0].localizao)
            setAjuda(data[0].infoAjuda)
            setAnimal(data[0].caracteristicas.animal)
            setCastramento(data[0].caracteristicas.castramento)
            setPorte(data[0].caracteristicas.porte)
            setSexo(data[0].caracteristicas.sexo)
            setVacinado(data[0].caracteristicas.vacinado)
            
            
        })
        
    }, [])
 
 function handleBack(){
   navigation.navigate('Home')
   
 }
 async function uploadFileCamera() {
   let pickerResult = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
   })
   setUrl(pickerResult.uri)
   uploadFileFirestore(pickerResult)
 }
 
 async function uploadFileGalery() {
   
  let pickerResult = await ImagePicker.launchImageLibraryAsync( {
   allowsEditing: true,
   aspect:[4, 3]
  })
  console.log('Imagem selecionada')
  setUrl(pickerResult.uri)
  uploadFileFirestore(pickerResult)
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

        }).catch((e)=> {
          console.log(e)
        })
        console.log(url)
        return await getDownloadURL(fireRef);
}

 async function handleEdit() {
    if(categoria === '' || titulo === '' || descricao === '' ){
      alert('Algum campo não preenchido')
      return
    }
      
        await updateDoc(doc(db, 'Postagens',props.route.params?.doc), {
          data: new Date(),
          autor:user.nome,
          telefone: user.telefone,
          categoria: categoria,
          userId: user.uid,
          titulo: titulo,
          descricao: descricao,
          localizao: localizacao,
          localizacaoCod: endCood,
          imageUrl: url,
          infoAjuda: ajuda,
          caracteristicas: {
            animal: animal,
            porte: porte,
            sexo: sexo,
            vacinado: vacinado,
            castramento: castrado,
          }
        }).then((documento)=> {
          alert('Sucesso')
          handleBack()
        })
 }
 useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: (props) => (
    <Button mr='4' onPress={handleEdit}
    bgColor='blue.500'
    w='1/2'
    _text={{
      fontWeight:'bold'
    }}>   
      Editar
    </Button>)
  })
})

  return(

    <ScrollView bgColor="rgba(100, 175, 252, 0.7)" flex={1} alignContent='center' >
    
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
          <IconButton h='1/2' w='1/2' position='absolute' right='10' onPress={uploadFileCamera}
            _icon={{
          as: MaterialCommunityIcons,
          name: "camera-plus",
          color: 'blue.400',
          size:'4xl'
          }}>
            </IconButton>
            <IconButton h='1/2' w='1/2' position='absolute' left='8' onPress={uploadFileGalery}
            _icon={{
          as: Foundation,
          name: "photo",
          color: 'blue.400',
          size:'4xl'
          }}>
            </IconButton>
           

            </Pressable>  
              
              </>

            ) : (
            <Pressable zIndex={9}
            height='90%' bgColor='gray.100' width='92%' borderRadius='md' alignItems='center' justifyContent='center'
            >
            <IconButton h='1/2' w='1/2' right='4' position='absolute' onPress={uploadFileCamera}
            _icon={{
          as: MaterialCommunityIcons,
          name: "camera-plus",
          color: 'blue.400',
          size:'4xl'
          }}>
            </IconButton>
            <IconButton h='1/2' w='1/2' left='4'position='absolute' onPress={uploadFileGalery}
            _icon={{
          as: Foundation,
          name: "photo",
          color: 'blue.400',
          size:'4xl'
          }}>
            </IconButton>
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
          onChangeText={(item) => buscaPorEndereco(item)}
          
          _focus={{
            bg:'#fff',
            borderWidth:'1.5',
            borderColor:'blue.400'
          }}
          InputRightElement={
            <Button size="sm" variant="ghost" w="1/6" h="full" onPress={()=> setShowMap(true)}>
            <Icon as={<Ionicons name="locate-sharp"/>} size='xl' color='blue.500'/> 
            </Button>} 
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
          <FormControl.Label _text={{
            fontSize:'md',
            fontWeight:'bold'
          }}>Caracteristicas Adicionais</FormControl.Label>
          <Select accessibilityLabel="Animal" placeholder="Animal"  mt="1" selectedValue={animal} w='100%'
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
          onValueChange={itemValue => setAnimal(itemValue)}>
            <Select.Item label="Gato" value="Gato" />
            <Select.Item label="Cachorro" value="Cachorro" />  
          </Select>
  
          <Select accessibilityLabel="Porte" placeholder="Porte"  mt="1" selectedValue={porte} w='100%'
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
          onValueChange={itemValue => setPorte(itemValue)}>
            <Select.Item label="Grande" value="Grande" />
            <Select.Item label="Medio" value="Medio" />
            <Select.Item label='Pequeno' value='Pequeno'/>  
          </Select>
  
          <Select accessibilityLabel="Sexo" placeholder="Sexo"  mt="1" selectedValue={sexo} w='100%'
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
          onValueChange={itemValue => setSexo(itemValue)}>
            <Select.Item label="Macho" value="Macho" />
            <Select.Item label="Femea" value="Femea" />  
            <Select.Item label="Ambos" value="Ambos" />
          </Select>
  
          {
            categoria === 'adocao' ? (
              <>
              <Select accessibilityLabel="Vacina" placeholder="Vacina"  mt="1" selectedValue={vacinado} w='100%'
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
          onValueChange={itemValue => setVacinado(itemValue)}>
            <Select.Item label="Vacinado" value="Vacinado" />
            <Select.Item label="Não Vacinado" value="Não Vacinado" />
          </Select>
  
          <Select accessibilityLabel="Castramento" placeholder="Castramento"  mt="1" selectedValue={castrado} w='100%'
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
          onValueChange={itemValue => setCastramento(itemValue)}>
            <Select.Item label="Castrado" value="Castrado" />
            <Select.Item label="Não Castrado" value="Nao Castrado" />
            <Select.Item label='Vale Castramento' value='Vale Castramento'/>
          </Select>
              </>
            ) :
            <> </>
          }
  
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
            <Modal visible={showMap} animationType='slide' transparent={true}>
            <Box flex={1}>
              <Button onPress={()=>setShowMap(false)}
              position='absolute'
              zIndex={9}
              borderRadius='full'
              bgColor='blue.400'
              alignItems='center'
              justifyContent='center'
              p='1'
              m='0'
              top='3'
              left='4'
              h='12'
              w='12'>
                <Ionicons name="arrow-back" size={32} color="white" />
              </Button>
  
  
              <MapView style={{ flex: 1}}
              provider={PROVIDER_GOOGLE}
              showsUserLocation
              loadingEnabled
              mapType='standard'
              region={region}
              initialRegion={initialRegion}
              onPress={(e)=> handleCoord(e.nativeEvent.coordinate)}
              >
                  {
                    marker ? (
                    <Marker
                    coordinate={marker}
                    key={Math.random().toString()}
                    />
                    ): <></>
                  }
              </MapView>
              <Button onPress={()=>setShowMap(false)}
              position='absolute'
              zIndex={9}
              borderRadius='full'
              bgColor='blue.400'
              alignItems='center'
              justifyContent='center'
              p='1'
              m='0'
              bottom='3'
              right='4'
              h='16'
              w='16'>
                <Ionicons name="checkmark" size={40} color="white" />
              </Button>
            </Box>
          </Modal>
          
      </ScrollView>                 

  ) 
}
