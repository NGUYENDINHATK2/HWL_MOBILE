import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, ScrollView, TouchableOpacity, Platform, BackHandler } from 'react-native';
import { RootStackParamList } from '../../navigation/RootStack';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack';
import { colors } from '../../color';
//?component
import DetailsChapterHeaderSection from '../../components/DetailsChapterHeader/DetailsChapterHeaderSection';
import DetailsChapterSelectSection from '../../components/DetailsChapterSelect/DetailsChapterSelectSection';
import ListImageStorySection from '../../components/ListImageStory/ListImageStorySection';
import BottomPopup from '../../components/BottomPopup/BottomPopup';
import ListChapterBottomSection from '../../components/ListChapterBottom/ListChapterSection';
const DetailsChapterScreenContainer = styled.View`
    flex: 1;
    background-color: ${colors.darkGalaxy};
`;
//?types
interface Props { }
import { ListChapterItemProps } from '../../components/ListChapter/types';
import { ImageStoryProps } from '../../components/ListImageStory/types';
export type DetailsChapterScreenNavigationProps = StackScreenProps<RootStackParamList, 'DetailsChapterScreen'>;
const DetailsChapterScreen: FunctionComponent<Props> = () => {
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation<DetailsChapterScreenNavigationProps['navigation']>();
    React.useEffect(() => {
        const backAction = () => {
            console.log("backAction");
            navigation.goBack();
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [])
    const listImageChapterStory: ImageStoryProps[] = [
        {
            id: '1',
            url: "https://b-f8-zpcloud.zdn.vn/1760417694300577309/f118221a3459ec07b548.jpg"
        },
        {
            id: '2',
            url: "https://b-f8-zpcloud.zdn.vn/4725885986430885117/594f6a6ee920317e6831.jpg"
        },
        {
            id: '3',
            url: "https://b-f8-zpcloud.zdn.vn/1760417694300577309/f118221a3459ec07b548.jpg"
        },
        {
            id: '4',
            url: "https://b-f8-zpcloud.zdn.vn/4725885986430885117/594f6a6ee920317e6831.jpg"
        },
        {
            id: '5',
            url: "https://b-f8-zpcloud.zdn.vn/1760417694300577309/f118221a3459ec07b548.jpg"
        },
    ]
    const listChapterItem: Array<ListChapterItemProps> = []
    for (let i = 0; i < 10; i++) {
        listChapterItem.push({
            id: `${i + 1}`,
            id_chapter: `${i + 1}`,
            id_story: "1",
            title: `Chapter ${i + 1}`,
            content: `Content Chapter ${i + 1}`,
            chapter: i + 1,
            created_at: "2021-07-01",
            updated_at: "2021-07-01"
        });
    }
    const selectChapter = (): any => {
        console.log("selectChapter");
    }
    return (
        <DetailsChapterScreenContainer>
            <DetailsChapterHeaderSection />
            <DetailsChapterSelectSection setVisible={setVisible} />
            <ListImageStorySection listImageChapterStory={listImageChapterStory} />
            <BottomPopup
                visible={visible}
                setVisible={setVisible}
                title="Select Chapter"
            >
                <ListChapterBottomSection
                    data={listChapterItem}
                />
            </BottomPopup>
        </DetailsChapterScreenContainer>
    );
}

export default DetailsChapterScreen;

