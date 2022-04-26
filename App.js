import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { View } from 'react-native'

import AuthProvider from './src/contexts/auth';
import Routes from './src/routes'

export default function App() {
    return (
      <NavigationContainer>
        <NativeBaseProvider>
        <AuthProvider>
        <StatusBar backgroundColor='#36393F' barStyle='light-content' translucent={false}/>
        
        <Routes/>
        </AuthProvider>
       
        </NativeBaseProvider>
      </NavigationContainer>
    );
}