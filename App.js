import React from 'react';
import Login from './src/Pages/Login';
import Cadastro from './src/Pages/Cadastro';
import Esqueci from './src/Pages/Esqueci';
import Home from './src/Pages/Home';
import Modal from './src/Pages/Modal';

export default function App() {
    return (
    <Home /> 
    
     
    );
}
//     { /* <Cadastro/> */ } 
    //  { /* <Esqueci/> */ } 
    //  {/* <Login/> */}
    //  {/* <Modal/> */}


// <KeyboardAvoidingView style={styles.container}>
// //       <View >
// //         <Image source={require('./assets/logo.png')}
//         style={styles.viewImagem}
//         />
//       </View>

//       <View>
//       <TextInput
//       style={styles.inputText}
//       placeholder="Email"
//       autoCorrect={false}
//       onChangeText={() =>{}}
//       />
//       <TextInput
//       style={styles.inputText}
//       placeholder="Senha"
//       autoCorrect={false}
//       onChangeText={() =>{}}
//       />
//       <TouchableOpacity style={styles.buttons}>
//         <Text style={styles.textButons}> Acessar </Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.buttons}>
//         <Text style={styles.textButons}> Cadastrar </Text>
//       </TouchableOpacity>

//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   viewImagem: {
//     width: 150,
//     height: 150,
//   },

//   inputText:{
//     margin:10,
//     width: 320,
//     fontSize:16,
//     fontWeight:'bold',
//     padding:10,
//     color:'#000',
//     backgroundColor: 'rgba(0,0,0,0.07)',
//     borderRadius:10
//   },
//   textButons:{
//     fontSize:20,
//     textTransform:'uppercase'
//   },
//   buttons: {
//     width:150,
//     height:40,
//     backgroundColor:'#c1c1c1',
//     margin: 10,
//     borderRadius:5,
//     alignItems: 'center',
//     alignSelf:'center',
//     justifyContent: 'center',

//   }
// });