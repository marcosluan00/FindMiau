import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback,
    useContext
  } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { GiftedChat, InputToolbar, Bubble } from 'react-native-gifted-chat';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
} from 'firebase/firestore';
import { db } from '../../firebaseConnection'

import { AuthContext } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native'
import { ContainerImage } from '../../styles'

import { Avatar, Box, Text } from 'native-base'


export default function Chat({ route }) {


const navigation = useNavigation()


const { user } =useContext(AuthContext)    
const [messages, setMessages] = useState([]);

const customtInputToolbar = props => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: "white",
        borderTopColor: "#E8E8E8",
        borderTopWidth: 1,
        padding: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        marginTop:15,
      }}
    />
  );
};
const customRenderBubble = props => {
  return (
    <Bubble
      {...props}

      wrapperStyle={{
        right: { borderTopRightRadius: 15,
        width: '50%',
        },
        left: { borderTopLeftRadius: 15,
        width: '50%' },
      }}
      containerToPreviousStyle={{
        right: { borderTopRightRadius: 15,
          width: '50%'
          },
          left: { borderTopLeftRadius: 15,
          width: '50%' },
      }}
      containerToNextStyle={{
        right: { borderTopRightRadius: 15,
          width: '50%'
          },
          left: { borderTopLeftRadius: 15,
          width: '50%' },
      }}
      containerStyle={{
        right: { borderTopRightRadius: 15,
          width: '50%',
          },
          left: { borderTopLeftRadius: 15,
          width: '50%',
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
    <ContainerImage resizeMode="contain" source={{ uri: route.params?.imageUrl }}
    alt="image" height={250}
     />
    <GiftedChat
      renderInputToolbar={props => customtInputToolbar(props)}
      renderBubble={props=> customRenderBubble(props)}
      messages={messages}
      showAvatarForEveryMessage={false}
      
      user={{
        _id: user?.nome
      }}
      renderUsernameOnMessage={true}
      onSend={messages => onSend(messages)}
      
      placeholder='Envie sua mensagem'
      
    />
    </>
  );

}