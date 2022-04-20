import React, {useContext} from 'react';
import { View, Text } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import { Button, ButtonText, Container } from './styles';


export default function Perfil() {
  const { Deslogar } = useContext(AuthContext)
 return (
   <Container>
       <ButtonText> Perfil  </ButtonText>
       <Button onPress={ () => Deslogar() }>
         <ButtonText>
           Sair
         </ButtonText>
       </Button>
   </Container>
  );
}