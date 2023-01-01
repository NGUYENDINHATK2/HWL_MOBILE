import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
//?component
const DetailsChapterHeaderSectionContainer = styled.View`
    width: 100%;
    align-items: center;
    padding: 10px 0px;
    border-bottom-width: 0.2px;
    border-bottom-color: #fff;
`;
const NameStory = styled.Text`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
`;
const NameChapter = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;
const Author = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;
//?types
import { DetailsChapterHeaderSectionProps } from './types';

const DetailsChapterHeaderSection: FunctionComponent<DetailsChapterHeaderSectionProps> = () => {
    return (
        <DetailsChapterHeaderSectionContainer>
            <NameStory numberOfLines={2}>Truyen Tranh Doremon</NameStory>
            <NameChapter numberOfLines={2}>Chapter 1 : Doremon đã đến với Nobita như thế nào?</NameChapter>
            <Author numberOfLines={2}>Author: Fujiko F. Fujio</Author>
        </DetailsChapterHeaderSectionContainer>
    );
}

export default DetailsChapterHeaderSection;