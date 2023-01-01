import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
//?components
import SearchBarSection from '../SearchBar/SearchBarSection';
const SearchContainer = styled.View`
    flex:1;
`;
//?types
interface Props {}

const Search: FunctionComponent<Props> = (props) => {
    return (
        <SearchContainer>
            <SearchBarSection />
        </SearchContainer>
    );
}

export default Search;