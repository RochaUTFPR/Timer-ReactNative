import styled from "styled-components/native";
import theme from "../../theme";


export const ContainerButton = styled.TouchableOpacity `
 width: 100%;
 margin-top: 34px;
`

export const TextBelow = styled.Text `
    font-family: ${({theme}) => theme.FONT_FAMILY.OPENSANS.REGULAR};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
`

export const TextBelowUnderline = styled.View `
  margin-top: 4px;
  width: 100vw;
  height: 1.5px; /* Espessura da linha */
  background-color: black; /* Cor da linha */
`