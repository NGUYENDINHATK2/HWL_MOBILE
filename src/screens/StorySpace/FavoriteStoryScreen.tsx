import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
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
import SearchBarSection from '../../components/SearchBar/SearchBarSection';
import BodyFavoriteStorySection from '../../components/BodyFavoriteStory/BodyFavoriteStorySection';
const FavoriteStoryScreenContainer = styled.View`
  flex:1;
  background-color:${colors.darkGalaxy};
`;
const Title = styled.Text`
  color:${colors.white};
  align-self:center;
  margin-top:10px;
  font-size:20px;
  font-weight:bold;
`;
//?types
interface Props { }
export type FavoriteStoryScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Main'>,
  CompositeNavigationProp<
    BottomTabScreenProps<StoryBottomParamList, "FavoriteStory">["navigation"],
    DrawerScreenProps<MainDrawerParamList, "StoryNavihation">["navigation"]
  >
>;
const FavoriteStoryScreen: FunctionComponent<Props> = ({ }) => {
  const [indexMenu, setIndexMenu] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(true);
  const heightBottomTabBar = useBottomTabBarHeight();
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const renderTitle = () => {
    switch (indexMenu) {
      case 0: return <Title>Favorite Story</Title>;
      case 1: return <Title>Favorite Search</Title>;
      case 2: return <Title>Favorite Author</Title>;
      default: return null;
    }
  };
  return loading ? <ModalLoading /> :
    <FavoriteStoryScreenContainer style={{
      paddingBottom: heightBottomTabBar
    }}>
      {renderTitle()}
      <BodyFavoriteStorySection
        indexMenu={indexMenu}
        setIndexMenu={setIndexMenu}
      />
    </FavoriteStoryScreenContainer>
}

export default FavoriteStoryScreen;