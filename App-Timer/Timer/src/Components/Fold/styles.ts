import styled from "styled-components/native";
import { Animated } from 'react-native';

export const Container = styled.View`
    flex: 1;
    z-index: 1;
    position: absolute;
`

export const Content = styled.View`
    background-color: green;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    color: white;
`

export const ModalContainer = styled(Animated.View)`
    background-color: ${({theme})=> theme.COLORS.GREEN_350};
    height: 100%;
`
export const ModalAlignment = styled.View`    
    background-color: ${({theme})=> theme.COLORS.GREEN_350};
    align-items: center;
    padding: 20px;
`
export const CloseButton = styled.TouchableOpacity`
    align-self: flex-end;
    padding: 24px;
`

export const TextTitulo = styled.Text`
    width: 100%;
    font-family: ${({theme})=> theme.FONT_FAMILY.NUNITOSANS.BOLD};
    font-size: ${({theme})=> theme.FONT_SIZE.XEL}px;
    color: ${({theme})=> theme.COLORS.GREEN_800};
    margin-bottom: 48px;
`

export const TextUpon = styled.Text`
    width: 100%;
    font-family: ${({theme})=> theme.FONT_FAMILY.OPENSANS.REGULAR};
    font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
    color: ${({theme})=> theme.COLORS.GREEN_800};
`
export const IMG_GRANDPA_AVOCADO = styled.Image`
    width: 100%;
    position: absolute;
    bottom: 0px;
    height: 250px;
`

export const IMG_CLOSE = styled.Image`
`

export const ButtonFold = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 142px;
    height: 47px;
    background-color: ${({theme})=> theme.COLORS.RED_300};
    border-radius: 50px;
`

export const TextButtonFold = styled.Text`
    font-family: ${({theme})=> theme.FONT_FAMILY.NUNITOSANS.BOLD};
    font-size: ${({theme})=> theme.FONT_SIZE.LGM}px;
    color: ${({theme})=> theme.COLORS.WHITE};
`

export const AlignmentButtonFold = styled.View`
    margin-top: 48px;
    width: 100%;
    align-items: center;
`