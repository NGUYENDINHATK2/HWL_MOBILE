import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../color';
import LottieView from 'lottie-react-native';
//?components
const ModalLoadingContainer = styled.Modal`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${colors.darkGalaxy};
`;
const ModalLoadingView = styled.View`
    flex: 1;
    background-color: ${colors.darkGalaxy};
    align-items: center;
    justify-content: center;
`;

//types
import { GIFJSON } from '../constrain';
interface Props { }

const ModalLoading: FunctionComponent<Props> = ({ }) => {
    const [modalVisible, setModalVisible] = React.useState(true);
    return (
        <ModalLoadingContainer
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { 
                setModalVisible(!modalVisible);
            }}
        >
            <ModalLoadingView>
                <LottieView
                    source={GIFJSON.Loading}
                    autoPlay
                    loop
                    style={{ width: 200, height: 200 }}
                    speed={0.8}
                />
            </ModalLoadingView>
        </ModalLoadingContainer>
    );
}

export default ModalLoading;