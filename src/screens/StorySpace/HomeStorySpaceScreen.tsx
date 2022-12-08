import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { BackHandler } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import { MainDrawerParamList } from '../../navigation/Main';
import { StoryBottomParamList } from '../../navigation/Story';
import { colors } from '../../color';
//?components
import HomeStoryHeaderSection from '../../components/HomeStoryHeader/HomeStoryHeaderSection';
const HomeStorySpaceScreenContainer = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${colors.darkGalaxy};
    padding: 10px 10px 50px 10px;
`;

//?typed

interface Props { }
export type HomeStoryScreenNavigationProps = CompositeNavigationProp<
  BottomTabScreenProps<StoryBottomParamList, "HomeStory">["navigation"],
  DrawerScreenProps<MainDrawerParamList, "StoryNavihation">["navigation"]
>;
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
  return (
    <HomeStorySpaceScreenContainer>
      <HomeStoryHeaderSection />
    </HomeStorySpaceScreenContainer>
  );
}

export default HomeStorySpaceScreen;