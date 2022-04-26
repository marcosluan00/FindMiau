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
  
                <Box safeAreaTop />
                <HStack bg={theme.colors['light']} justifyContent='space-between' p='1'
                h='60'
                alignItems="center" w="100%" >

                  <IconButton icon={
                  <Icon as={props.pacoteIconsL} name={props.nomeIconeL}
                    size='30'
                    color="#64AFFC"
                    />}
                      onPress={props.ClickL}
                      />

                 { props.endereco ? (
                      <ContainerImage height={props.h ? props.h : 35} width={props.w ? props.w : '150px'} source={props.endereco} />
                    ) : (
                      <Text bold color={theme.colors['primary']} fontSize="2xl"> {props.texto} </Text>
                    )
                  }
                  <IconButton icon={
                  <Icon as={props.pacoteIconsR} name={props.nomeIconeR} size='30' color="#64AFFC"/>}
                      onPress={props.ClickR}
                      />
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
                      
                      <IconButton icon={<Icon as={props.pacoteIconsL} name={props.nomeIconeL}
                      />} _icon={{ color:"blue.400",size: "md"}} 
                      onClick={props.ClickR}
                      />

                          <ContainerImage
                            height={35}
                            width='120px'
                            source={props.endereco}
                            
                            />
      
                          <IconButton icon={<Icon as={props.pacoteIconsR} name={props.nomeIconeR}/>}
                      _icon={{color:"blue.400",size: "md"}} 
                      onClick={props.ClickR}
                      />
                      </HStack>
        </>
        );
}
