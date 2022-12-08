import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';

//?components
import ListStoryItem from './ListStoryItem';
const ListStorySectionContainer = styled.View`
    margin-top: 10px;
    border-bottom-width: 0.2px;
    padding-bottom: 20px;
    border-bottom-color: ${colors.gray};
`;
const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin: 10px 10px 0px ;
    color: ${colors.white};
`;
const StoryFlatList = styled.FlatList`
    margin-top: 10px;
`;
//?types
import { ListStoryProps } from './types';

const ListStorySection: FunctionComponent<ListStoryProps> = (props) => {
    const {title,data} = props;
    return (
        <ListStorySectionContainer>
            <Title>{title}</Title>
            <StoryFlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                renderItem={({ item }: any) => <ListStoryItem {...item} />}
                keyExtractor={({ id }: any) => id.toString()}
            />
        </ListStorySectionContainer>
    );
}

export default ListStorySection;