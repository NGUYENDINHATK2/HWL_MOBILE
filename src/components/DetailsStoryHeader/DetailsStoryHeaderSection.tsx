import React, { FunctionComponent } from 'react';
import styleds from 'styled-components/native';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IMAGE } from '../../constrain';
//?component
import RatingSection from '../Rating/RatingSection';
const DetailsStoryHeaderSectionContainer = styleds.View`
    width: 100%;
    height: 250px;
`;
const ImageBackground = styleds.ImageBackground`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`;
const DetailsStoryHeaderContent = styleds.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`;
const HeaderContainer = styleds.View`
    width: 100%;
    padding: 10px 5px;
    background-color: rgba(0,0,0,0.5);
`;
const BodyContainer = styleds.View`
    flex: 1;
    padding: 30px 10px;
    flex-direction: row;
`;
const IconBackContainer = styleds.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;
const IconBack = styleds.Image`
    width: 20px;
    height: 20px;
`;
const Title = styleds.Text`
    font-size: 16px;
    font-weight: bold;
`;
const ImageStory = styleds.Image`
    width: 100px;
    height: 100%;
    border-radius: 5px;
`;
const InfoStory = styleds.View`
    flex: 1;
    padding: 0 10px;
`;
const NameStory = styleds.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;
const AuthorStory = styleds.Text`
    font-size: 16px;
    color: #fff;
`;
const DescriptionStory = styleds.Text`
    font-size: 12px;
    color: #fff;
    flex: 1;
`;


//?type
import { DetailsStoryHeaderSectionProps } from './types';
import { DetailsStoryScreenNavigationProps as DetailsStoryNavigationProps } from '../../screens/StorySpace/DetailsStoryScreen';
const DetailsStoryHeaderSection: FunctionComponent<DetailsStoryHeaderSectionProps> = (props) => {
    const navigation = useNavigation<DetailsStoryNavigationProps>();
    return (
        <DetailsStoryHeaderSectionContainer>
            <ImageBackground
                source={{
                    uri: 'https://3.bp.blogspot.com/-8CKoVt70M10/WSwsjE7AIOI/AAAAAAAAni4/I21idy1IMa8Dxm5T3quEnj_pfvjSDER2gCLcB/s1600/00-doraemon-fb-timeline-cover.jpg',
                }}
                resizeMode="cover"
            >
                <DetailsStoryHeaderContent>
                    <HeaderContainer >
                        <IconBackContainer onPress={() => navigation.goBack()}>
                            <IconBack
                                source={IMAGE.LeftArrow}
                                resizeMode="contain"
                            />
                            <Title>Back</Title>
                        </IconBackContainer>
                    </HeaderContainer>
                    <BodyContainer>
                        <ImageStory
                            source={{
                                uri: 'https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-truyen-tranh-doremon.jpg',
                            }}
                        />
                        <InfoStory>
                            <NameStory numberOfLines={2}>Truyện tranh Doremon </NameStory>
                            <AuthorStory numberOfLines={1}>Author: Fujiko F. Fujio</AuthorStory>
                            <RatingSection numberRating={4} />
                            <DescriptionStory numberOfLines={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.
                                Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.
                                Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
                            </DescriptionStory>
                        </InfoStory>
                    </BodyContainer>
                </DetailsStoryHeaderContent>
            </ImageBackground>
        </DetailsStoryHeaderSectionContainer>
    );
}

export default DetailsStoryHeaderSection;