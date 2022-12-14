import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';
//?components
import NewChapterItem from './NewChapterItem';
const ListNewChapterSectionContainer = styled.View`
    margin-top: 5px;
    padding: 10px 10px;
    border-bottom-width: 0.2px;
    padding-bottom: 20px;
    border-bottom-color: ${colors.gray};
`;
const MenuContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
`;
const ButtonSeeAll = styled.Image`
    width: 20px;
    height: 20px;
`;
const NewChapteFlatList = styled.FlatList`
    margin-top: 10px;
`;
//?types
import { ListNewChapterProps } from './types';
import { IMAGE } from '../../constrain';
const ListNewChapterSection: FunctionComponent<ListNewChapterProps> = (props) => {
    const { data } = props;
    return (
        <ListNewChapterSectionContainer>
            <MenuContainer>
                <Title>New Chapter</Title>
                <ButtonSeeAll
                    source={IMAGE.RightArrow}
                />
            </MenuContainer>
            <NewChapteFlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                renderItem={({ item }: any) => <NewChapterItem {...item} />}
                keyExtractor={({ id }: any) => id.toString()}
            />
        </ListNewChapterSectionContainer>
    );
}

export default ListNewChapterSection;