import React,{FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {View,Text} from 'react-native';
import { colors } from '../../color';

//?component
const ListChapterSectionContainer = styled.View`
    width: 100%;
    padding: 5px 0px;
    background-color: ${colors.darkGalaxy1};
    padding: 10px 5px;
`;
const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
const FlatListChapter = styled.FlatList`
    width: 100%;
    margin-top: 10px;
`;
//?types
import {ListChapterSectionProps} from './types';

const ListChapterSection:FunctionComponent<ListChapterSectionProps> = (props) => {
  return (
    <ListChapterSectionContainer>
        <Title>List Chapter : </Title>
    </ListChapterSectionContainer>
  );
}

export default ListChapterSection;