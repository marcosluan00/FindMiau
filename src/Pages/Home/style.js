import styled from 'styled-components/native'

export const Header = styled.View`
    width:395px;
    height:120px;
    background:#fff;
`
export const HeaderTopo = styled.View`
    display:flex;
    flex-direction:row;
    margin:7px 10px;
    justify-content: space-between;
`
export const Filtros = styled.View`
    display:flex;
    flex-direction:row;
    margin:7px 5px;
    justify-content: space-between;
`
export const ButtonFiltro = styled.TouchableOpacity`
    width:auto;
    height:30px;
    border-radius:10px;
    border: 1px solid #64AFFC;
    justify-content:center;
    align-items:center;
    padding:3px
`
export const ButtonTexto = styled.Text`
    font-size:14px;
    color:#64AFFC;
`
