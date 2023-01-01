import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

// ?components
const HistorySearchItemContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    padding: 5px 10px;
`;
const IconTimeContainer = styled.View`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;
const IconTime = styled.Image`
    width: 100%;
    height: 100%;
`;
const IconDeleteContainer = styled.View`
    width: 15px;
    height: 15px;
`;
const IconDelete = styled.Image`
    width: 100%;
    height: 100%;
`;
const TextSearch = styled.Text`
    flex: 1;
    color: white;
    font-size: 14px;
    
`;
//?types
import { HistorySearchItemProps } from './types';
import { IMAGE } from '../../constrain';

const HistorySearchItem: FunctionComponent<HistorySearchItemProps> = (props) => {
    
    return (
        <HistorySearchItemContainer>
            <IconTimeContainer>
                <IconTime source={IMAGE.TimeLeft} />
            </IconTimeContainer>
            <TextSearch>{props.text_search}</TextSearch>
            <IconDeleteContainer>
                <IconDelete source={IMAGE.Delete} />
            </IconDeleteContainer>
        </HistorySearchItemContainer>
    );
}

export default HistorySearchItem;