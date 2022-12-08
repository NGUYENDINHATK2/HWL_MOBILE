import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, Dimensions, TouchableOpacity,TouchableHighlight } from 'react-native';
import { colors } from '../../color';
const { width, height } = Dimensions.get('window');
//?component
const NewStoryItemBackground = styled.ImageBackground`
    border-radius: 20px;
    margin: 10px 10px 0px ;
`;
const NewStoryItemContainer = styled.View`
    width: ${width - 20}px;
    height: 200px;
    padding: 20px;
`;
const InFoSContainer = styled.View`
    background-color: rgba(0,0,0,0.5);
    width: 80%;
    position: absolute;
    bottom: 20px;
    left: 20px;
    border-radius: 20px;
    padding: 10px 20px;
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

//?types
import { NewStoryProps } from './types';

const NewStoryItem: FunctionComponent<NewStoryProps> = (props) => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <NewStoryItemBackground
                source={{ uri: props.image }}
                imageStyle={{
                    overflow: 'hidden',
                    borderRadius: 20,
                }}
            >
                <NewStoryItemContainer>
                    <InFoSContainer>
                        <NameStory numberOfLines={1}>{props.name}</NameStory>
                        <ReleaseDate>{props.release_date}</ReleaseDate>
                        <Description numberOfLines={2}>{props.description}</Description>
                    </InFoSContainer>
                </NewStoryItemContainer>
            </NewStoryItemBackground>
        </TouchableOpacity>
    );
}

export default NewStoryItem;