import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { colors } from '../../color';
const { width, height } = Dimensions.get('window');
// ?components
const ChapterItemContainer = styled.ImageBackground`
    width:${(width - 25) / 2}px;
    height:150px;
    border-radius:10px;
    background-color:${colors.pinkPastel};
    margin-bottom:5px;
`;
const InfoChapterContainer = styled.View`
    position: absolute;
    background-color:rgba(0,0,0,0.5);
    width:100%;
    bottom:0;
    left:0;
    padding:10px 5px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
`;
const NameChapter = styled.Text`
    color:${colors.pinkPastel};
    font-size:15px;
    font-weight:bold;
`;
const Chapter = styled.Text`
    color:${colors.white};
    font-size:12px;
    font-weight:bold;
`;
const Description = styled.Text`
    color:${colors.gray};
    font-size:10px;
`;
//?types
import { ChapterProps } from './types';
import { FavoriteStoryScreenNavigationProps as FavoriteStoryNavigationProps } from '../../screens/StorySpace/FavoriteStoryScreen';
const ChapterItem: FunctionComponent<ChapterProps> = (props) => {
    const navigation = useNavigation<FavoriteStoryNavigationProps>();
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                console.log('press' + props.id);
                navigation.navigate('DetailsChapterScreen');
            }}
        >
            <ChapterItemContainer
                source={{ uri: props.image }}
                resizeMode='cover'
                imageStyle={{ borderRadius: 10 }}
                // when image is loaded, show the image
                onLoadEnd={() => {
                    setIsImageLoaded(true);
                }}
            >
                {
                    isImageLoaded ? (
                        <InfoChapterContainer>
                            <NameChapter numberOfLines={2}>{props.nameChapter}</NameChapter>
                            <Chapter>{props.chapter}</Chapter>
                            <Description numberOfLines={3}>{props.description}</Description>
                        </InfoChapterContainer>
                    ) : null
                }
            </ChapterItemContainer>
        </TouchableOpacity>
    );
}

export default ChapterItem;