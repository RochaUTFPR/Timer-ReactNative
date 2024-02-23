import { ButtonEntrar,TextButton } from "./styles"

interface Type {
    TypeButton: "Entrar" | "Cadastrar"
    Text: string
    onPress : () => void
}

export function Button( props:Type){
    return (
        <ButtonEntrar type={props.TypeButton}
        onPress={props.onPress}
        >
            <TextButton type={props.TypeButton}>
                {props.Text}
            </TextButton>
        </ButtonEntrar>
    )
}