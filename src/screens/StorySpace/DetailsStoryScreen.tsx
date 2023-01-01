import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, SafeAreaView, BackHandler, ScrollView } from 'react-native';
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
const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
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
import { ListChapterItemProps } from '../../components/ListChapter/types';
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

    const listChapterItem: Array<ListChapterItemProps> = [
        {
            id: "1",
            id_chapter: "1",
            id_story: "1",
            title: "Chapter 1",
            content: "Content Chapter 1",
            chapter: 1,
            created_at: "2021-07-01",
            updated_at: "2021-07-01"
        },
        {
            id: "2",
            id_chapter: "2",
            id_story: "1",
            title: "Chapter 2",
            content: "Content Chapter 2",
            chapter: 2,
            created_at: "2021-07-01",
            updated_at: "2021-07-01"
        },
        {
            id: "3",
            id_chapter: "3",
            id_story: "1",
            title: "Chapter 3",
            content: "Content Chapter 3",
            chapter: 3,
            created_at: "2021-07-01",
            updated_at: "2021-07-01"
        },
        {
            id: "4",
            id_chapter: "4",
            id_story: "1",
            title: "Chapter 4",
            content: "Content Chapter 4",
            chapter: 4,
            created_at: "2021-07-01",
            updated_at: "2021-07-01"
        },
        {
            id: "5",
            id_chapter: "5",
            id_story: "1",
            title: "Chapter 5",
            content: "Content Chapter 5",
            chapter: 5,
            created_at: "2021-07-01",
            updated_at: "2021-07-01"
        },
        {
            id: "6",
            id_chapter: "6",
            id_story: "1",
            title: "Chapter 6",
            content: "Content Chapter 6",
            chapter: 6,
            created_at: "2021-07-01",
            updated_at: "2021-07-01"
        },
    ]

    return (
        <DetailsStoryScreenContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <ListChapterSection
                    data={listChapterItem.reverse()}
                    listHeaderComponent={
                        <>
                            <DetailsStoryHeaderSection />
                            <InfoStorySection />
                            <DescriptionStorySection />
                            <Title>List Chapter : </Title>
                        </>
                    }
                />
            </SafeAreaView>
        </DetailsStoryScreenContainer>
    );
}

export default DetailsStoryScreen;