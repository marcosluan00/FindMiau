import styled from 'styled-components/native';
import theme from './theme.json'


export const Container = styled.View`
    flex:1;
    background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
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
<<<<<<< HEAD
    
=======
    margin-left: ${(props) => props.marginLeft ? props.marginLeft + 'px' : 0};
    margin-top:${(props) => props.marginTop ? props.marginTop + 'px' : 0};
    margin-bottom:${(props) => props.marginBottom ? props.marginBottom + 'px' : 0};
    margin-right:${(props) => props.marginRight ? props.marginRight + 'px' : 0};
>>>>>>> 14cf41f1b16f19c2376d16da930c2a09bc1ce89a
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
export const InputInline = styled.TextInput`
    width: 100%;
    height: ${(props) => props.height ? props.height + 'px' : 'auto'};
    margin-bottom:15px;
    color: ${(props) => props.color ? theme.colors[props.color] : theme.colors['light']};
    font-size: ${props => props.size || 12}px;
    padding: ${(props) => props.padding ? props.padding + 'px' : '5px'};
    borderBottomColor:#fff;
    borderBottomWidth: 1px;
`
export const InputCamp = styled.TextInput`
    width: 100%;
    height: ${(props) => props.height ? props.height + 'px' : 'auto'};
    background-color:rgba(255,255,255,0.6);
    border-radius:10px;
    margin: 5px 0 25px 0;
    color:#fff;
`

export const ContainerClicker = styled.ScrollView`
    width:100%;
    top: ${(props) => props.top ? props.top + 'px' : 0};
    
`
export const ContainerImage = styled.Image`
    width:100%;
    height: ${(props) => props.height ? props.height + 'px' : 'auto'};
    max-width: ${(props) => props.width || '100%'};
    resizeMode:stretch;
    top: ${(props) => props.top ? props.top + 'px' : 0};
    left: ${(props) => props.left ? props.left + 'px' : 0};
`