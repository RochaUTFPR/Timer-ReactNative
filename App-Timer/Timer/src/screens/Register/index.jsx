import { HeaderLogin } from "../../Components/HeaderLogin"
import { Button } from "../../Components/Button"
import {TextBelowButton} from '../../Components/TextBelowButton'
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import visibility from '../../img/visibility.png'
import visibility_off from '../../img/visibility_off.png'

import { 
    ButtonViewSenha,
    Container, 
    Title, 
    ContainerInput,
    ContainerButton, 
    Input,ViewInput,
    Imagem, 
    InputSenha 
    } from "./styles"


export function Register(){
    const [ShowPassword, SetShowPassword] = useState(visibility_off);


    const navigation = useNavigation()

    function handleCancelButton() {
        navigation.navigate('Login')
    }

    function handleShowPassword() {
        ShowPassword === visibility? SetShowPassword(visibility_off) : SetShowPassword(visibility)
    }

    return (
        <>
          <HeaderLogin Type={"Cancelar"}
          onPress={handleCancelButton}
          />
          <Container>
            <Container>
                      <Title>Crie sua conta</Title>
                      <ContainerInput>
                        <ViewInput>
                            <Input
                                placeholder={"Nome de Usuário"}
                            />
                        </ViewInput>
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
                          Text="Cadastrar"
                          />
                      </ContainerButton>
                      <TextBelowButton Text={"Já tenho uma conta"}
                      onPress={handleCancelButton}/>
                  </Container>
          </Container>
        </>
    )
}