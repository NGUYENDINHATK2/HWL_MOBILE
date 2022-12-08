import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';
//?components
const StoryFollowSectionContainer = styled.View`
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
//?typee
import { StoryFollowProps } from './types';

const StoryFollowSection: FunctionComponent<StoryFollowProps> = (props) => {
    return (
        <StoryFollowSectionContainer>
            <Title>For you</Title>
        </StoryFollowSectionContainer>
    );
}

export default StoryFollowSection;