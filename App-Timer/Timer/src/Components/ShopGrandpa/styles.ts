import styled from "styled-components/native";
import { Animated } from 'react-native';

export const Container = styled.View`
    flex: 1;
    z-index: 1;
    position: absolute;
`

export const ModalContainer = styled(Animated.View)`
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: ${({theme})=> theme.COLORS.PINK_100};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    width: 100%;
`
export const ModalAlignment = styled.View`    
    align-items: center;
    padding: 20px;
`

export const ButtonChooseGrandpa = styled.TouchableOpacity`
`

export const ButtonOffStore = styled.View`
    width: 118px;
    height: 8px;
    background-color: ${({theme})=> theme.COLORS.PINK_400};
    border-radius: 50px;
`

export const HandleShopGrandpa = styled.View`
    width: 100px;
    height: 140px;

`
export const ContainerShopGrandpa = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 24px;
    margin-top: 26px;
`

interface TypeGrandpa {
    TypeGrandpa: String;
}

export const ContainerImageGrandpa = styled.View<TypeGrandpa>`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    ${({ TypeGrandpa, theme }) => {
        if (TypeGrandpa === 'Green') {
          return `background-color: ${theme.COLORS.GREEN_250};`
        }if (TypeGrandpa === 'Pink') {
          return `background-color: ${theme.COLORS.PINK_300};`
      }if (TypeGrandpa === 'Purple') {
        return `background-color: ${theme.COLORS.PURPLE_200};`
    }
    }}
`

export const ImageGrandaShop = styled.Image`
    width: 90%;
    height: 90%;
`
export const ContainerText = styled.View`
    background-color: white;
    width: 100%;
    height: 36px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px ;
`

export const TextGrandpaButton = styled.Text`
    margin-top: 6px;
    text-align: center;
    font-family: ${({theme})=> theme.FONT_FAMILY.NUNITOSANS.REGULAR};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;    
`



