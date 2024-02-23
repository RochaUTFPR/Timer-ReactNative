import styled from "styled-components/native";



export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_0};
    align-items: center;
`

export const Title = styled.Text `
    font-family: ${({ theme}) => theme.FONT_FAMILY.NUNITOSANS.BOLD};
    font-size: 34px;
    color: ${({ theme}) => theme.COLORS.GREEN_900};
    margin-top: 40px;
`;

export const ViewInput = styled.View `
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 327px;
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 10px;
    border: 2px;
    border-color: ${({theme}) => theme.COLORS.GREEN_300};
    padding: 10px;
`
export const Input = styled.TextInput `
    width: 100%;
    font-family: ${({theme}) => theme.FONT_FAMILY.OPENSANS.SEMIBOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
`

export const InputSenha = styled.TextInput `
    width: 90%;
    font-family: ${({theme}) => theme.FONT_FAMILY.OPENSANS.SEMIBOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
`

export const ContainerInput = styled.View `
    padding: 32px;
    gap: 20px;
`

export const ContainerButton = styled.View `
    gap: 14px;
`
export const ButtonViewSenha = styled.TouchableOpacity `
`

export const Imagem = styled.Image `
    width: 26px;
    height: 19px;
`;