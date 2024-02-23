import styled from "styled-components/native";

export const Container= styled.View`
background-color: ${({ theme }) => theme.COLORS.GREEN_0};
margin-top: 28px;
width: 100%;
flex-direction: row;
align-items: center;
padding: 18px;
`

export const ContainerButtonCancelar = styled.View `
`

export const Imagem = styled.Image `
    margin: auto;
    width: 30px;
    height: 36px;
`;

export const ButtonCancelar = styled.TouchableOpacity `
 align-items: center;
 justify-content: center;
`

interface align {
    Align: "transparent" | null;
}

export const TextCancelar = styled.Text<align>`
    ${({ Align }) => {
        if (Align === 'transparent') {
          return `color: transparent;
          border: none;`
        }if (Align === null) {
          return `color: black`
      }
    }}
    font-family: ${({theme})=> theme.FONT_FAMILY.OPENSANS.REGULAR};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;    
`