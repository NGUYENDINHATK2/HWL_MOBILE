import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { colors } from '../../color';
//?components
import FormLoginSection from '../../components/FormLogin/FormLoginSection';

const LoginScreenContainer = styled.View`
    flex: 1;
    background-color: ${colors.darkgalaxy};
    align-items: center;
`;
const LoginTitle = styled.Text`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    text-align: center;
`;
//?type 
import ImageGalaxy  from '../../assets/json/4441-galaxy-orbit-animation.json'


interface Props { }


const LoginScreen: FunctionComponent<Props> = ({ }) => {
    return (
        <LoginScreenContainer>
            <LottieView
                source={ImageGalaxy}
                autoPlay
                loop
                style={{ width: 300, height: 300 }}
                speed={0.5}
            />
            <LoginTitle>
                Login By Your Account
            </LoginTitle>
            <FormLoginSection />
        </LoginScreenContainer>
    );
}

export default LoginScreen;