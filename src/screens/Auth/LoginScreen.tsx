import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../../navigation/Auth';
import { colors } from '../../color';
//?components
import FormLoginSection from '../../components/FormLogin/FormLoginSection';

const LoginScreenContainer = styled.View`
    flex: 1;
    background-color: ${colors.darkGalaxy1};
`;
const LoginTitle = styled.Text`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    text-align: center;
`;
//?type 
import { GIFJSON } from '../../constrain';
interface Props { }
import { WelcomeNavigationProps } from '../WelcomeScreen';
export type LoginScreenNavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<AuthStackParamList, "LoginScreen">,
    WelcomeNavigationProps['navigation']
>;

const LoginScreen: FunctionComponent<Props> = ({ }) => {
    const [speed, setSpeed] = React.useState<number>(0.5);
    return (
        <LoginScreenContainer>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
            >
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <LottieView
                        source={GIFJSON.ImageGalaxy}
                        autoPlay
                        loop
                        style={{ width: '100%', height: 300 }}
                        speed={speed}
                    />
                </View>
                <LoginTitle>
                    Login By Your Account
                </LoginTitle>
                <FormLoginSection setSpeed={setSpeed} />
            </KeyboardAvoidingView>
        </LoginScreenContainer>
    );
}

export default LoginScreen;