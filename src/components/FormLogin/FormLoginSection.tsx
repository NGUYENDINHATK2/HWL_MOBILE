import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { useNavigation} from '@react-navigation/native'

//?components
const FormLoginSectionContainer = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
`;
const FormLoginContainer = styled.View`
    width: 80%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    flex-direction: row;
`;
const FormLoginInput = styled.TextInput`
    flex: 1;
    height: 100%;
    color: #fff;
    font-size: 14px;
    padding-left: 15px;
    padding-right: 15px;
`;
const EyeIconContainer = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
`
const EyeIcon = styled.Image`
    width: 25px;
    height: 25px;
`;
const FogotPassword = styled.Text`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
`;
const ButtonLogin = styled.TouchableHighlight`
    width: 80%;
    height: 50px;
    background-color: #fff;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;
const ButtonLoginText = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: bold;
`;
const ButtonRegister = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;
const ButtonRegisterText = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`;


//? type

import { FormLoginSectionProps } from './types';
import { LoginScreenNavigationProps as LoginNavigationProps   } from '../../screens/Auth/LoginScreen';
import { IMAGE } from '../../constrain';
import { colors } from '../../color';

const FormLoginSection: FunctionComponent<FormLoginSectionProps> = (props) => {
  const { setSpeed } = props;
  const navigation= useNavigation<LoginNavigationProps>();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [hiddenPassword, setHiddenPassword] = React.useState<boolean>(true);

  // function 
  const handleEmailChange = (text: string) => {
    setEmail(text);
    email.length > 3 ? setSpeed(1) : setSpeed(0.5);
  }
  const handlePasswordChange = (text: string) => {
    setPassword(text);
    password.length > 6 ? setSpeed(1) : setSpeed(0.5);
  }
  const handleLogin = () => {
    navigation.navigate('Main');
  }
  const handleRegister = () => {
    console.log('register');
  }


  return (
    <FormLoginSectionContainer>
      <FormLoginContainer>
        <EyeIcon source={IMAGE.Email} />
        <FormLoginInput
          value={email}
          onChangeText={(text) => handleEmailChange(text)}
          placeholder="Email" placeholderTextColor={colors.darkGray} />
      </FormLoginContainer>
      <FormLoginContainer>
        <EyeIcon source={IMAGE.Password} />
        <FormLoginInput
          value={password}
          onChangeText={(text) => handlePasswordChange(text)}
          placeholder="Password"
          secureTextEntry={hiddenPassword}
          placeholderTextColor={colors.darkGray}
        />
        <EyeIconContainer
          onPress={() => setHiddenPassword(!hiddenPassword)}
        >
          <EyeIcon source={
            hiddenPassword ? IMAGE.Eye : IMAGE.EyeOff
          } />
        </EyeIconContainer>
      </FormLoginContainer>
      <FogotPassword>
        Forgot Password?
      </FogotPassword>
      <ButtonLogin
        underlayColor={colors.lightGalaxy}
        onPress={handleLogin}
      >
        <ButtonLoginText>
          Login
        </ButtonLoginText>
      </ButtonLogin>
      <ButtonRegister
        onPress={handleRegister}
      >
        <ButtonRegisterText>
          Register
        </ButtonRegisterText>
      </ButtonRegister>
    </FormLoginSectionContainer>
  );
}

export default FormLoginSection;