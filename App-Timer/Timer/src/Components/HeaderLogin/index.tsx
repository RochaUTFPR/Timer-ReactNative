import abacate from '../../img/abacate.png';
import { ButtonCancelar, Container, Imagem,TextCancelar,ContainerButtonCancelar } from './styles';

interface Type {
    Type: "Cancelar" | null
    onPress: () => void | null
}

export function HeaderLogin( props:Type ) {
    return (
        <Container>
            <ContainerButtonCancelar>
                { props.Type === "Cancelar" && 
                <ButtonCancelar
                onPress={props.onPress}
                >
                    <TextCancelar Align={null}>Cancelar</TextCancelar>
                </ButtonCancelar>}
            </ContainerButtonCancelar>
            <Imagem source={abacate}/>
                { props.Type === "Cancelar" && 
                <TextCancelar Align={"transparent"}>Cancelar</TextCancelar>}
        </Container>
    )
}