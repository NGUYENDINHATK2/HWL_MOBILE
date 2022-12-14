import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { BackHandler } from 'react-native';
import { View, ScrollView } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { MainDrawerParamList } from '../../navigation/Main';
import { StoryBottomParamList } from '../../navigation/Story';
import { RootStackParamList } from '../../navigation/RootStack';
import { colors } from '../../color';
//?components
import ModalLoading from '../ModalLoading';
import HomeStoryHeaderSection from '../../components/HomeStoryHeader/HomeStoryHeaderSection';
import SearchBarSection from '../../components/SearchBar/SearchBarSection';
import HomeStoryCardSection from '../../components/HomeStoryCard/HomeStoryCardSection';
import ListStorySection from '../../components/ListStory/ListStorySection';
import StoryFollowSection from '../../components/StoryFollow/StoryFollowSection';
import QuickSelectionMenuSection from '../../components/QuickSelectionMenu/QuickSelectionMenuSection';
import ListNewChapterSection from '../../components/ListNewChapter/ListNewChapterSection';
const HomeStorySpaceScreenContainer = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${colors.darkGalaxy};
    padding: 10px 0px 50px 0px;
`;

//?typed

interface Props { }
export type HomeStoryScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Main'>,
  CompositeNavigationProp<
    BottomTabScreenProps<StoryBottomParamList, "HomeStory">["navigation"],
    DrawerScreenProps<MainDrawerParamList, "StoryNavihation">["navigation"]
  >
>;

interface NewChapterItem {
  id: string;
  idStory: string;
  nameStory: string;
  nameChapter: string;
  image: string;
  description: string;
  timeAgo: string;
  chapter: string;
}

const HomeStorySpaceScreen: FunctionComponent<Props> = () => {
  React.useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [hiddenSearchBar, setHiddenSearchBar] = React.useState<boolean>(true);
  const listNewStory = [
    {
      id: '1',
      name: "Tây hành kỷ III",
      image: 'https://gamek.mediacdn.vn/133514250583805952/2021/4/13/top-10-phim-hoat-hinh-3d-trung-quoc-moi-nhat-2020-3-16183148159101839031222.jpg',
      release_date: "2021-04-13",
      description: 'Tiếp tục cuộc hành trình trả kinh của thầy trò đường tăng với nhiều diễn biến phức xờ tạp'
    },
    {
      id: '2',
      name: "Doremon Nước Nhật Thời Nguyên Thuỷ",
      image: 'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemons9_02_sbsmarttv-e73982260c40-1609395345843-63UWkTZR.png?v=0',
      release_date: "2016-04-13",
      description: 'Nobita và nước Nhật thời nguyên thủy là phim khoa học viễn tưởng 1989 của đạo diễn Shibayama Tsutomu. Truyện được tác giả Fujiko F. Fujio đăng trên tạp chí CoroCoro Comic từ tháng 10'
    },
    {
      id: '3',
      name: "Doremon Nước Nhật Thời Nguyên Thuỷ",
      image: 'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemons9_02_sbsmarttv-e73982260c40-1609395345843-63UWkTZR.png?v=0',
      release_date: "2016-04-13",
      description: 'Nobita và nước Nhật thời nguyên thủy là phim khoa học viễn tưởng 1989 của đạo diễn Shibayama Tsutomu. Truyện được tác giả Fujiko F. Fujio đăng trên tạp chí CoroCoro Comic từ tháng 10'
    }
  ];
  const listNewChapter: NewChapterItem[] = [
    {
      id: '1',
      idStory: '1',
      nameStory: 'Tây Du I',
      nameChapter: 'TÂY DU - CHAPTER 1: RỒNG VÀ SÓI',
      image: 'https://s1.boctem.com/wp-content/uploads/2021/06/105248.jpg',
      description: 'Khởi đầu của đại kiếp',
      timeAgo: '1 giờ trước',
      chapter: '1'
    },
    {
      id: '2',
      idStory: '2',
      nameStory: 'Ma Quân Bá Sủng',
      nameChapter: 'Ma Quân Bá Sủng, Thiên Tài Manh Bảo Phúc Hắc Mẫu Thân – Chap 1 & 2',
      image: 'https://f8-zpcloud.zdn.vn/161838790465487699/46d41075eef337ad6ee2.jpg',
      description: 'Xuyên không bất ngờ',
      timeAgo: '1 giờ trước',
      chapter: '1 & 2'
    },
    {
      id: '3',
      idStory: '1',
      nameStory: 'Tây Du I',
      nameChapter: 'TÂY DU - CHAPTER 2: LONG VƯƠNG THẦN TƯỚNG',
      image: 'https://f8-zpcloud.zdn.vn/5206149356392843355/5844c7f32975f02ba964.jpg',
      description: 'Thủ hộ kỳ kinh',
      timeAgo: '1 giờ trước',
      chapter: '2'
    },
  ];

  return loading ? <ModalLoading /> : (
    <HomeStorySpaceScreenContainer>
      <HomeStoryHeaderSection
        hiddenSearchBar={hiddenSearchBar}
        setHiddenSearchBar={setHiddenSearchBar} />
      {
        !hiddenSearchBar ? <SearchBarSection /> : null
      }
      <ScrollView>
        <HomeStoryCardSection data={listNewStory} />
        <QuickSelectionMenuSection />
        <ListNewChapterSection data={listNewChapter} />
        <StoryFollowSection />
        <ListStorySection title='Anime' data={listNewStory} />
        <ListStorySection title='China' data={listNewStory} />
      </ScrollView>
    </HomeStorySpaceScreenContainer>
  )
}

export default HomeStorySpaceScreen;