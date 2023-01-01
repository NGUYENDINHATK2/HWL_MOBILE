import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import LotteView from 'lottie-react-native'
import { colors } from '../../color';
import AuthorSection from '../Author/AuthorSection';
//?components
import BottomPopup from '../BottomPopup/BottomPopup';
const AuthorContainer = styled.View`
  flex:1;
  margin:0 10px;
`;
const MenuContainer = styled.View`
    justify-content:space-between;
    flex-direction:row;
    align-items:center;
    padding-bottom:5px;
    margin-top:5px;
`;
const Title = styled.Text`
  color:${colors.white};
  font-size:16px;
  font-weight:bold;
`;
//?types
import { AuthorItemProps } from '../Author/types';
import { GIFJSON } from '../../constrain';
interface Props { }

const Author: FunctionComponent<Props> = ({ }) => {
  const [visible, setVisible] = React.useState(false);
  const listAuthor: AuthorItemProps[] = [
    {
      id: '1',
      id_author: '1',
      name: 'Author 1',
      avatar: 'https://img.wattpad.com/10ceff286c5d45e98c135cfa23bacbdf60eb1ea0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7379424e5a6e56346772785449773d3d2d3336312e313531333637363134633235346461393436363934303137373233372e6a7067?s=fit&w=720&h=720',
      description: 'Description 1',
      sum_story: 10,
      sum_follower: 100,
    },
    {
      id: '2',
      id_author: '2',
      name: 'Author 2',
      avatar: 'https://img.wattpad.com/10ceff286c5d45e98c135cfa23bacbdf60eb1ea0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7379424e5a6e56346772785449773d3d2d3336312e313531333637363134633235346461393436363934303137373233372e6a7067?s=fit&w=720&h=720',
      description: 'Description 2',
      sum_story: 20,
      sum_follower: 200,
    },
  ];
  return (
    <AuthorContainer>
      <MenuContainer>
        <Title>List Author</Title>
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
      <AuthorSection data={listAuthor} />
      <BottomPopup
        visible={visible}
        setVisible={setVisible}
        children={<View />}
        title="Sort"
      />
    </AuthorContainer>
  );
}

export default Author;