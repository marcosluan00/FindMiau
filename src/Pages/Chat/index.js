import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback,
    useContext
  } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { GiftedChat, InputToolbar, Bubble, Send } from 'react-native-gifted-chat';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
} from 'firebase/firestore';
import { db } from '../../firebaseConnection'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native'
import { ContainerImage } from '../../styles'

import { Avatar, Box, Icon, Pressable, Text } from 'native-base'


export default function Chat({ route }) {


const navigation = useNavigation()


const { user } =useContext(AuthContext)    
const [messages, setMessages] = useState([]);

const customSend = props=> {
  return(
    <Send
      {...props}
       containerStyle={{
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       marginRight: 3,
       backgroundColor:'#3D8BFF',
       paddingHorizontal: 10,
       borderRadius:5
      }}>
      <Box flexDir='row' >
       <Text color='gray.50' fontSize='sm' fontWeight='bold' mr='1'> Enviar </Text>
      </Box>
      </Send>
  )
}

const customtInputToolbar = props => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: "white",
        borderTopColor: "#E8E8E8",
        borderTopWidth: 1,
        paddingVertical:3,
        paddingHorizontal: 5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      }}
      
    />
  );
};
const customView = props => {
return(
  <Box w='98%' pt='2' pl='3'>
    <Text fontSize='md' textAlign='justify'
    fontWeight='bold' numberOfLines={1}
    >{props.currentMessage.user.name}</Text>

  </Box>
)

}


const customRenderBubble = props => {
  return (
    <Bubble
  
      {...props}

      wrapperStyle={{
        right: { 
        border: 5,
        width: '96%',
        marginVertical:2
        },
        left: { 
        width: '96%',
        marginVertical:2
      },
      }}
      textStyle={{
        right:{
          textAlign:'justify',
          padding: 5
        },
        left:{
          textAlign:'justify',
          padding: 5
        }
      }}
      containerToPreviousStyle={{
        right: { borderTopRightRadius: 5,
          width: '95%'
          },
          left: { borderTopLeftRadius: 5,
          width: '95%' },
      }}
      containerToNextStyle={{
        right: { borderTopRightRadius: 5,
          width: '95%'
          },
          left: { borderTopLeftRadius: 5,
          width: '95%' },
      }}
      containerStyle={{
        right: { borderTopRightRadius: 5,
          width: '95%',
          },
          left: { borderTopLeftRadius: 5,
          width: '95%',
          },
      }}
    />
  );
};
useEffect(() => {
    const collectionRef = collection(db, 'comentarios_'+ route.params?.doc);
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      );
    });

    return () => unsubscribe();
  }, []);
  function LogoTitle() {
    return (
      <Box mr='4'>
        <Avatar
        source={{uri: route.params?.img}}
      />
      </Box>
    );
  }
  function TitleHeader() {
    return(
        <Text fontSize='xl' fontWeight='bold' 
        fontStyle='italic'
        > Comentarios </Text>
        
    )
  }
useLayoutEffect(() => {
  navigation.setOptions({
    tittle: <TitleHeader/> ,
    headerRight: (props) => <LogoTitle {...props}/>
  })
})


  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];    
    addDoc(collection(db, 'comentarios_'+route.params?.doc ), {
      _id,
      createdAt,
      text,
      user
    });
  }, []);
  return (
    <>
    <GiftedChat
    listViewProps={{
      style:{
        backgroundColor: '#64AFFC61'
      }
    }}
      renderInputToolbar={props => customtInputToolbar(props)}
      renderBubble={props=> customRenderBubble(props)}
      onSend={messages => onSend(messages)}
      renderSend={props=> customSend(props)}
      renderCustomView={props => customView(props)}
      renderAvatar={null}   
      messages={messages}

      alwaysShowSend 
      user={{
        _id: user?.uid,
        name:user?.nome,
      }}
      renderUsernameOnMessage={false}
      
      
      placeholder='Envie sua mensagem'
      
    />
    </>
  );

}