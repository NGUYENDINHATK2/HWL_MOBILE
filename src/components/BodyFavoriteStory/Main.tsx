import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity, View } from 'react-native'
import LotteView from 'lottie-react-native';
import { colors } from '../../color';
//?components
import BottomPopup from '../BottomPopup/BottomPopup';
import ChapterItem from './ChapterItem';
import StoryItem from './StoryItem';
const MainContainer = styled.View`
    flex:1;
    margin-left:10px;
    margin-right:10px;
`;
const MenuContainer = styled.View`
    justify-content:space-between;
    flex-direction:row;
    align-items:center;
    padding-bottom:10px;
    margin-top:10px;
`;
const Title = styled.Text`
    color:${colors.white};
    font-size:16px;
    font-weight:bold;
`;
const TitleDetail = styled.Text`
    color:${colors.white};
    font-size:14px;
    font-weight:bold;
    margin-top:10px;
    margin-bottom:5px;
`;
const MainContent = styled.View`
    flex:1;
    margin-top:10px;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    border-bottom-width:0.2px;
    border-bottom-color:${colors.darkGray};
`;
const IconDownUp = styled.Image`
    width:20px;
    height:20px;
`;
//?types
interface Props { }
import { GIFJSON, IMAGE } from '../../constrain';
const Main: FunctionComponent<Props> = (props) => {
    const [isShowChapter, setIsShowChapter] = React.useState(true);
    const [isShowStory, setIsShowStory] = React.useState(true);
    const [visible, setVisible] = React.useState(false);
    const listChapter = [
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
        {
            id: '4',
            idStory: '1',
            nameStory: 'Tây Du I',
            nameChapter: 'TÂY DU - CHAPTER 2: LONG VƯƠNG THẦN TƯỚNG',
            image: 'https://f8-zpcloud.zdn.vn/5206149356392843355/5844c7f32975f02ba964.jpg',
            description: 'Thủ hộ kỳ kinh',
            timeAgo: '1 giờ trước',
            chapter: '2'
        },
    ];
    const listStory = [
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
        },
        {
            id: '4',
            name: "Doremon Nước Nhật Thời Nguyên Thuỷ",
            image: 'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemons9_02_sbsmarttv-e73982260c40-1609395345843-63UWkTZR.png?v=0',
            release_date: "2016-04-13",
            description: 'Nobita và nước Nhật thời nguyên thủy là phim khoa học viễn tưởng 1989 của đạo diễn Shibayama Tsutomu. Truyện được tác giả Fujiko F. Fujio đăng trên tạp chí CoroCoro Comic từ tháng 10'
        }
    ];
    const renderListChapter = () => {
        return listChapter.map((item, index) => {
            return (
                <ChapterItem key={index} {...item} />
            );
        });
    };
    const renderListStory = () => {
        return listStory.map((item, index) => {
            return (
                <StoryItem key={index} {...item} />
            );
        });
    };
    return (
        <MainContainer>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <MenuContainer>
                    <Title>All</Title>
                    <TouchableOpacity onPress={() => { setVisible(!visible) }}>
                        <LotteView
                            source={GIFJSON.Sort}
                            autoPlay
                            loop
                            style={{
                                width: 40,
                                height: 40,
                            }}
                            speed={0.7}
                        />
                    </TouchableOpacity>
                </MenuContainer>
                <MenuContainer>
                    <TitleDetail>List Chapter Favorite</TitleDetail>
                    <TouchableOpacity onPress={() => { setIsShowChapter(!isShowChapter) }}>
                        <IconDownUp
                            source={
                                isShowChapter ? IMAGE.Up : IMAGE.DownIcon
                            }
                        />
                    </TouchableOpacity>
                </MenuContainer>
                <MainContent>
                    {isShowChapter ? renderListChapter() : null}
                </MainContent>
                <MenuContainer>
                    <TitleDetail>List Story Favorite</TitleDetail>
                    <TouchableOpacity onPress={() => { setIsShowStory(!isShowStory) }}>
                        <IconDownUp
                            source={
                                isShowStory ? IMAGE.Up : IMAGE.DownIcon
                            }
                        />
                    </TouchableOpacity>
                </MenuContainer>
                <MainContent>
                    {isShowStory ? renderListStory() : null}
                </MainContent>
            </ScrollView>
            <BottomPopup
                visible={visible}
                setVisible={setVisible}
                children={<View />}
                title="Sort"
            />
        </MainContainer>
    );
}

export default Main;