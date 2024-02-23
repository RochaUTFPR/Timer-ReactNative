import styled from "styled-components/native";

interface type {
    type: "Entrar" | "Cadastrar";
}

export const ButtonEntrar = styled.TouchableOpacity<type>`
    
    border: 2px;
    width: 327px;
    height: 56px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    ${({ type, theme }) => {
    if (type === 'Entrar') {
      return `background-color: ${theme.COLORS.GREEN_300};
      border: none;`
    }if (type === 'Cadastrar') {
        return `background-color: transparent;
        border-color: ${theme.COLORS.GREEN_300};`
      }
    }}
`

export const TextButton = styled.Text<type>`
    font-family: ${({theme}) => theme.FONT_FAMILY.NUNITOSANS.BOLD};
    font-size: ${({theme})=> theme.FONT_SIZE.LGM}px;
    ${({ type, theme }) => {
    if (type === 'Entrar') {
      return `color: ${theme.COLORS.WHITE_100};`
    }if (type === 'Cadastrar') {
        return `background-color: transparent;
        color: ${theme.COLORS.GREEN_300};`
      }
    }}
`