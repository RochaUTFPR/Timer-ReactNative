import { ContainerButton, TextBelow ,TextBelowUnderline } from "./styles";

interface Text {
    Text: string
    onPress: () => void
}

export function TextBelowButton( props: Text){
    return(
        <>
        <ContainerButton
        onPress={props.onPress}
        >
            <TextBelow>{props.Text}</TextBelow>
            <TextBelowUnderline/>
        </ContainerButton>
        </>
    )
}