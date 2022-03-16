import React from 'react';
import Login from './src/Pages/Login';
import Cadastro from './src/Pages/Cadastro';
import Esqueci from './src/Pages/Esqueci';
import Home from './src/Pages/Home';
import Modal from './src/Pages/Modal';
import LoginBase from './src/Pages/LoginBase';
import CadastroBase from './src/Pages/CadastroBase';
import EsqueciBase from './src/Pages/EsqueciBase';
import Comentarios from './src/Pages/Comentarios';
import HomeBase from './src/Pages/HomeBase'
import { NativeBaseProvider, extendTheme  } from 'native-base';


export default function App() {
    const theme = extendTheme({
        colors: {
          // Add new color
          primary: {
            50: '#E3F2F9',
            100: '#C5E4F3',
            200: '#A2D4EC',
            300: '#7AC1E4',
            400: '#47A9DA',
            500: '#64AFFC',
            600: '#007AB8',
            700: '#006BA1',
            800: '#005885',
            900: '#003F5E',
          }
        //   "primary": "#64AFFC",
        // "light":"#FFFFFF",
        // "blue-dark":"#3D8BFF",
        // "grey-light":"#FFFFFFCC",
        // "muted":"C4C4C4",
        // "black":"#000000",
        // "blue-light50":"#DBEDFF",
        // "blue-light":"#64AFFC61",
        // "transparent": "transparent",
        // "primary50":"#64AFFC61"
        }
    })

    return (
    <NativeBaseProvider theme={theme}>
    <LoginBase/>
    </NativeBaseProvider>
    );
}
//     { /* <Cadastro/> */ } 
    //  { /* <Esqueci/> */ } 
    //  {/* <Login/> */}
    //  {/* <Modal/> */}