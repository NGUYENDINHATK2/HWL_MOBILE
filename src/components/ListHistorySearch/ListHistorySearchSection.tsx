import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
//?components
import HistorySearchItem from './HistorySearchItem';
const ListHistorySearchSectionContainer = styled.View`
    padding: 10px 5px;
`;
const Title = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;
const FlatListHistory = styled.FlatList`
    margin-top: 10px;
`;
//?types
import { ListHistorySearchSectionProps } from './types';
const ListHistorySearchSection: FunctionComponent<ListHistorySearchSectionProps> = (props) => {
    const { title,title2, data } = props;
    return (
        <ListHistorySearchSectionContainer>
            <Title>{title}</Title>
            <FlatListHistory
                data={data}
                renderItem={({ item }: any) => <HistorySearchItem {...item} />}
                keyExtractor={({ id }: any) => id.toString()}
            />
            <Title>{title2}</Title>
            <FlatListHistory
                data={data}
                renderItem={({ item }: any) => <HistorySearchItem {...item} />}
                keyExtractor={({ id }: any) => id.toString()}
            />
        </ListHistorySearchSectionContainer>
    );
}

export default ListHistorySearchSection;