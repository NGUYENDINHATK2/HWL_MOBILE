import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';

//?component
const InfoStorySectionContainer = styled.View`
    width: 100%;
    padding: 5px 0px;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.darkGalaxy1};
`;
//?types
import { InfoStoryProps, InfoStoryItemProps } from './types';

const InfoStorySection: FunctionComponent<InfoStoryProps> = ({ }) => {
    return (
        <InfoStorySectionContainer>
            <InfoStoryItem number={678} text={'View'} />
            <InfoStoryItem number={378} text={'Rating'} />
            <InfoStoryItem number={30} text={'Chapter'} />
        </InfoStorySectionContainer>
    );
}

export default InfoStorySection;

//?component

const InfoStoryItemContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Number = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
const TextCotent = styled.Text`
    font-size: 14px;
    color: #fff;
`;
const InfoStoryItem: FunctionComponent<InfoStoryItemProps> = (props) => {
    return (
        <InfoStoryItemContainer>
            <Number>{props.number}</Number>
            <TextCotent>{props.text}</TextCotent>
        </InfoStoryItemContainer>
    )
}