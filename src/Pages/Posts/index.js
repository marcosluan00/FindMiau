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
   import { MaterialCommunityIcons   } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'
import {ActivityIndicator} from 'react-native'

import { db } from '../../firebaseConnection'
import { collection, orderBy, query, onSnapshot, where, getDocs } from 'firebase/firestore'

import Card from '../../Components/Card'


export default function Posts() {
  const {user, Deslogar} = useContext(AuthContext)

    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)


    const [lista, setLista] = useState([])

    useEffect(() => {

        const listRef = query(collection(db, 'Postagens'))

        const q = query(listRef, where('userId', '==', user.uid))

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
        })
        return () => subscriber()
    }, [])

  return (
    <Box bgColor="rgba(100, 175, 252, 0.7)" flex={1}>
     
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
                    keyExtractor={() => Math.random()}
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