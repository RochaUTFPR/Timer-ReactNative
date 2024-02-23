import React, { useState, useEffect } from 'react';
import { 
    Container,
    ModalContainer,
    CloseButton,
    TextTitulo,
    TextUpon,
    IMG_GRANDPA_AVOCADO,
    ModalAlignment,
    IMG_CLOSE
    } from './styles'

import { Modal, Animated, Easing, Dimensions } from 'react-native';
import GRANDPA_AVOCADO from '../../img/GRANDPA_AVOCADO.png'
import CLOSE from '../../img/Close.png'
const windowHeight = Dimensions.get('window').height;

interface ModalVisible {
    HandleUponButton: boolean
    HandlesetUponButton: (value: boolean) => void;
}

export function UponAvocado( props : ModalVisible) {
    const [modalVisible, setModalVisible] = useState(false);
    const translateY = new Animated.Value(windowHeight); // Inicia o banner no final da tela

    useEffect(() => {
        if (modalVisible) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 500,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: windowHeight,
                duration: 500,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start();
        }
    }, [modalVisible]);

    useEffect(() => {
        if(props.HandleUponButton === true) {
            setModalVisible(true);
        }
    },[props.HandleUponButton])

    function hideModal() {
        setModalVisible(false);
        props.HandlesetUponButton(false)
    };
 
    return (
        <>
        {modalVisible? (
            <Container>
                <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={hideModal}   
                >
                <ModalContainer style={ { transform: [{ translateY }] }}>
                        <CloseButton onPress={hideModal}>
                            <IMG_CLOSE
                            source={CLOSE}
                            />
                        </CloseButton>
                    <ModalAlignment>
                        <TextTitulo>Para que servem os abacates?</TextTitulo>
                        <TextUpon>Além de fazer bem e deixar o cabelo bonito, os abacates servem como moedas, ou seja, a cada timer completo você ganha um, porém se nao terminar vai perder abacate bem. </TextUpon>
                    </ModalAlignment>
                    <IMG_GRANDPA_AVOCADO
                        source={GRANDPA_AVOCADO}
                        />
                </ModalContainer>
                </Modal>
            </Container>
        ):(<>
        
        </>)
        }
        </> 
    );
}
