import { Button } from "../../Components/Button";
import { HeaderLogin } from "../../Components/HeaderLogin";
import { TextBelowButton } from "../../Components/TextBelowButton";

import { useNavigation } from "@react-navigation/native";

import visibility from '../../img/visibility.png'
import visibility_off from '../../img/visibility_off.png'

import { 
    ContainerSafe,
    Container,
    Title,
    ContainerInput,
    ContainerButton, 
    Input,
    ViewInput,
    InputSenha,
    ButtonViewSenha,
    Imagem
} from "./styles"
import { useState } from "react";

export function Login() {
    const [ShowPassword, SetShowPassword] = useState(visibility_off);

    const navigation = useNavigation()

    function handleLoginButton() {
      navigation.navigate('Home')
    }

    function handleRegisterButton(){
        navigation.navigate('Register')
    }


    function handleShowPassword() {
        ShowPassword === visibility? SetShowPassword(visibility_off) : SetShowPassword(visibility)
    }
    return (
        
        <ContainerSafe>
            <HeaderLogin 
                Type={null}
                onPress={handleLoginButton}
            />
            <Container>
                <Container>
                    <Title>Faça seu login para começar</Title>
                    <ContainerInput>
                        <ViewInput>
                           <Input
                           placeholder={"Email"}
                           />
                        </ViewInput>
                        <ViewInput>
                            <InputSenha
                              placeholder={"Senha"}
                              secureTextEntry={ShowPassword === visibility? false : true}
                            />
                            <ButtonViewSenha
                            onPress={handleShowPassword}
                            >
                                <Imagem source={ShowPassword}/>
                            </ButtonViewSenha>
                          </ViewInput>
                    </ContainerInput>
                    <ContainerButton>
                        <Button 
                        TypeButton={"Entrar"} 
                        Text="Entrar"
                        onPress={handleLoginButton}
                        />
                        <Button 
                        TypeButton={"Cadastrar"} 
                        Text="Cadastrar"
                        onPress={handleRegisterButton}
                        />
                    </ContainerButton>
                    <TextBelowButton Text={"Esqueci minha senha"}
                    onPress={handleLoginButton}
                    />
                </Container>
            </Container>
        </ContainerSafe>
    )
}