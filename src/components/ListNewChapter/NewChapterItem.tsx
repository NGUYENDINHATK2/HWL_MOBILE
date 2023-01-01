import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { colors } from '../../color';
const { width } = Dimensions.get('window');
//?components
const StoryItemBackground = styled.ImageBackground`
    border-radius: 10px;
    margin: 10px 10px 0px ;
`;
const StoryItemContainer = styled.View`
    width: ${width / 2 - 30}px;
    height: 200px;
`;
const InFoSContainer = styled.View`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding: 10px 10px;
    border-radius: 10px;
`;
const ChapterContainer = styled.View`
    background-color: ${colors.darkGalaxy1};
    width: 50px;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 5px;
`;
const Chapter = styled.Text`
    color: ${colors.white};
    font-size: 14px;
    font-weight: bold;
`;
const NameStory = styled.Text`
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
`;
const Description = styled.Text`
    color: ${colors.white};
    font-size: 12px;
    font-weight: bold;
`;
//?types
import { NewChapterProps } from './types';
import {HomeStoryScreenNavigationProps as HomeStoryNavigationProps} from '../../screens/StorySpace/HomeStorySpaceScreen';
const NewChapterItem: FunctionComponent<NewChapterProps> = (props) => {
  const navigation = useNavigation<HomeStoryNavigationProps>();
  const handlePress = () =>{
    navigation.navigate('DetailsChapterScreen')
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <StoryItemBackground
        source={{ uri: props.image }}
        imageStyle={{
          overflow: 'hidden',
          borderRadius: 10,
        }}
      >
        <StoryItemContainer>
          <InFoSContainer>
            <NameStory numberOfLines={2}>{props.nameChapter}</NameStory>
            <Description numberOfLines={2}>{props.description}</Description>
          </InFoSContainer>
          <ChapterContainer>
            <Chapter>{props.chapter}</Chapter>
          </ChapterContainer>
        </StoryItemContainer>
      </StoryItemBackground>
    </TouchableOpacity>
  );
}

export default NewChapterItem;