import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../color';
const { width, height } = Dimensions.get('window');
//?components
const StoryItemContainer = styled.ImageBackground`
    width:${(width - 30) / 3}px;
    height:200px;
    border-radius:10px;
    background-color:${colors.pinkPastel};
    margin-bottom:5px;
`;
const InfoStoryContainer = styled.View`
    position: absolute;
    background-color:rgba(0,0,0,0.5);
    width:100%;
    bottom:0;
    left:0;
    padding:10px 5px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
`;
const NameStory = styled.Text`
    color:${colors.pinkPastel};
    font-size:20px;
    font-weight:bold;
`;
const Story = styled.Text`
    color:${colors.white};
    font-size:15px;
    font-weight:bold;
`;
const Description = styled.Text`
    color:${colors.gray};
    font-size:10px;
`;
//?types
import { StoryProps } from './types';
import { FavoriteStoryScreenNavigationProps as FavoriteStoryNavigationProps } from '../../screens/StorySpace/FavoriteStoryScreen';
const StoryItem: FunctionComponent<StoryProps> = (props) => {
    const navigation = useNavigation<FavoriteStoryNavigationProps>();
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                console.log('press' + props.id);
                navigation.navigate('DetailsStoryScreen');
            }}
        >
            <StoryItemContainer
                source={{ uri: props.image }}
                resizeMode='cover'
                imageStyle={{ borderRadius: 10 }}
                onLoadEnd={() => {
                    setIsImageLoaded(true);
                }}
            >
                {
                    isImageLoaded ? (
                        <InfoStoryContainer>
                            <NameStory numberOfLines={1}>{props.name}</NameStory>
                            <Story>{props.release_date}</Story>
                            <Description numberOfLines={3}>{props.description}</Description>
                        </InfoStoryContainer>
                    ) : null
                }
            </StoryItemContainer>
        </TouchableOpacity>
    );
}

export default StoryItem;