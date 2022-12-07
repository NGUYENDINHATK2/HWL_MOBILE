import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native'
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStack';
import {GIFJSON} from '../constrain';
import LottieView from 'lottie-react-native';
import {colors}  from '../color'

export type WelcomeNavigationProps = StackScreenProps<RootStackParamList, "WelcomeScreen">;
//?components
const WelcomeScreenContainer = styled.View`
  flex: 1;
  background-color:	${colors.darkGalaxy};
  align-items: center;
  justify-content: center;
`;
const TitleNeon = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`

//?types


import Loading from '../assets/json/lf30_editor_mqh2qjpr.json'

interface Props { }

const WelcomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<WelcomeNavigationProps['navigation']>();
  React.useEffect(() => {
    setTimeout(() => navigation.navigate('Auth'), 2000);
  }, []);
  return (
    <WelcomeScreenContainer>
      <SafeAreaView >
        <TitleNeon>
          Welcome to the Galaxy HWL.
        </TitleNeon>
        <LottieView
          source={GIFJSON.Loading}
          autoPlay
          loop
          style={{ width: 300, height: 300 }}
          speed={0.8}       
        />
      </SafeAreaView>
    </WelcomeScreenContainer>
  );
}

export default WelcomeScreen;