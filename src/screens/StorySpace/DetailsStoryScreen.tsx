import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, SafeAreaView, BackHandler,ScrollView } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { MainDrawerParamList } from '../../navigation/Main';
import { StoryBottomParamList } from '../../navigation/Story';
import { RootStackParamList } from '../../navigation/RootStack';
import { colors } from '../../color';
import ImageViewer from 'react-native-image-zoom-viewer';
//?component
import DetailsStoryHeaderSection from '../../components/DetailsStoryHeader/DetailsStoryHeaderSection';
import InfoStorySection from '../../components/InfoStory/InfoStorySection';
import DescriptionStorySection from '../../components/DescriptionStory/DescriptionStorySection';
import ListChapterSection from '../../components/ListChapter/ListChapterSection';
const DetailsStoryScreenContainer = styled.View`
    flex: 1;
    background-color: ${colors.darkGalaxy};
`;
//?type
interface Props { }
export type DetailsStoryScreenNavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<RootStackParamList, 'DetailsStoryScreen'>,
    CompositeNavigationProp<
        BottomTabScreenProps<StoryBottomParamList, "HomeStory">["navigation"],
        DrawerScreenProps<MainDrawerParamList, "StoryNavihation">["navigation"]
    >
>;
const DetailsStoryScreen: FunctionComponent<Props> = ({ }) => {
    const navigation = useNavigation<DetailsStoryScreenNavigationProps>();
    React.useEffect(() => {
        const backAction = () => {
            navigation.goBack();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [])


    return (
        <DetailsStoryScreenContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <DetailsStoryHeaderSection />
                    <InfoStorySection />
                    <DescriptionStorySection />
                    <ListChapterSection />
                </ScrollView>
            </SafeAreaView>
        </DetailsStoryScreenContainer>
    );
}

export default DetailsStoryScreen;