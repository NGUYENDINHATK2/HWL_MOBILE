import React,{FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {View,Text} from 'react-native';

//?components
//?types
import { NewChapterProps } from './types';

const NewChapterItem:FunctionComponent<NewChapterProps> = (props) => {
  return (
    <View>
      <Text>NewChapterItem</Text>
    </View>
  );
}

export default NewChapterItem;