import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LotteView from 'lottie-react-native';
// ?components
const HomeStoryHeaderSectionContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0px 10px 8px;
    // border-bottom-width: 0.2px;
    // border-bottom-color: gray;
`;
const TitleSection = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;
const IConSearch = styled.Image`
    width: 25px;
    height: 25px;
`;
//?type
import { GIFJSON, IMAGE } from '../../constrain';
import { HomeStoryScreenNavigationProps as HomeStoryNavigationProps } from '../../screens/StorySpace/HomeStorySpaceScreen';
import { HomeStoryHeaderProps } from './types';

const HomeStoryHeaderSection: FunctionComponent<HomeStoryHeaderProps> = (props) => {
    const navigation = useNavigation<HomeStoryNavigationProps>();
    const {hiddenSearchBar,setHiddenSearchBar} = props;
    return (
        <HomeStoryHeaderSectionContainer>
            <TouchableOpacity onPress={() => {
                navigation.openDrawer();
            }}>
                <LotteView
                    source={GIFJSON.MenuDrawer}
                    autoPlay
                    loop={false}
                    style={{ width: 35, height: 35 }}
                    speed={0.5}
                />
            </TouchableOpacity>
            <TitleSection>Have a nice day</TitleSection>
            <TouchableOpacity onPress={() => {
                setHiddenSearchBar(!hiddenSearchBar);
            }}>
                <IConSearch
                    source={IMAGE.Search}
                />
            </TouchableOpacity>
        </HomeStoryHeaderSectionContainer>
    );
}

export default HomeStoryHeaderSection;