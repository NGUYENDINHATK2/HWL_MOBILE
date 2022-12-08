import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';
//?components
const SearchBarSectionContainer = styled.View`
    flex-direction: row;
    height: 40px;
    margin-top: 10px;
    margin: 10px 10px 0px;
    background-color: 'rgba(255,255,255,0.1)';
    border-radius: 20px;
    align-items: center;
    padding-left: 10px;
    padding-right: 30px;
`;
const IconSearchContainer = styled.View`
    width: 10%;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
const IconSearch = styled.Image`
    width: 20px;
    height: 20px;
`;
const InputSearchContainer = styled.View`
    width: 90%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
const InputSearch = styled.TextInput`
    width: 100%;
    height: 100%;
    color: ${colors.white};
    font-size: 14px;
`;
//?types
import { IMAGE } from '../../constrain';
import { SearchBarProps } from './types';

const SearchBarSection: FunctionComponent<SearchBarProps> = (props) => {
    return (
        <SearchBarSectionContainer>
            <IconSearchContainer>
                <IconSearch
                    source={IMAGE.Search}
                />
            </IconSearchContainer>
            <InputSearchContainer>
                <InputSearch
                    placeholder="Search"
                    placeholderTextColor={colors.darkGray}
                />
            </InputSearchContainer>
        </SearchBarSectionContainer>
    );
}

export default SearchBarSection;