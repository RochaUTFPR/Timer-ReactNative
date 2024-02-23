import React, { useState, useEffect } from 'react';
import { 
    Container,
    ModalContainer,
    CloseButton,
    TextTitulo,
    TextUpon,
    IMG_GRANDPA_AVOCADO,
    ModalAlignment,
    IMG_CLOSE,
    ButtonFold,
    TextButtonFold,
    AlignmentButtonFold
    } from './styles'

import { Modal, Animated, Easing, Dimensions } from 'react-native';

import CLOSE from '../../img/Close.png'
import GRANDPA_FOLD from '../../img/GRANDPA_FOLD.png'

const windowHeight = Dimensions.get('window').height;

interface ModalVisible {
    HandleFoldButton: boolean
    HandlesetFoldButton: (value: boolean) => void;
    FunctionHandleStopTimer: () => void
}

export function Fold( props : ModalVisible) {
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
        if(props.HandleFoldButton === true) {
            setModalVisible(true);
        }
    },[props.HandleFoldButton])

    function hideModal() {
        setModalVisible(false);
        props.HandlesetFoldButton(false)
    };
    
    function HandleStopTimer() {
        props.FunctionHandleStopTimer()
        props.HandlesetFoldButton(false)
        setModalVisible(false)
    }
 
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
                    <TextTitulo>Tem certeza que vai desistir bem?</TextTitulo>
                    <TextUpon>Cuidado, se desistir vai perder um abacate. Como assim não gosta de abacate?</TextUpon>
                </ModalAlignment>
                <AlignmentButtonFold>
                    <ButtonFold>
                        <TextButtonFold
                        onPress={HandleStopTimer}
                        >Desistir</TextButtonFold>
                    </ButtonFold>
                </AlignmentButtonFold>
                <IMG_GRANDPA_AVOCADO
                    source={GRANDPA_FOLD}
                    />
            </ModalContainer>
            </Modal>
        </Container>
        ):(<></>)
        }
        </> 
    );
}
