import React,{FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {View,Text} from 'react-native';


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
`;
//? type

import { Props } from './types';

const FormLoginSection:FunctionComponent<Props> = ({}) => {
  return (
    <FormLoginSectionContainer>
      <Text>FormLoginSection</Text>
    </FormLoginSectionContainer>
  );
}

export default FormLoginSection;