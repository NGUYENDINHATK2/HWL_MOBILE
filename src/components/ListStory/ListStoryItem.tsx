import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import { colors } from '../../color';
const { width, height } = Dimensions.get('window');
//?component
const StoryItemBackground = styled.ImageBackground`
    border-radius: 10px;
    margin: 10px 10px 0px ;
`;
const StoryItemContainer = styled.View`
    width: ${width/3 }px;
    height: 200px;
`;
const InFoSContainer = styled.View`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding: 10px 10px;
`;
const NameStory = styled.Text`
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
`;
const ReleaseDate = styled.Text`
    color: ${colors.white};
    font-size: 14px;
    font-weight: bold;
`;
const Description = styled.Text`
    color: ${colors.white};
    font-size: 12px;
    font-weight: bold;
`;

import { StoryItemProps } from './types';

const ListStoryItem: FunctionComponent<StoryItemProps> = (props) => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <StoryItemBackground
                source={{ uri: props.image }}
                imageStyle={{
                    overflow: 'hidden',
                    borderRadius: 10,
                }}
            >
                <StoryItemContainer>
                    <InFoSContainer>
                        <NameStory numberOfLines={2}>{props.name}</NameStory>
                        <ReleaseDate>{props.release_date}</ReleaseDate>
                        <Description numberOfLines={2}>{props.description}</Description>
                    </InFoSContainer>
                </StoryItemContainer>
            </StoryItemBackground>
        </TouchableOpacity>
    );
}

export default ListStoryItem;