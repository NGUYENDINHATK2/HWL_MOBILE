import React,{FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {View,Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//?component
const  ListChapterItemContainer = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
    border-bottom-width: 0.2px;
    border-bottom-color: #fff;
    padding: 15px 10px;
`;
const Title = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #fff;
`;
//?type 
import {ListChapterItemProps} from './types';

const ListChapterBottomItem:FunctionComponent<ListChapterItemProps> = (props) => {
  const handlePress = () => {
    console.log('press');
  }
  return (
    <ListChapterItemContainer onPress={handlePress}>
        <Title numberOfLines={1}>{props.title}: {props.content}</Title>
    </ListChapterItemContainer>
  );
}

export default ListChapterBottomItem;