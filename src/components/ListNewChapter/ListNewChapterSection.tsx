import React,{FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {View,Text} from 'react-native';
import {colors} from '../../color';
//?components
import NewChapterItem from './NewChapterItem';
const ListNewChapterSectionContainer = styled.View`
    margin-top: 5px;
    padding: 10px 10px;
    border-bottom-width: 0.2px;
    padding-bottom: 20px;
    border-bottom-color: ${colors.gray};
`;
const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
`;
const NewChapteFlatList = styled.FlatList`
    margin-top: 10px;
`;
//?types
import { ListNewChapterProps } from './types';

const ListNewChapterSection:FunctionComponent<ListNewChapterProps> = (props) => {
    const {data} = props;
  return (
    <ListNewChapterSectionContainer>
        <Title>New Chapter</Title>
        <NewChapteFlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            renderItem={({item}:any) => <NewChapterItem {...item}/>}
            keyExtractor={({id}:any) => id.toString()}
        />
    </ListNewChapterSectionContainer>
  );
}

export default ListNewChapterSection;