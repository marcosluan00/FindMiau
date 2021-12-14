import React from 'react';
import { View, 
  TextInput, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Image,
  TouchableOpacity,
  Text } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
