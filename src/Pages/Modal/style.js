import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const dim = Dimensions.get('screen').width - 5;

export const Header = styled.View`
    display:flex;       
    width:395px;
    height:80px;
    align-items:center;
    padding: 0 10px;
    background:#fff;
    flex-direction:row;
    justify-content: space-between;
`
export const Conteudo = styled.View`
    display:flex; 
    flex-direction:column;
    width: ${dim}px;
    background: #fff;
    margin:5px auto;
    align-items:center;
    
    border-radius:10px;
`
export const Titulo = styled.Text`
    font-size:16px;
    font-weight:bold;
    margin:2px;
    
`
export const SubTitulo = styled.Text`
    font-size:13px;
    font-weight:normal;
    margin:5px 2px;
`
export const Localizacao = styled.Text`
    font-size:12px;
    font-weight:400;
    color:#c1c1c1;
    margin:2px
`
export const Descricao = styled.Text`
    font-size:12px;
    font-weight:400;
    color:#64AFFC;
    margin:2px
`
export const Rodape = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin:90px 0 20px 0;
`
export const Icone = styled.TouchableOpacity`
    height: 40px;
    width: auto;
    margin: 5px 10px 5px;
    align-items:center;
`
