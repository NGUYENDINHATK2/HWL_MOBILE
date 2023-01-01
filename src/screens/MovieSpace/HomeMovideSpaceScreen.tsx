import React,{FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {View,Text} from 'react-native';
import Video from 'react-native-video';
// ?components
const HomeMovideSpaceScreenContainer = styled.View`
  flex:1;
  background-color:#000;
`;
//?types
interface Props{}

const HomeMovideSpaceScreen:FunctionComponent<Props> = ({}) => {
  return (
    <HomeMovideSpaceScreenContainer >
      <Video
        source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
        style={{width:300,height:300,backgroundColor:'red'}}
        controls={true}
        resizeMode={'cover'}
      />
    </HomeMovideSpaceScreenContainer>
  );
}

export default HomeMovideSpaceScreen;