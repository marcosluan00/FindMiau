import styled from 'styled-components/native';
import theme from './theme.json'


export const Container = styled.View`
    flex:1;
    background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'}
    flex-direction: ${(props) => props.row ? 'row' : 'column'} ;
    justify-content : ${(props) => props.justify || 'center'} ;
    padding: ${(props) => props.padding || 0}px ;
    width:100%;
    height:100%;
    align-items : ${(props) => props.align || 'center'} ;
    max-width: ${(props) => props.width || '100%'} ;
    max-height: ${(props) => props.height ? props.height + 'px' : 'auto'};
    position: ${(props) => props.position || 'relative'};
    top: ${(props) => props.top ? props.top + 'px' : 0};
    z-index: ${(props) => props.zIndex || 1};
    
`
export const Button = styled.TouchableOpacity`
    width:100%;
    padding: ${(props) => props.compact ? 5 : 15}px;
    opacity: ${props => props.disabled ? 0.5 : 1};
    background: ${(props) => props.type ? theme.colors[props.type] : theme.colors['blue-dark']};
    border-radius: ${props => props.radius || 0 }px;
    max-width: ${(props) => props.width || '100%'} ;
    height: ${(props) => props.height ? props.height + 'px' : 'auto'};
`
export const ButtonText = styled.Text`
    text-align: center;
    color: ${(props) => props.color ? theme.colors[props.color] : theme.colors['light']};
    font-weight: ${props => props.weight || 400};
    text-transform:${props=> props.transform || 'capitalize'};
    font-size: ${props => props.size || 12}px;   
`
export const Text = styled.Text`
    text-align: left;
    color: ${(props) => props.color ? theme.colors[props.color] : theme.colors['light']};
    font-weight: ${props => props.weight || 400};
    text-transform:${props=> props.transform || 'capitalize'};
    font-size: ${props => props.size || 12}px;
    margin: 8px 0px;   
`
export const InputText = styled.TextInput`
    background-color:rgba(255,255,255,0.6);
    padding:10px;
    width:${props=> props.width || '100%'};
    border-radius:10px;
`
export const InputLine = styled.TextInput`
    width:${props=> props.width || '100%'};
    height:45px;
    borderBottomColor: #FFFFFF;
    borderBottomWidth: 1px;
    margin-bottom:5px;
    color: ${(props) => props.color ? theme.colors[props.color] : theme.colors['light']};
    font-size: ${props => props.size || 12}px;  
    padding: 5px;
    z-index: ${(props) => props.zIndex || 1};
    
`