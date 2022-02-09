import React from 'react';
import { NativeBaseProvider,
    Text,
    Center,
    Box, 
    Input, 
    Icon, 
    Button,
    IconButton,
    StatusBar,
    HStack,
} from 'native-base'
import { ContainerImage } from '../../styles'
import theme from '../../styles/theme.json'

export function Header(props) {
  return (
  <>
  
    <StatusBar barStyle='light-content'/>
                <Box safeAreaTop />
                <HStack bg={theme.colors['light']} px='2' py='2' justifyContent="space-between" 
                alignItems="center" w="100%" >
                
                <IconButton icon={<Icon as={props.pacoteIconsL} name={props.nomeIconeL}
                />} _icon={{ color:"blue.400",size: "md"}}/>
                    <Text bold color={theme.colors['primary']} fontSize="2xl"> {props.texto} </Text>

                    <IconButton icon={<Icon as={props.pacoteIconsR} name={props.nomeIconeR}/>}
                _icon={{color:"blue.400",size: "md"}}/>
                </HStack>
    
  </>
  );
}
export function HeaderImg(props){
    return (
        <>
          <StatusBar barStyle='light-content'/>
                      <Box safeAreaTop />
                      <HStack bg={theme.colors['light']} px='2' py='2' justifyContent="space-between" 
                      alignItems="center" w="100%" >
                      
                      <IconButton icon={<Icon as={props.pacoteIcons} name={props.nomeIcone}
                      />} _icon={{ color:"blue.400",size: "md"}}/>

                          <ContainerImage
                            height={40}
                            width='250px'
                            // source={require(props.endereco)}
                            />
      
                          <IconButton icon={<Icon as={props.pacoteIcons} name={props.nomeIcone}/>}
                      _icon={{color:"blue.400",size: "md"}}/>
                      </HStack>
        </>
        );
}
