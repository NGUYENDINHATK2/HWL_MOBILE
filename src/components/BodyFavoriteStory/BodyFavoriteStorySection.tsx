import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { ScrollView, View } from 'react-native';
import { colors } from '../../color';
//?components
import MenuHeader from './MenuHeader';
import Main from './Main';
import Search from './Search';
import Author from './Author';
const BodyFavoriteStorySectionContainer = styled.View`
    flex:1;
    margin-top:15px;
    background-color:${colors.darkGalaxy1};
    border-top-left-radius:30px;
    border-top-right-radius:30px;
`;
const BodyFavoriteStorySectionContent = styled.View`
    flex:1;
    margin-top:15px;
`;

//?types
interface Props {
  indexMenu: number;
  setIndexMenu: React.Dispatch<React.SetStateAction<number>>;
}
const BodyFavoriteStorySection: FunctionComponent<Props> = (props) => {
  const { indexMenu, setIndexMenu } = props;
  const renderContent = () => {
    switch (indexMenu) {
      case 0: return <Main />
      case 1: return <Search />
      case 2: return <Author />
      default: return <View />
    }
  }
  return (
    <BodyFavoriteStorySectionContainer>
      <MenuHeader
        indexMenu={indexMenu}
        setIndexMenu={setIndexMenu}
      />
      <BodyFavoriteStorySectionContent>
        {renderContent()}
      </BodyFavoriteStorySectionContent>
    </BodyFavoriteStorySectionContainer>
  );
}

export default BodyFavoriteStorySection;