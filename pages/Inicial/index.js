import React from 'react';
import { View, 
  TextInput, 
  KeyboardAvoidingView, 
  Image,
  TouchableOpacity,
  Text } from "react-native";
import { styles } from './styles'

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image source={require('./assets/logo.png')}/>
      </View>

      <View>
      <TextInput
      placeholder="Email"
      autoCorrect={false}
      onChangeText={() =>{}}
      />
      <TextInput
      placeholder="Senha"
      autoCorrect={false}
      onChangeText={() =>{}}
      />
      <TouchableOpacity>
        <Text> Acessar </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text> Cadastrar-se a si mesmo </Text>
      </TouchableOpacity>
      
      </View>
    </KeyboardAvoidingView>
  );
}
