import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { colors } from '../../color';
import LottieView from 'lottie-react-native';
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
    border-radius: 10px;
`;
const ViewStoryContainer = styled.View`
    background-color: ${colors.darkGalaxy1};
    height: 30px;
    max-width: 100%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0px 5px;
    top: 5px;
    right: 5px;
    flex-direction: row;
`;
const ViewStory = styled.Text`
    color: ${colors.white};
    font-size: 14px;
    width: 40%;
    font-weight: bold;
    margin-right: 5px;
`;
const ViewStoryIcon = styled.Image`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;
const NameStory = styled.Text`
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
    align-self: flex-start;
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
import { IMAGE ,GIFJSON} from '../../constrain';
import {HomeStoryScreenNavigationProps as HomeStoryNavigationProps} from '../../screens/StorySpace/HomeStorySpaceScreen';
const ListStoryItem: FunctionComponent<StoryItemProps> = (props) => {
    const navigation = useNavigation<HomeStoryNavigationProps>();
    const handlePress = () => {
        navigation.navigate('DetailsStoryScreen');
    };
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
                        <NameStory numberOfLines={2}>
                            <LottieView
                                source={GIFJSON.SUCCESS}
                                autoPlay
                                loop
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                            {props.name}</NameStory>
                        <ReleaseDate>{props.release_date}</ReleaseDate>
                        <Description numberOfLines={2}>{props.description}</Description>
                    </InFoSContainer>
                    <ViewStoryContainer>
                        <ViewStory numberOfLines={1}>323</ViewStory>
                        <ViewStoryIcon source={IMAGE.EyeView} />
                    </ViewStoryContainer>
                </StoryItemContainer>
            </StoryItemBackground>
        </TouchableOpacity>
    );
}

export default ListStoryItem;