import React, { useState, useEffect } from 'react';
import { 
    Container,
    ModalContainer,
    ModalAlignment,
    ButtonOffStore,
    HandleShopGrandpa,
    ButtonChooseGrandpa,
    ContainerShopGrandpa,
    ImageGrandaShop,
    TextGrandpaButton,
    ContainerText,
    ContainerImageGrandpa,
} from './styles'

import { PanResponder, Animated, Easing, Dimensions, Modal} from 'react-native';

import GranpaPink from '../../img/Grandpa_PinkShop.png'
import GranpaPurple from '../../img/Grandpa_PurpleShop.png' 
import GranpaGreen from '../../img/Grandpa_GreenShop.png'  

interface ModalVisible {
    shopGrandpa: boolean
    HandlesetShopGrandpa: (value: boolean) => void;
    SetGrandpaImage: (value: string) => void;
}

export function ShopGrandpa(props: ModalVisible) {
    const [modalVisible, setModalVisible] = useState(false);
    const [touchStartY, setTouchStartY] = useState(0);
    const [modalY, setModalY] = useState(0);
    const translateY = new Animated.Value(modalY? modalY : 300); // 

    //useEffect(() => {...}, [modalVisible, modalY]);: Este trecho de código é um efeito colateral que observa as variáveis ​​modalVisible e modalY. Sempre que uma dessas variáveis ​​muda, ele é acionado. Ele utiliza a função Animated.timing() para animar o modal quando ele é mostrado ou quando sua posição vertical (modalY) é alterada. A animação ocorre de forma instantânea, com duração zero, para que o modal seja reposicionado instantaneamente quando movido.
    useEffect(() => {
        if (modalVisible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 500,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start();
        }
    }, [modalVisible, modalY]);

    //useEffect(() => {...}, [props.HandleUponButton]);: Este outro efeito colateral observa a propriedade HandleUponButton do props. Se essa propriedade for true, ele define modalVisible como true, mostrando o modal. Isso permite que o modal seja exibido quando a propriedade HandleUponButton for alterada de fora do componente.
    useEffect(() => {
        if (props.shopGrandpa === true) {
            setModalVisible(true);
        }
    }, [props.shopGrandpa])

    //const panResponder = PanResponder.create({ ... });: Este trecho cria um panResponder, que lida com os gestos de arrastar do usuário na tela. Ele especifica os comportamentos a serem executados em diferentes eventos, como onPanResponderGrant, onPanResponderMove, onPanResponderRelease e onPanResponderTerminate. Isso permite que o modal seja arrastado para baixo para fechá-lo.
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (event) => {
            setTouchStartY(event.nativeEvent.pageY);
        },
        onPanResponderMove: (event) => {
            const dy = event.nativeEvent.pageY - touchStartY;
            if (dy > 0) {
                setModalY(dy); // Atualiza a posição y do modal enquanto arrasta para baixo
            }
        },
        onPanResponderRelease: () => {
            // Limpa o estado de rastreamento do toque
            setTouchStartY(0);
            if (modalY > 150) {
                hideModal();
            } else {
                setModalY(0); // Retorna o modal à sua posição inicial se não for arrastado para baixo o suficiente
            }
        },
        onPanResponderTerminate: () => {
            // Limpa o estado de rastreamento do toque
            setTouchStartY(0);
        }
    });

    function hideModal() {
        setModalVisible(false);
        props.HandlesetShopGrandpa(false);
    };

    function HandleSetGrandpa(Grandpa: string) {
        if(Grandpa === 'Green'){
            props.SetGrandpaImage(Grandpa) 
          }
          if(Grandpa === 'Pink'){
            props.SetGrandpaImage(Grandpa) 
          }
          if(Grandpa === 'Purple'){
            props.SetGrandpaImage(Grandpa) 
          }
        hideModal()
    }

    return (
        <>
            {modalVisible ? (
                <Container>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={hideModal}
                    >
                        <ModalContainer style={{ transform: [{ translateY }] }} {...panResponder.panHandlers}>
                            <ModalAlignment>
                                <ButtonOffStore/>
                                    <ContainerShopGrandpa>
                                        <ButtonChooseGrandpa onPressOut={() => HandleSetGrandpa('Green')}>
                                            <HandleShopGrandpa>
                                                <ContainerImageGrandpa TypeGrandpa={'Green'}>
                                                    <ImageGrandaShop source={GranpaGreen}/>
                                                </ContainerImageGrandpa>
                                                <ContainerText>
                                                    <TextGrandpaButton>Vovó Juju</TextGrandpaButton>
                                                </ContainerText>
                                            </HandleShopGrandpa>    
                                        </ButtonChooseGrandpa>
                                        <ButtonChooseGrandpa onPressOut={() => HandleSetGrandpa('Pink')}>
                                            <HandleShopGrandpa>
                                                <ContainerImageGrandpa TypeGrandpa={'Pink'}>
                                                    <ImageGrandaShop source={GranpaPink}/>
                                                </ContainerImageGrandpa>
                                                <ContainerText>
                                                    <TextGrandpaButton>MC Juju</TextGrandpaButton>
                                                </ContainerText>
                                            </HandleShopGrandpa>    
                                        </ButtonChooseGrandpa>
                                        <ButtonChooseGrandpa onPressOut={() => HandleSetGrandpa('Purple')}>
                                            <HandleShopGrandpa>
                                                <ContainerImageGrandpa TypeGrandpa={'Purple'}>
                                                    <ImageGrandaShop source={GranpaPurple}/>
                                                </ContainerImageGrandpa>
                                                <ContainerText>
                                                    <TextGrandpaButton>Pato Juju</TextGrandpaButton>
                                                </ContainerText>
                                            </HandleShopGrandpa>    
                                        </ButtonChooseGrandpa>
                                    </ContainerShopGrandpa>
                            </ModalAlignment>
                        </ModalContainer>
                    </Modal>
                </Container>
            ) : (<></>)
            }
        </>
    );
}
