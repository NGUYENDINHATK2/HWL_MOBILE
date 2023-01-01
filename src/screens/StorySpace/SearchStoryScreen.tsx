import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text,Image } from 'react-native';
import { colors } from '../../color';
//? components
import SearchBarSection from '../../components/SearchBar/SearchBarSection';
import ListHistorySearchSection from '../../components/ListHistorySearch/ListHistorySearchSection';
const SearchStoryScreenContainer = styled.View`
    flex: 1;
    background-color: ${colors.darkGalaxy};
`;
//? types
interface Props { }

const SearchStoryScreen: FunctionComponent<Props> = () => {
    const dataSearch=[
        {
            id:'1',
            text_search:'Truyện tranh',
            day_search:'Hôm nay',
        },
        {
            id:'2',
            text_search:'Truyện tranh nhat ban',
            day_search:'Hôm qua',
        },
    ]
    return (
        <SearchStoryScreenContainer>
            <SearchBarSection/>
            <ListHistorySearchSection 
                title='Lịch sử tìm kiếm '
                title2='Top tìm kiếm'
                data={dataSearch}
            />
        </SearchStoryScreenContainer>
    );
}

export default SearchStoryScreen;