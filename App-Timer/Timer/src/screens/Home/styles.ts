import styled from "styled-components/native";

export const ContainerSafe = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_0};
`
export const ContainerHome = styled.View`
  flex: 1;
  display: block;
  padding: 34px;
`

export const ContainerCount = styled.View `
 background-color: ${({theme}) => theme.COLORS.GREEN_250};
 width: 105px;
 height: 35px;
 border-radius: 50px;
 flex-direction: row;
 justify-content: space-between;
`

export const ImageCount = styled.Image `
  width: 32px;
  height: 38.4px;
  bottom: 5px;
  margin-left: 9px;
`

export const NumberCount = styled.Text `
  font-family: ${({theme})=>theme.FONT_FAMILY.OPENSANS.REGULAR};
  font-size: ${({theme})=>theme.FONT_SIZE.LG}px;
  color: ${({theme})=> theme.COLORS.BROWN_500};
  margin-top: 5px;
  margin-right: 30px;
`

export const ImageGrandpa = styled.Image `
  width: 210px;
  height: 240px;
`

export const Containertimer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ContainerNumberTimer = styled.View`
  flex-direction: row;
`

export const NumberTimer = styled.Text`
  font-family: ${({theme})=>theme.FONT_FAMILY.OPENSANS.LIGHT};
  font-size: ${({theme})=>theme.FONT_SIZE.EXG}px;
  color: ${({theme})=> theme.COLORS.GREEN_700};
  margin-top: 48px;
`

export const ContainerSlider = styled.View`
align-items: center;
  width: 100%;
  height: 66px;
  margin-top: 30px;
`

export const ContainerStart = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 66px;
  border-radius: 50px;
  background-color: ${({theme})=> theme.COLORS.GREEN_200};
`
export const Button = styled.TouchableOpacity`
`


export const ImageStart_Stop = styled.Image`
  top: 3px;
`
